# Log Level Class

## Introduction

Classes are used to create a `LogLevel` class to store data instead of objects. Although the differences between classes and objects are known, it is important to understand when and why they are being used.

Here, a class is used to maintain structure and to ensure global unavailability does not occur.

## Exporting Log Levels

There are two options for exporting log levels:

1. Define them individually and export them in a meaningful way.
2. Store them in a map or an array and export them collectively.

I am proceeding with the second method as it ensures simplicity and scalability.

```
Object.entries(Loglevel.levelsMap).forEach(([key, value]) => {
    Loglevel[key] = value;
});

```

this is the code that adds the properties directly to the class. in js, classes are special functions, and like functions, properties are added to them. After execution it may look something like this:

```
Loglevel.DEBUG = 0
Loglevel.INFO = 1
Loglevel.WARN = 2
Loglevel.ERROR = 3
Loglevel.CRITICAL = 4
Loglevel.levels = ["DEBUG", "INFO", "WARN", "ERROR", "CRITICAL"]
Loglevel.levelsMap = {DEBUG: 0, INFO: 1, WARN: 2, ERROR: 3, CRITICAL: 4}
Loglevel.assert = function(log_level) { ... }
```

js class fields are public by default.

Understanfing how private variables work, getter functions, and class variables.
class variables are public by default, so declare them as private by using `#` access these private variables by using the same way. create getter functions that do not require to be called by paranthesis..

# context of the project

there are currently five files that deal have different functionalities. A main logger file binds it all and a logtar file which acts as the final library which can be imported. two util files, two config files and a logger.js file.

### utils/log-level.js

which deals with defining the levels of log, namely debug, info, warn, error and critical with corresponding levels from 0 to 4.

### utils/rolling-options.js

Rolling options are created which state after how much time a new log file is created or the max size of a log file after which a new file is created. These options provide us a way to make sure that there isn't much cluttering.

### config/rolling-config.js

RollingConfig is created with either the default time and size options, or from the options that are provided from the user. passed as a json object which is read and the corresponding options are applied.

### config/log-config.js

LogConfig is created with default values or the values provided by the user. There's file_prefix, rolling_config and log_level which are read. They are read from a file parsed into json and then passed as an object.

### logger.js

This file binds it all, such that a new logger is created by calling this class.

### logtar.js

final library export.
