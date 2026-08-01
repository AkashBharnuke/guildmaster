import { env } from "./config/index.js";
import { logger } from "./logging/index.js";

logger.info("═══════════════════════════════");
logger.info("GuildMaster SDK");
logger.info(`Environment: ${env.nodeEnv}`);
logger.info(`Log Level: ${env.logging.level}`);
logger.info("GuildMaster is ready.");
logger.info("═══════════════════════════════");