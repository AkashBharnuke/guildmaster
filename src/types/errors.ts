
export class GuildMasterError extends Error {
    constructor(message: string) {
        super(message);

        this.name = this.constructor.name;

        Object.setPrototypeOf(this, new.target.prototype);
    }
}

export class ConfigError extends GuildMasterError {}

export class RuntimeError extends GuildMasterError {}

export class ProviderError extends GuildMasterError {}

export class ToolError extends GuildMasterError {}

export class ValidationError extends GuildMasterError {}

