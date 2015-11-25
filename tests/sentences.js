"use strict";

var fs = require("fs");
var assert = require("assert");

var Sentences = require("../index");

describe("The tokenizer output", function() {
  var tokenizer;
  var sentences;

  before(function() {
    tokenizer = new Sentences();
    sentences = tokenizer.tokenize("This is a sentence.");
  });

  it("should be an array", function() {
    assert.equal(Array.isArray(sentences), true);
  });
});

describe("Test against NLTK's punkt sentence tokenizer output", function() {

});
