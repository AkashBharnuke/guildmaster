import type { Tool } from "@/tool/index.js";

export interface ToolExecutionRequest {
    tool: Tool;
    args: unknown[];
}

export interface ToolExecutionResult {
    result: unknown;
}