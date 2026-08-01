import type { Agent } from "@/agent/index.js";
import type { RuntimeState } from "./types.js";

export class ExecutionContext {
    constructor(
        public readonly agent: Agent, 
        public readonly input: string,
        public readonly state: RuntimeState
    ) {}
}
