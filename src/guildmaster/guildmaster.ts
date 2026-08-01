import { GuildMasterConfig, RuntimeOptions } from "./types.js";
import { Runtime }from "../runtime/index.js";


export class GuildMaster {

    private readonly runtime: Runtime;

    constructor(private readonly config: GuildMasterConfig) {
        this.runtime = new Runtime();
    }

    async run(options: RuntimeOptions): Promise<unknown> {
        return this.runtime.run(options);
    }
}