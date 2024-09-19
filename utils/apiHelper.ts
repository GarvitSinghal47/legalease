import { OpenAI } from "langchain/llms/openai";
import { PineconeStore } from "langchain/vectorstores/pinecone";
import { ConversationalRetrievalQAChain } from "langchain/chains";
import { Configuration } from "openai";

const CONDENSE_PROMPT = `Given the following conversation and a follow up question, rephrase the follow up question to be a standalone question.

Chat History:
{chat_history}
Follow Up Input: {question}
Standalone question:`;

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  organization: process.env.NEXT_PUBLIC_OPENAI_ORGANIZATION_ID,

});

export const askMeRealTimeData = (
  vectorstore: PineconeStore,
  temperature: any,
  basePrompt: any
) => {
  const QA_PROMPT = `
${basePrompt}
  {context}

  Question: {question}
  Compassionate response in markdown:`;
  interface OpenAIInput {
    temperature?: number;
    modelName?: string;
    apiKey?: string; 
  }


  const model = new OpenAI({
    temperature: parseFloat(temperature),
    modelName: process.env.NEXT_PUBLIC_OPENAI_GPT_MODEL,
    configuration: configuration,
  });

 
  const chain = ConversationalRetrievalQAChain.fromLLM(
    model,
    vectorstore.asRetriever(),
    {
      qaTemplate: QA_PROMPT,
      questionGeneratorTemplate: CONDENSE_PROMPT,
      returnSourceDocuments: true, //The number of source documents returned is 4 by default
    }
  );
  return chain;
};
