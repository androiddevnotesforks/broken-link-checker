import {all as ERRNO} from "errno";
import {STATUS_CODES as HTTP} from "http";



export default Object.freeze(
{
	BLC_CUSTOM: "Custom Exclusion",
	BLC_EXTERNAL: "External URL Exclusion",
	//BLC_LOCAL_EXCLUSION: "Local File System Path Exclusion",
	BLC_HTML: "HTML Exclusion",
	BLC_INTERNAL: "Internal URL Exclusion",
	BLC_INVALID: "Invalid URL",
	BLC_KEYWORD: "Keyword Exclusion",
	BLC_ROBOTS: "Robots Exclusion",
	BLC_SAMEPAGE: "Same-page URL Exclusion",
	BLC_SCHEME: "Scheme Exclusion",
	BLC_UNKNOWN: "Unknown Error",

	// https://github.com/rvagg/node-errno/issues/14
	ERRNO_ENOTFOUND: "no matching dns record (ENOTFOUND)",

	// @todo https://github.com/tc39/proposal-pipeline-operator
	...Object.fromEntries
	(
		ERRNO.map(({code, description}) => [`ERRNO_${code}`, `${description} (${code})`])
	),

	// @todo https://github.com/tc39/proposal-pipeline-operator
	...Object.fromEntries
	(
		Object.entries(HTTP).map(([key, value]) => [`HTTP_${key}`, `${value} (${key})`])
	)
});
