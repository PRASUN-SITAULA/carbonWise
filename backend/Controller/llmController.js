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

    // const transportationStr = `The family travel in train, subway, intercitybus, citybus and sometimes even with walking. The average hours travelled in respective vehicles are ${transportData.intercityTrain}, 
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
    res.status(200).json({
        status: "success",
        data: answer
    })
    console.log(userData)
}

const calculateCarbonFootprint = (userData) =>{
    const { household, lifestyle, transportation } = userData

    // Emission factors for electricity and vehicles
    const electricityEmissionFactor = 0.332
    const bikeEmissionFactorPerPerson = 0.114
    const carEmissionFactorPerPerson = 0.17
    const trainEmissionFactorPerPerson = 0.034
    const tramEmissionFactorPerPerson = 0.029
    const busEmissionFactorPerPerson = 0.097
    const shortRangeFlightEmissionFactorPerPerson = 0.151
    const longRangeFlightEmissionFactorPerPerson = 0.148

    const wasteCarbonEmissionPerPerson = 315

    const electricityCarbonEmission = Number(household.electricityConsumption) * electricityEmissionFactor - (Number(household.cleanEnergyPercentage)/100 * Number(household.electricityConsumption))

    let totalWasteCarbonEmission = wasteCarbonEmissionPerPerson * Number(household.numberOfPeople)
    
    if(lifestyle.wasteHandling["glass"]){
        totalWasteCarbonEmission -= 11 * Number(household.numberOfPeople)
    }
    else if(lifestyle.wasteHandling["paper"]){
        totalWasteCarbonEmission -= 51 * Number(household.numberOfPeople)
    }
    else if(lifestyle.wasteHandling["plastic"]){
        totalWasteCarbonEmission -= 16 * Number(household.numberOfPeople)
    }
    else if(lifestyle.wasteHandling["food"]){
        totalWasteCarbonEmission -= 10 * Number(household.numberOfPeople)
    }
    else if(lifestyle.wasteHandling["tinCans"]){
        totalWasteCarbonEmission -= 40 * Number(household.numberOfPeople)
    }
    else{
        totalWasteCarbonEmission += 0
    }

    const flightCarbonEmission = transportation.privateFlights["longRange"] * longRangeFlightEmissionFactorPerPerson + transportation.privateFlights["shortRange"] * shortRangeFlightEmissionFactorPerPerson
    let transporationCarbonEmission = transportation.Train * trainEmissionFactorPerPerson + transportation.Bus * busEmissionFactorPerPerson + transportation.Tram * tramEmissionFactorPerPerson + flightCarbonEmission
    
    // if(transportation.useCar){
    //     transporationCarbonEmission = 
    // }

}
