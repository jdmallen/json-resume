import { validate, schema } from "resume-schema";
import { readFileSync } from "fs";

let resumeObject = require("../resume.json", "utf8");

validate(resumeObject, function (err, report) {
  if (err) {
	console.error('The resume was invalid:', err);
	return;
  }
  console.log('Resume validated successfully:', report);
});
