"use strict";

var fs = require("fs");
var path = require("path");
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
  var tokenizer;

  before(function() {
    tokenizer = new Sentences();
  });

  it("should match every file in the test file directory", function() {
    var files = [
      { actual: "anarchy.txt", expected: "anarchy_s.txt" },
      { actual: "carolyn.txt", expected: "carolyn_s.txt" },
      { actual: "clinton.txt", expected: "clinton_s.txt" },
      { actual: "demolitions.txt", expected: "demolitions_s.txt" },
      { actual: "dr.txt", expected: "dr_s.txt" },
      { actual: "dre.txt", expected: "dre_s.txt" },
      { actual: "duma.txt", expected: "duma_s.txt" },
      { actual: "ecig.txt", expected: "ecig_s.txt" },
      { actual: "fbi.txt", expected: "fbi_s.txt" },
      { actual: "foul_ball.txt", expected: "foul_ball_s.txt" },
      { actual: "iphone6s.txt", expected: "iphone6s_s.txt" },
      { actual: "kentucky.txt", expected: "kentucky_s.txt" },
      { actual: "kiss.txt", expected: "kiss_s.txt" },
      { actual: "lebanon.txt", expected: "lebanon_s.txt" },
      { actual: "markets.txt", expected: "markets_s.txt" },
      { actual: "nuns.txt", expected: "nuns_s.txt" },
      { actual: "nyfed.txt", expected: "nyfed_s.txt" },
      { actual: "punct.txt", expected: "punct_s.txt" },
      { actual: "qa.txt", expected: "qa_s.txt" },
      { actual: "quotes.txt", expected: "quotes_s.txt" },
      { actual: "self_reliance.txt", expected: "self_reliance_s.txt" }
    ];

    var test_dir = "./test_files/english";

    for (var i = 0; i < files.length; i++) {
      var file = files[i];

      var actual_text = fs.readFileSync(path.join(test_dir, file.actual), 'utf8');
      var actual_sentences = tokenizer.tokenize(actual_text);

      var expected_text = fs.readFileSync(path.join(test_dir, file.expected), 'utf8');
      var expected_sentences = expected_text.split("{sentence_break}");

      assert.equal(actual_sentences.length, expected_sentences.length);

      for (var j = 0; j < actual_sentences.length; j++) {
        assert.equal(actual_sentences[j], expected_sentences[j].trim());
      }
    }
  });
});
