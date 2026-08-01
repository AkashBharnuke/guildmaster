import OpenAI from "openai";

import type { Prompt } from "@/prompts/index.js";
import { ModelProvider, BASE_URL } from "./model-provider.js";
import type { ProviderConfig, ProviderResponse } from "./types.js";


export class GroqProvider implements ModelProvider {
    private readonly client: OpenAI;

    constructor(private readonly config: ProviderConfig) {
        this.client = new OpenAI({
            apiKey: config.apiKey!,
            baseURL: BASE_URL
        });
    }

    async generate(prompt: Prompt): Promise<ProviderResponse> {
        const response = await this.client.chat.completions.create({
            model: this.config.model,
            messages: prompt.messages
        });

        return {
            content: response.choices[0]?.message.content ?? ""
        };
    }
}




