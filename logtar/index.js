class Loglevel {
    static DEBUG = 0;
    static INFO = 1;
    static WARN = 2;
    static ERROR = 3;
    static CRITICAL = 4;

    static assert(log_level) {
        if(![Loglevel.DEBUG, Loglevel.INFO, Loglevel.WARN, Loglevel.ERROR, Loglevel.CRITICAL].includes(log_level)) {
            throw new Error(`Log level must be an instance of Loglevel. Unsupposted param ${JSON.stringify(log_level)}`);
        }
    }



/*
alternate code

static levels = ["DEBUG", "INFO", "WARN", "ERROR", "CRITICAL"];
static levelsmap = Object.fromEntries(Loglevel.levels.map((level, index) => [level, index]));
// sample usage 
// static DEBUG = Loglevel.levelsmap["DEBUG"];
static assert(log_level) {
    if(!Object.values(Loglevel.levelsmap).includes(log_level)) {
        throw new Error(`Log level must be an instance of Loglevel. Unsupposted param ${JSON.stringify(log_level)}`);
    }
}

Object.entries(Loglevel.levelsmap).forEach(([KeyboardEvent, value]) => {
    Loglevel[key] = value;
});

*/
   
}

class Logger {

    #level = Loglevel.INFO;

    constructor(log_level) {
        if(arguments.length > 0 ) {
        Loglevel.assert(log_level);
        this.#level = log_level;
        }
        
    }

    get level() {
        return this.#level;
    }

}


class LogConfig {
    #level = Loglevel.INFO;

    #file_prefix = "LOGTAR_";

    static assert(log_config) {
        if(arguments.length > 0 && !(log_config instanceof LogConfig)) {
            throw new Error(`log_config must be an instance of LogConfig. Unsupported param ${JSON.stringify(log_config)}`)
        }
    }

    static with_defaults() {
        return new LogConfig();
    }

    static with_log_level(log_level) {
        
    }

}

module.exports = {Loglevel, Logger};
