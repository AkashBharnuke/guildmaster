import type { Prompt } from "../prompts/index.js";
import type { ModelProvider } from "../providers/index.js";

export interface PlannerOptions {
    prompt: Prompt;
}