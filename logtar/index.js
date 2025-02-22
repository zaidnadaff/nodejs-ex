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

*/
    
    

}

module.exports = {Loglevel};
