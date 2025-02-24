const { LogConfig } = require("./config/log-config");
const { LogLevel } = require("./utils/log-level");

class Logger {
  /**
   * @type {LogConfig}
   */
  #config;

  /**
   * @returns A new instance of Logger with default values.
   * @description the default of log level is loglevel.INFO.
   */
  static with_defaults() {
    return new Logger();
  }

  /**
   * @param {LogConfig} log_config The log config to be used.
   * @returns {Logger} A new instance of Logger with the specified log config.
   * @throws {Error} If the log_config is not an instance of LogConfig.
   */
  static with_config(log_config) {
    return new Logger(log_config);
  }

  constructor(log_config) {
    log_config = log_config || LogConfig.with_defaults();
    LogConfig.assert(log_config);
    this.#config = log_config;
  }

  /**
   * @returns {LogLevel} The current log level.
   */
  get level() {
    return this.#config.level;
  }
  /**
   * @returns {String} The current file prefix.
   */
  get file_prefix() {
    return this.#config.file_prefix;
  }
  get time_threshold() {
    return this.#config.rolling_config.time_threshold;
  }
  get size_threshold() {
    return this.#config.rolling_config.size_threshold;
  }
}

module.exports = { Logger };
