const path = require("path");
const fs = require("fs");

const { ProcessJSONKeysToCamelCase } = require("./utils");

const JSON_FILE = path.join(__dirname, "large_file.json");
const JSON_WITH_CAMEL_CASE_KEYS = path.join(
  __dirname,
  "large_file_camel_case.json"
);

const createFromStream = fs.createWriteStream(JSON_WITH_CAMEL_CASE_KEYS, {
  flags: "a",
});

function processJson(pathFile) {
  const stream = fs.createReadStream(pathFile, "utf-8");

  stream.on("data", function (data) {
    const chunk = data.toString();
    const parsedKeys = ProcessJSONKeysToCamelCase(chunk);

    createFromStream.write(parsedKeys);
  });
}

processJson(JSON_FILE);
