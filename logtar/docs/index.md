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