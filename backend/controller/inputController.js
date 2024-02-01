const dotenv = require('dotenv')
const { ChatOpenAI } = require('@langchain/openai')
const { ChatPromptTemplate } = require('@langchain/core/prompts')
const { StringOutputParser } = require('@langchain/core/output_parsers')

dotenv.config()

const model = new ChatOpenAI({openAIApiKey: "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"})
const outputParser = new StringOutputParser()

const template = "What is capital of Nepal?"

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
getAnswer()