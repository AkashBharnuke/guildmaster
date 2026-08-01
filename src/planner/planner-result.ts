import type { Tool } from "@/tool/index.js";

export interface PlannerResult {
    action: "respond" | "tool";
    response: string;
    tool?: Tool | undefined;
    args?: unknown[];
}