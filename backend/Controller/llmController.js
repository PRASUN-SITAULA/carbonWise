const dotenv = require('dotenv')
const { ChatOpenAI } = require('@langchain/openai')
const { ChatPromptTemplate } = require('@langchain/core/prompts')
const { StringOutputParser } = require('@langchain/core/output_parsers')
const sharedData = require('../utils/shareData') 

dotenv.config()

exports.getAnswer = async (req, res) => 
{
    const apiKey = process.env.OPENAI_API_KEY

    const model =  new ChatOpenAI({
        openAIApiKey: apiKey,
    });
    const outputParser = new StringOutputParser()

    const prompt = ChatPromptTemplate.fromMessages([
        ["system", "You are a world class professor of environmental science and carbon footprint."],
        ["user", "{input}"],
    ])

    const chain = prompt.pipe(model).pipe(outputParser)

    const userData = sharedData.getUserData()

    const { household, lifestyleData, transportData } = userData

    const householdStr = `The household consists of ${household.numberOfPeople} with housing type ${household.housingType}. The total electricity consumption in a month is ${household.electricityConsumption} 
    with clean energy percentage ${household.cleanEnergyPercentage} and heating source is ${household.heatingEnergySource}.`
    
    // take the object of the materials that the user recycles and convert it to string.
    const wasteHandling = lifestyleData.wasteHandling
    const recyclableMaterials = Object.keys(wasteHandling).filter(material => wasteHandling[material]);
    const recyclableMaterialsStr = recyclableMaterials.join(", ");

    const lifestyleStr = `The household preffered diet is ${lifestyleData.preferredDiet}. The answer to do you buy mostly local products is ${lifestyleData.buyLocalProducts}. 
    The answer to Do you buy from environmentally responsible companies? is ${lifestyleData.buyFromEnvironmentallyResponsible}. The family eats out ${lifestyleData.eatOutFrequency} times a week. 
    The individual recyles ${recyclableMaterialsStr}.`

    // const transportationStr = `The family may travel in train, bus or tram. The average hours travelled in respective vehicles are ${transportData.intercityTrain}, 
    // ${transportData.subway}, ${transportData.intercityBus}, ${transportData.cityBus}, ${transportData.tram} and ${transportData.bikewalk}. `
    
        // Filter out empty/unused modes of transport
    const usedTransport = Object.entries(transportData)
    .filter(([key, value]) => value !== 0 && key !== 'useCar' && key !== 'useMotorbike' && key !== 'carMileage' && key !== 'carConsumption' && key !== 'motorbikeMileage' && key !== 'motorbikeConsumption')
    .map(([key, value]) => `${key}: ${value}`);

    // Add private flights information if used
    if (transportData.privateFlights.longRange > 0 || transportData.privateFlights.shortRange > 0) {
    usedTransport.push(`privateFlights: ${transportData.privateFlights.longRange}+${transportData.privateFlights.shortRange}`);
    }

    // Join modes of transport with commas
    const transportationStr = usedTransport.join(", ");


    const answer = await chain.invoke({
        input: `Give ways to reduce carbon footprint based on following data of an individual's household, lifestyle and transportation: 
        ${householdStr}\n
        ${lifestyleStr}\n
        ${transportationStr}
        `
    })
    const [electricityCarbonEmission, totalWasteCarbonEmission, transporationCarbonEmission] = calculateCarbonFootprint(userData)
    const totalCarbonFootprint = electricityCarbonEmission + totalWasteCarbonEmission + transporationCarbonEmission
    res.status(200).json({
        status: "success",
        data: answer,
        electricityCarbonEmission,
        totalWasteCarbonEmission,
        transporationCarbonEmission
    })
    // console.log(userData)
    // console.log(totalCarbonFootprint)
}

const calculateCarbonFootprint = (userData) =>{
    const {  household, lifestyleData, transportData } = userData

    // Emission factors for electricity and vehicles
    const electricityEmissionFactor = 0.083 //per week
    const bikeEmissionFactorPerPerson = 0.114
    const carEmissionFactorPerPerson = 0.17
    const trainEmissionFactorPerPerson = 0.034
    const tramEmissionFactorPerPerson = 0.029
    const busEmissionFactorPerPerson = 0.097
    const shortRangeFlightEmissionFactorPerPerson = 0.151
    const longRangeFlightEmissionFactorPerPerson = 0.148

    const wasteCarbonEmissionPerPerson = 315

    const tempElectricEmission = Number(household.electricityConsumption) * electricityEmissionFactor
    const electricityCarbonEmission =  tempElectricEmission - (Number(household.cleanEnergyPercentage)/100 * tempElectricEmission)

    let totalWasteCarbonEmission = wasteCarbonEmissionPerPerson * Number(household.numberOfPeople)
    
    if(lifestyleData.wasteHandling["food"]){
        totalWasteCarbonEmission -= 10 * Number(household.numberOfPeople)
    }
    if(lifestyleData.wasteHandling["paper"]){
        totalWasteCarbonEmission -= 51 * Number(household.numberOfPeople)
    }
    
    if(lifestyleData.wasteHandling["tinCans"]){
        totalWasteCarbonEmission -= 40 * Number(household.numberOfPeople)
    }
    if(lifestyleData.wasteHandling["plastic"]){
        totalWasteCarbonEmission -= 16 * Number(household.numberOfPeople)
    }
    if(lifestyleData.wasteHandling["glass"]){
        totalWasteCarbonEmission -= 11 * Number(household.numberOfPeople)
    }
   
    const flightCarbonEmission = Number(transportData.privateFlights["longRange"]) * longRangeFlightEmissionFactorPerPerson + Number(transportData.privateFlights["shortRange"]) * shortRangeFlightEmissionFactorPerPerson
    
    let transporationCarbonEmission = Number(transportData.Train) * trainEmissionFactorPerPerson + Number(transportData.Bus) * busEmissionFactorPerPerson + Number(transportData.Tram) * tramEmissionFactorPerPerson
    
    if(transportData.useCar = 'Yes'){
        transporationCarbonEmission += Number(transportData.carDistanceTraveled) * carEmissionFactorPerPerson
    }
    if(transportData.useMotorbike = 'Yes'){
        transporationCarbonEmission += Number(transportData.motorbikeDistanceTraveled) * bikeEmissionFactorPerPerson
    }

    transporationCarbonEmission += flightCarbonEmission

    return [electricityCarbonEmission, totalWasteCarbonEmission, transporationCarbonEmission]
}
