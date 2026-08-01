import { RuntimeOptions } from "@/guildmaster/types.js";
import { RuntimeResult } from "./runtime-result.js";
import { ExecutionContext } from "./execution-context.js";
import { logger } from "@/logging/index.js";
import { ContextBuilder, PromptBuilder } from "@/prompts/index.js";
import { Planner } from "@/planner/index.js";
import { ToolExecutor } from "@/tool-runtime/index.js";

export class Runtime {

    constructor(private readonly planner: Planner, private readonly toolExecutor: ToolExecutor) {}


    private shouldStop(context: ExecutionContext): boolean {
        return context.state.iteration >= context.state.maxIterations;
    }

    async run(options: RuntimeOptions): Promise<RuntimeResult> {
        const context = new ExecutionContext(options.agent, options.input, { iteration: 0, maxIterations: 10});

        const contextBuilder = new ContextBuilder();
        const promptBuilder = new PromptBuilder();
        
        logger.debug("Runtime started");

        let output = "";

        while (!this.shouldStop(context)) {
            context.state.iteration++;
            logger.debug(`Iteration ${context.state.iteration}`);

            const promptContext = contextBuilder.build(context);
            const prompt = promptBuilder.build(promptContext);

            logger.debug("Prompt generated", prompt);

            const result = await this.planner.execute({ prompt });

            if(result.tool) {
                const toolResult = await this.toolExecutor.execute({
                    tool: result.tool,
                    args: result.args ?? [],
                });
            }
            else {
                output = result.response;
            }



            // console.log(output)

        }

        logger.debug("Runtime finished");

        return {
            output,
            iterations: context.state.iteration
        }
    }
}





