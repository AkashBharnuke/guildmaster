import type { PromptMessage } from "@/prompts/index.js";
import type { MemoryState } from "./types.js";

export class Memory {
    private readonly state: MemoryState = {
        conversation: []
    }

    add(message: PromptMessage): void {
        this.state.conversation.push(message);
    }

    getConversations(): PromptMessage[] {
        return this.state.conversation;
    }

    clear(): void {
        this.state.conversation.length = 0;
    }
}


