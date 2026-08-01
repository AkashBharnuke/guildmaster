import type { ExecutionContext } from "@/runtime/index.js";
import type { PromptContext } from "./types.js";

export class ContextBuilder {
    build(context: ExecutionContext): PromptContext {
        return {
            instructions: context.agent.instructions,
            input: context.input
        }
    }
}



