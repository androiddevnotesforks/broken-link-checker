import DEFAULT_OPTIONS from "./defaultOptions";



const HAS_BEEN_PARSED_VALUE = Symbol();



/**
 * Convert an Array to an object of keys.
 * @param {Array} array
 * @returns {object}
 * @example
 * arrayToObject(["asdf1", "asdf2"]);
 * //-> { asdf1, asdf2 }
 *
 * @todo https://github.com/tc39/proposal-pipeline-operator
 */
const arrayToObject = array => Object.fromEntries(array.map(value => [value.toLowerCase(), true]));



/**
 * Combine consumer options with defaults, then normalize/optimize.
 * @param {object} [options]
 * @returns {object}
 */
export default (options = {}) =>
{
	if (options.__parsed !== HAS_BEEN_PARSED_VALUE)
	{
		options = { ...DEFAULT_OPTIONS, ...options };

		// Plain objects are easier to work with, but are not consumer-friendly
		options.acceptedSchemes = arrayToObject(options.acceptedSchemes);
		options.excludedSchemes = arrayToObject(options.excludedSchemes);

		// https://npmjs.com/request-methods-constants are upper case
		options.requestMethod = options.requestMethod.toUpperCase();

		// Undocumented -- avoids reparsing options passed through from class to class
		options.__parsed = HAS_BEEN_PARSED_VALUE;
	}

	return options;
};
