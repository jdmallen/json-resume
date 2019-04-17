"use strict";

var _resumeSchema = require("resume-schema");

var _fs = require("fs");

var resumeObject = require("../resume.json", "utf8");

(0, _resumeSchema.validate)(resumeObject, function (err, report) {
  if (err) {
    console.error('The resume was invalid:', err);
    return;
  }

  console.log('Resume validated successfully:', report);
});