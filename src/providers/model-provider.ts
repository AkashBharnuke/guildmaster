import type { Prompt } from "../prompts/index.js";
import type { ProviderResponse } from "./types.js";

export interface ModelProvider {
    generate(prompt: Prompt): Promise<ProviderResponse>;
}

export const BASE_URL = "https://api.groq.com/openai/v1";



