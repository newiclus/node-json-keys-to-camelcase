# Description:

This is a Node exercise that uses `fs.readStream` and `fs.writeStream` to modify a JSON file. The file is too large to load into memory, so we need to use streams to read and write the file. the aim of this exercise is to read the JSON file, parse the keys, modify them from snake_case to camelCase and then write a new JSON file with the modified keys.
