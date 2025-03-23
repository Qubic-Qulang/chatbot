import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { streamText } from 'ai';

export async function POST(req: Request) {
  const { messages } = await req.json();
  const openrouter = createOpenRouter({
    apiKey: process.env.OPENROUTER_API_KEY, // Ta clé API stockée en variable d'environnement
  });
  const result = await streamText({
    model: openrouter("deepseek/deepseek-r1:free"), // Remplace par le modèle souhaité
    messages,
  });
  return result.toDataStreamResponse();
}
