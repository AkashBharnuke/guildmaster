import type { PlannerOptions } from "./types.js";
import type { PlannerResult } from "./planner-result.js";
import type { ModelProvider } from "@/providers/index.js";

export class Planner {
    constructor(private readonly provider: ModelProvider) {}

    async execute(options: PlannerOptions): Promise<PlannerResult> {
        const response = await this.provider.generate(options.prompt);

        return {
            response: response.content,
            tool: undefined,
            args: []
        };

    }
}


