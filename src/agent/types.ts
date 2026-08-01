import type { Tool } from "../tool/index.js";

export interface AgentConfig {
    name: string;
    instructions: string;
    tools: Tool[];
}

export interface Agent extends AgentConfig {}
