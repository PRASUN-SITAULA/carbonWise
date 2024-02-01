const dotenv = require('dotenv')
const { ChatOpenAI } = require('@langchain/openai')
const { ChatPromptTemplate } = require('@langchain/core/prompts')
const { StringOutputParser } = require('@langchain/core/output_parsers')

dotenv.config({path:'../../.env'})

const model = new ChatOpenAI({openAIApiKey: process.env.OPENAI_API_KEY})
const outputParser = new StringOutputParser()

const prompt = ChatPromptTemplate.fromMessages([
    ["system", "You are a world class professor of environmental science and carbon footprint."],
    ["user", "{input}"],
])

const chain = prompt.pipe(model).pipe(outputParser)
const getAnswer = async () => 
{
    const answer = await chain.invoke({
        input: "I drive car even for shorter distances."
    })
    console.log(answer)
}
// getAnswer()

module.exports = getAnswer