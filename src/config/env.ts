import { ConfigError } from "@/types/index.js";
import { config } from "dotenv"; 
import { z } from "zod";

config();

const envSchema = z.object({
    NODE_ENV: z.enum(["dev", "prod", "test"]).default("dev"),

    LOG_LEVEL: z.enum(["debug", "info", "warn", "error"]).default("info"),

    GROQ_API_KEY: z.string().optional(),

    GROQ_MODEL: z.string().default("openai/gpt-oss-120b")
});

const parsedEnv = envSchema.safeParse(process.env);

if(!parsedEnv.success) {
    throw new ConfigError(`Invalid environment configuration:\n${parsedEnv.error.message}`);
}

export const env = Object.freeze({
    nodeEnv: parsedEnv.data.NODE_ENV,
    logging: {
        level: parsedEnv.data.LOG_LEVEL
    },
    groq: {
        apiKey: parsedEnv.data.GROQ_API_KEY,
        model: parsedEnv.data.GROQ_MODEL
    }
});




