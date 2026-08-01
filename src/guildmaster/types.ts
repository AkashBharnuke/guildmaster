import { Agent } from "@/agent/index.js";
import type { ModelProvider } from "@/providers/index.js";


export interface GuildMasterConfig {
  provider: ModelProvider;
}

export interface RuntimeOptions {
    agent: Agent;
    input: string;
}