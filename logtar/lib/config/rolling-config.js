const {
  RollingSizeOptions,
  RollingTimeOptions,
} = require("../utils/rolling-options");

class RollingConfig {
  /**
   * @type {RollingTimeOptions}
   * @private
   * @description Units-seconds
   */
  #time_threshold = RollingTimeOptions.Hourly;
  #size_threshold = RollingSizeOptions.FiveMB;

  /**
   * @returns {RollingConfig}
   */
  static with_defaults() {
    return new RollingConfig();
  }
  /**
   * @param {number} size_threshold create/roll new file every time the current filesize exceeds the file threshold.
   * @returns {RollingConfig} returns the update instance of RollingConfig.
   */
  with_size_threshold(size_threshold) {
    RollingSizeOptions.assert(size_threshold);
    this.#size_threshold = size_threshold;
    return this;
  }

  /**
   * @param {RollingTimeOptions} time_threshold create/roll new file every time the current file exceeds this threshold.
   * @returns {RollingConfig} returns the update instance of RollingConfig.
   * @throws {Error} If time_threshold is not an instance of RollingTimeOptions.
   */
  with_time_threshold(time_threshold) {
    RollingTimeOptions.assert(time_threshold);
    this.#time_threshold = time_threshold;
    return this;
  }

  /**
   * @param {Object} json the json object to be parsed into the RollingConfig.
   * @returns {RollingConfig} a new instace of RollingConfig with the parsed object values.
   * @throws {Error} If json is not an object.
   */
  static from_json(json) {
    let rolling_config = new RollingConfig();
    Object.keys(json).forEach((key) => {
      switch (key) {
        case "size_threshold":
          rolling_config = rolling_config.with_size_threshold(json[key]);
          break;
        case "time_threshold":
          rolling_config = rolling_config.with_time_threshold(json[key]);
          break;
      }
    });
    return rolling_config;
  }

  /**
   * @returns {number} the current time threshold
   */
  get time_threshold() {
    return this.#time_threshold;
  }
  /**
   * @returns {number} the current size threshold
   */
  get size_threshold() {
    return this.#size_threshold;
  }
}

module.exports = { RollingConfig };
