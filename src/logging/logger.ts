import { env } from "@/config/index.js";

type LogLevel = "debug" | "info" | "warn" | "error";

const LOG_LEVELS = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
} as const;

class Logger {
    constructor(private readonly level: LogLevel) {}

    private shouldLog(level: LogLevel){ 
        return LOG_LEVELS[level] >= LOG_LEVELS[this.level];
    }

    private log(level: LogLevel, message: string, ...args: unknown[]) {
        if (!this.shouldLog(level)) return;

        console[level](`[${level.toUpperCase()}] ${message}`, ...args);
    }

    debug(message: string, ...args: unknown[]) { this.log("debug", message, ...args); }
    info(message: string, ...args: unknown[]) { this.log("info", message, ...args); }
    warn(message: string, ...args: unknown[]) { this.log("warn", message, ...args); }
    error(message: string, ...args: unknown[]) { this.log("error", message, ...args); }
}


export const logger = new Logger(env.logging.level);