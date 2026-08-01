import { RuntimeOptions } from "@/guildmaster/types.js";
import { RuntimeResult } from "./runtime-result.js";
import { ExecutionContext } from "./execution-context.js";
import { logger } from "@/logging/index.js";

export class Runtime {
    private shouldStop(context: ExecutionContext): boolean {
        return context.state.iteration >= context.state.maxIterations;
    }

    async run(options: RuntimeOptions): Promise<RuntimeResult> {
        const context = new ExecutionContext(options.agent, options.input, { iteration: 0, maxIterations: 10});

        logger.debug("Runtime started");

        while (!this.shouldStop(context)) {
            context.state.iteration++;
            logger.debug(`Iteration ${context.state.iteration}`);
        }

        logger.debug("Runtime finished");

        return {
            output: "Runtime completed.",
            iterations: context.state.iteration
        }
    }
}




