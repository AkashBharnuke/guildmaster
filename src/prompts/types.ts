export interface PromptMessage {
    role: "system" | "user" | "assistant";
    content: string;
}

export interface PromptContext {
    instructions: string;
    input: string;
}

export interface Prompt {
    messages: PromptMessage[];
}