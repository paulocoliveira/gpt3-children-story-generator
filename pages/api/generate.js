import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const basePromptPrefix =
`
Crie um resumo para uma história infantil, mencionando os personagens, o cenário onde a história acontece e o enredo, com o título abaixo:

Título: 
`;

const generateAction = async (req, res) => {

    const baseCompletion = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `${basePromptPrefix}${req.body.userInput}\n`,
        temperature: 0.7,
        max_tokens: 500,
    });
    
    const basePromptOutput = baseCompletion.data.choices.pop();

    const secondPrompt = 
    `
    Pegue o resumo e o título da história infantil abaixo e crie uma história para crianças menores de 4 anos, sem palavras difíceis, e que seja divertida, envolvente e com reviravoltas engraçadas no final.

    Título: ${req.body.userInput}

    Sumário: ${basePromptOutput.text}

    História:
    `

    const secondPromptCompletion = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `${secondPrompt}`,
        temperature: 0.85,
        max_tokens: 1250,
    });

    const secondPromptOutput = secondPromptCompletion.data.choices.pop();

  res.status(200).json({ output: secondPromptOutput });
};

export default generateAction;