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

    // const { household, lifestyleData, transportData } = req.userData

    const answer = await chain.invoke({
        input: `Give ways to reducre carbon footprint based on following data: 
        ${userData}\n`
    })
    res.status(200).json({
        status: "success",
        data: answer
    })
    console.log(userData)
}
