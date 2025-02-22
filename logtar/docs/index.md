# Log Level Class

## Introduction
Classes are used to create a `LogLevel` class to store data instead of objects. Although the differences between classes and objects are known, it is important to understand when and why they are being used. 

Here, a class is used to maintain structure and to ensure global unavailability does not occur.

## Exporting Log Levels
There are two options for exporting log levels:
1. Define them individually and export them in a meaningful way.
2. Store them in a map or an array and export them collectively.

We will proceed with the second method as it ensures simplicity and scalability.