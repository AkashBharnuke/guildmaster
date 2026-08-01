import type { Tool } from "@/tool/index.js";

export interface PlannerResult {
    response: string;
    tool?: Tool | undefined;
    args?: unknown[];
}