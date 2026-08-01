export interface PromptMessage {
    role: "system" | "user" | "assistant";
    content: string;
}

export interface PromptContext {
    instructions: string;
    input: string;
    conversation: PromptMessage[]
}

export interface Prompt {
    messages: PromptMessage[];
}