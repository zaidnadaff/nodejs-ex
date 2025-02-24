class LogLevel {
  static #Debug = 0;
  static #Info = 1;
  static #Warn = 2;
  static #Error = 3;
  static #Critical = 4;

  /**
   * @returns {LogLevel} A new instance of LogLevel with default values.
   */
  static get Debug() {
    return this.#Debug;
  }

  /**
   * @returns {LogLevel} A new instance of LogLevel with default values.
   */
  static get Info() {
    return this.#Info;
  }

  /**
   * @returns {LogLevel} A new instance of LogLevel with default values.
   */
  static get Warn() {
    return this.#Warn;
  }
  /**
   * @returns {LogLevel} A new instance of LogLevel with default values.
   */
  static get Error() {
    return this.#Error;
  }

  /**
   * @returns {LogLevel} A new instance of LogLevel with default values.
   */
  static get Critical() {
    return this.#Critical;
  }

  static assert(log_level) {
    if (
      ![this.Debug, this.Info, this.Warn, this.Error, this.Critical].includes(
        log_level
      )
    ) {
      throw new Error(
        `log_level must be an instance of LogLevel. Unsupported param ${JSON.stringify(
          log_level
        )}`
      );
    }
  }
}

module.exports = { LogLevel };
