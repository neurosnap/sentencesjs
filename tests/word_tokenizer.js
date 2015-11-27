"use strict";

var assert = require("assert");

var WordTokenizer = require("../src/word_tokenizer");

describe("The word tokenizer", function() {
  it("should return empty array when passed an empty string", function() {
    var tokens = WordTokenizer("");
    assert.equal(Array.isArray(tokens), true);
    assert.equal(tokens.length, 0);
  });

  it("should return an array of token objects with the proper keys", function() {
    var tokens = WordTokenizer("word");

   assert.equal(tokens.length, 1);
   assert.equal(typeof tokens[0], "object");
   assert.equal(tokens[0].hasOwnProperty("word"), true);
   assert.equal(tokens[0].hasOwnProperty("position"), true);
   assert.equal(tokens[0].hasOwnProperty("lineStart"), true);
   assert.equal(tokens[0].hasOwnProperty("paraStart"), true);
  });

  it("should return 3 tokens with proper positions", function() {
    var tokens = WordTokenizer("Cool word bro.");

    assert.equal(tokens.length, 3);
    assert.equal(tokens[0].position, 4);
    assert.equal(tokens[1].position, 9);
    assert.equal(tokens[2].position, 14);
  });
});
