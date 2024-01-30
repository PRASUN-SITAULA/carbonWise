const openAI = require('langchain/llms/openai')
const promptTemplate = require('langchain/prompts')


const model = new openAI({temperature: 0.9, openAIApiKey: process.env.OPENAI_SECRET_KEY})

const template = "What is capital of Nepal?"

const prompt = new promptTemplate.PromptTemplate({
    template: template,
    inputVariables: ["topic"]
}) 
