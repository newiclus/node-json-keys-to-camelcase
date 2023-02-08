/**
 * @function SnakeToCamelCase
 * @param  {String} string A snake cased string
 * @return {String} A camel cased string
 * @description Converts a snake cased string to a camel cased string
 * @example
 * SnakeToCamelCase('snake_case') // => 'snakeCase'
 */
function SnakeToCamelCase(string) {
  return string.replace(/(_\w)/g, (match) => match[1].toUpperCase());
}

/**
 * @function ProcessJSONKeyToCamelCase
 * @param  {String} jsonChunk A chunk of JSON
 * @return {String} A chunk of JSON with camel cased keys
 * @description Converts a chunk of JSON with snake cased keys to a chunk of JSON with camel cased keys
 * @example
 * ProcessJSONKeyToCamelCase('{"snake_case": "value"}') // => '{"snakeCase": "value"}'
 */
function ProcessJSONKeysToCamelCase(jsonChunk) {
  if (typeof jsonChunk !== "string") {
    throw new Error("JSON chunk must be a string");
  }

  const newJsonKeys = jsonChunk.replace(
    /([^{,])+([a-zA-b]")+([:$])/g,
    SnakeToCamelCase
  );

  return newJsonKeys;
}

module.exports = { SnakeToCamelCase, ProcessJSONKeysToCamelCase };
