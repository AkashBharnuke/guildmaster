import type { Prompt, PromptContext } from "./types.js";
import { PromptTemplates } from "./prompts.js";

export class PromptBuilder {
    build(context: PromptContext): Prompt {
        return {
            messages: [
                {
                    role: "system",
                    content: PromptTemplates.system
                },
                {
                    role: "user",
                    content: `
${context.instructions}

USer Request:
${context.input}
                    `.trim()
                }
            ]
        };
    }
}