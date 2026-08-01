import { createAgent } from "./agent/index.js";
import { env } from "./config/index.js";
import { GuildMaster } from "./guildmaster/index.js";
import { logger } from "./logging/index.js";
import { createTool } from "./tool/index.js";

logger.info("═══════════════════════════════");
logger.info("GuildMaster SDK");
logger.info(`Environment: ${env.nodeEnv}`);
logger.info(`Log Level: ${env.logging.level}`);
logger.info("GuildMaster is ready.");

const weather = createTool({
    name: "weather",
    description: "Weather Tool",
    execute: async () => "28°C",
});

const assistant = createAgent({
    name: "Assistant",
    instructions: "You are helpful.",
    tools: [weather],
});

const guild = new GuildMaster({
    provider: {},
});

await guild.run({
    agent: assistant,
    input: "Hello",
});


logger.info("═══════════════════════════════");
