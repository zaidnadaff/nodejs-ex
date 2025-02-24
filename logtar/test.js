const { Logger, LogConfig } = require("./index");
const logger = Logger.with_config(LogConfig.from_file("./config.json"));
// const logger = new Logger();
console.log(logger.level);
console.log(logger.file_prefix);
console.log(logger.time_threshold);
console.log(logger.size_threshold);
