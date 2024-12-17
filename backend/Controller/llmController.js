const dotenv = require('dotenv')
const { ChatOpenAI } = require('@langchain/openai')
const { ChatPromptTemplate } = require('@langchain/core/prompts')
const { StringOutputParser } = require('@langchain/core/output_parsers')
const sharedData = require('../utils/shareData') 

dotenv.config()

exports.getAnswer = async (req, res) => 
{
    const apiKey = process.env.OPENAI_API_KEY
    const customBaseUrl = process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1' // Add custom base URL

    const model =  new ChatOpenAI({
        openAIApiKey: apiKey,
        baseUrl: customBaseUrl // Set the base URL
    });
    const outputParser = new StringOutputParser()

    const prompt = ChatPromptTemplate.fromMessages([
        ["system", "You are a world class professor of environmental science and environmental activist."],
        ["user", "{input}"],
    ])

    const chain = prompt.pipe(model).pipe(outputParser)

    const userData = sharedData.getUserData()
    if(userData.household === undefined && userData.lifestyleData === undefined && userData.transportData === undefined){
        res.status(200).json({
            status: "No Data",
            data: '',
            electricityCarbonEmission: 0,
            totalWasteCarbonEmission: 0,
            transporationCarbonEmission: 0
        })
    }
    else{
        const { household, lifestyleData, transportData } = userData

        const householdStr = `The household consists of ${household.numberOfPeople} with housing type ${household.housingType}. The total electricity consumption is in KWh in a month is ${household.electricityConsumption} 
        with clean energy percentage ${household.cleanEnergyPercentage} and heating source as ${household.heatingEnergySource}.`

        const wasteHandling = lifestyleData.wasteHandling
        const recyclableMaterials = Object.keys(wasteHandling).filter(material => wasteHandling[material]);
        const recyclableMaterialsStr = recyclableMaterials.join(", ");

        const lifestyleStr = `The household preffered diet is ${lifestyleData.preferredDiet}. The answer to do you buy mostly local products is ${lifestyleData.buyLocalProducts}. 
        The answer to Do you buy from environmentally responsible companies is ${lifestyleData.buyFromEnvironmentallyResponsible}. The family eats out ${lifestyleData.eatOutFrequency} times a week. 
        The individual recyles ${recyclableMaterialsStr}.`

        let transportationStr = `The family may travel in train, bus or tram. The average distance travelled in respective vehicles are ${transportData.Train}
        ${transportData.Bus}, ${transportData.Tram}.`
        
        if(transportData.useCar == 'Yes'){
            transportationStr += `The family also owns a car and they travel a total distance of ${transportData.carDistanceTraveled}`
        }
        else{
            transportationStr += `The family do not use a car.`
        }

        if(transportData.useMotorbike == 'Yes'){
            transportationStr += `The family also owns a motor bike  and they travel a total distance of ${transportData.motorbikeDistanceTraveled}`
        }
        else{
            transportationStr += `The family do not use a motorbike.`
        }

        transportationStr += `The total distance travelled by the family in short range flight is ${transportData.privateFlights["shortRange"]} and in long range flight is ${transportData.privateFlights["longRange"]}`

        const answer = await chain.invoke({
            input: `Give ways to reduce carbon footprint based on following data of family's household, lifestyle and transportation: 
            ${householdStr}\n
            ${lifestyleStr}\n
            ${transportationStr}
            Give the answer by grouping household, lifestyle and transportation.
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
    }
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

    const wasteCarbonEmissionPerPerson = 6.04 //per week

    const tempElectricEmission = Number(household.electricityConsumption) * electricityEmissionFactor
    const electricityCarbonEmission =  tempElectricEmission - (Number(household.cleanEnergyPercentage)/100 * tempElectricEmission)

    let totalWasteCarbonEmission = wasteCarbonEmissionPerPerson * Number(household.numberOfPeople)
    
    if(lifestyleData.wasteHandling["food"]){
        totalWasteCarbonEmission -= 0.191 * Number(household.numberOfPeople)
    }
    if(lifestyleData.wasteHandling["paper"]){
        totalWasteCarbonEmission -= 0.978 * Number(household.numberOfPeople)

    }
    
    if(lifestyleData.wasteHandling["tinCans"]){
        totalWasteCarbonEmission -= 0.767 * Number(household.numberOfPeople)

    }
    if(lifestyleData.wasteHandling["plastic"]){
        totalWasteCarbonEmission -= 0.306 * Number(household.numberOfPeople)

    }
    if(lifestyleData.wasteHandling["glass"]){
        totalWasteCarbonEmission -= 0.211 * Number(household.numberOfPeople)

    }
   
    const flightCarbonEmission = (Number(transportData.privateFlights["longRange"]) * longRangeFlightEmissionFactorPerPerson + Number(transportData.privateFlights["shortRange"]) * shortRangeFlightEmissionFactorPerPerson)/52
    
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
