import { Agent } from "@/agent/index.js";

export interface GuildMasterConfig {
  provider: unknown;
}

export interface RuntimeOptions {
    agent: Agent;
    input: string;
}