import type { PromptMessage } from "@/prompts/index.js";

export interface MemoryState {
    conversation: PromptMessage[];
}