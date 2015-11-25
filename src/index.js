"use strict";

var defaultOptions = { language: "english" };

function Sentences(options) {
  if (typeof options === "undefined") {
    options = defaultOptions;
  }

  this.opts = defaultOptions;

  return this;
}

Sentences.prototype.tokenize = function(text) {
  return [];
};

module.exports = Sentences;
