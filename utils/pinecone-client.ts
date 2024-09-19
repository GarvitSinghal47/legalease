import { PineconeClient } from "@pinecone-database/pinecone";

if (!process.env.NEXT_PUBLIC_PINECONE_ENVIRONMENT || !process.env.NEXT_PUBLIC_PINECONE_API_KEY) {
  throw new Error("Pinecone environment or api key vars missing");
}

async function initPinecone() {
  try {
    const pinecone = new PineconeClient();
    await pinecone.init({
      environment: process.env.NEXT_PUBLIC_PINECONE_ENVIRONMENT ?? "",
      apiKey: process.env.NEXT_PUBLIC_PINECONE_API_KEY ?? "",
    });

    return pinecone;
  } catch (error) {
    console.log("error", error);
    throw new Error("Failed to initialize Pinecone Client");
  }
}

export const pinecone = await initPinecone();
