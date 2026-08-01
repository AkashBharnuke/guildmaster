import { GuildMasterConfig, RuntimeOptions } from "./types.js";
import { Runtime, RuntimeResult }from "../runtime/index.js";
import { Planner } from "@/planner/index.js";
import { ToolExecutor } from "@/tool-runtime/index.js";



export class GuildMaster {

    private readonly runtime: Runtime;

    constructor(private readonly config: GuildMasterConfig) {
        const planner = new Planner(config.provider);
        const toolExecutor = new ToolExecutor();

        this.runtime = new Runtime(planner, toolExecutor);
    }

    async run(options: RuntimeOptions): Promise<RuntimeResult> {
        return this.runtime.run(options);
    }
}