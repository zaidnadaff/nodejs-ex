const {Logger, Loglevel } = require('./index');

const test = new Logger(Loglevel.WARN);
console.log(test.level)