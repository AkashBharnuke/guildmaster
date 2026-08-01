import type { ToolExecutionRequest, ToolExecutionResult } from "./types.js";

export class ToolExecutor {
    async execute(request: ToolExecutionRequest): Promise<ToolExecutionResult> {
        const result = await request.tool.execute(...request.args);

        return { result };
    }
}



