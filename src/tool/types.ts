export interface ToolConfig {
    name: string;
    description: string;
    execute: (...args: unknown[]) => Promise<unknown>;
}

export interface Tool extends ToolConfig {}