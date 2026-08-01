import type { Agent } from "@/agent/index.js";
import type { RuntimeState } from "./types.js";
import { Memory } from "@/memory/index.js";

export class ExecutionContext {
    constructor(
        public readonly agent: Agent, 
        public readonly input: string,
        public readonly state: RuntimeState,
        public readonly memory: Memory
    ) {}
}
