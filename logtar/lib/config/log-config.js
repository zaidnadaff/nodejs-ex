const fs = require("node:fs");

const { LogLevel } = require("../utils/log-level");
const { RollingConfig } = require("./rolling-config");

class LogConfig {
  /**
   * @type {LogLevel}
   * @private
   * @description The log level to be used.
   */
  #level = LogLevel.Info;

  /**
   * @type {RollingConfig}
   * @private
   */
  #rolling_config;

  /**
   * @type {string}
   * @private
   * @description The prefix to be used for the log file name.
   *
   * If the file prefix is `MyFilePrefix_` the log files created will have the name
   * `MyFilePrefix_2021-09-01.log`, `MyFilePrefix_2021-09-02.log` and so on.
   */
  #file_prefix = "LOGTAR_";

  constructor() {
    this.#rolling_config = RollingConfig.with_defaults();
  }

  /**
   *
   * @returns  {LogConfig}
   */
  static with_defaults() {
    return new LogConfig();
  }

  /**
   * @param {string} file_path the path to the config file.
   * @returns {LogConfig} A new instance of LogConfig from the values of the config file.
   * @throws {Error} throws an error if the path is not a string.
   */
  static from_file(file_path) {
    const file_contents = fs.readFileSync(file_path);
    return LogConfig.from_json(JSON.parse(file_contents));
  }

  /**
   *
   * @param {Object}
   * @returns {LogConfig}
   */
  static from_json(json) {
    let log_config = new LogConfig();
    Object.keys(json).forEach((key) => {
      switch (key) {
        case "level":
          log_config = log_config.with_log_level(json[key]);
          break;
        case "rolling_config":
          log_config = log_config.with_rolling_config(json[key]);
          break;
        case "file_prefix":
          log_config = log_config.with_file_prefix(json[key]);
          break;
      }
    });
    return log_config;
  }

  /**
   * @returns {LogLevel} The current log level.
   */
  get level() {
    return this.#level;
  }

  /**
   * @param {LogLevel} log_level the log level to be set
   * @returns {LogConfig} returns the logconfig instance
   * @throws {Error} when the log_level is not an instance of Loglevel
   */
  with_log_level(log_level) {
    LogLevel.assert(log_level);
    this.#level = log_level;
    return this;
  }

  get rolling_config() {
    return this.#rolling_config;
  }

  /**
   *
   * @param {RollingConfig} config the rolling config to be set to the instance
   * @returns {LogConfig} returns the current instance of LogConfig
   * @throws {Error} if config is not an instance of RollingConfig
   */
  with_rolling_config(config) {
    this.#rolling_config = RollingConfig.from_json(config);
    return this;
  }

  /**
   *
   * @returns {string} returns the file prefix
   */
  get file_prefix() {
    return this.#file_prefix;
  }

  /**
   *
   * @param {String} file_prefix the file prefix to be set to the instance
   * @returns {LogConfig} returns the current instance of LogConfig
   * @throws {Error} if file_prefix is not a string
   */
  with_file_prefix(file_prefix) {
    if (typeof file_prefix !== "string") {
      throw new Error(
        `The file prefix must be a string. Unsupported param ${JSON.stringify(
          file_prefix
        )}`
      );
    }
    this.#file_prefix = file_prefix;
    return this;
  }

  static assert(log_config) {
    if (arguments.length > 0 && !(log_config instanceof LogConfig)) {
      throw new Error(
        `log_config must be an instance of LogConfig. Unsupported param ${JSON.stringify(
          log_config
        )}`
      );
    }
  }
}

module.exports = { LogConfig };
