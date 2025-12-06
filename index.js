import OpenAI from 'openai'

const openai = new OpenAI({
    dangerouslyAllowBrowser: true
})

const messages = [
    
]

const response = await openai.chat.completions.create({
    model: 'gpt-4',
    message: messages
})