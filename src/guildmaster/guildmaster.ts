import { Agent } from "@/agent/index.js";

export interface GuildMasterConfig {
  provider: unknown;
}

export interface RunOptions {
    agent: Agent;
    input: string;
}

export class GuildMaster {
    constructor(private readonly config: GuildMasterConfig) {}

    async run(options: RunOptions): Promise<unknown> {
        return options;
    }
}