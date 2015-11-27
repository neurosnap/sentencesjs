"use strict";

function hasSentencePunct(word) {
  return /[.!?]$/.test(word);
}

function Token(word, position, lineStart, paraStart) {
  this.word = word || "";
  this.position = position || 0;
  this.lineStart = lineStart || false;
  this.paraStart = paraStart || false;
}

function WordTokenizer(text, onlyPeriodContext) {
  var tokens = [];
  if (!text.length) return tokens;

  if (typeof onlyPeriodContext === "undefined") onlyPeriodContext = false;

  var lastSpace = 0;
  var lineStart = false;
  var paragraphStart = false;
  var getNextWord = false;

  // HACK LOL
  text += " ";

  for (var i = 0; i < text.length; i++) {
    var _char = text[i];

    // check for whitespace
    if (!/\s/.test(_char)) continue;

    if (_char === '\n') {
      if (lineStart) paragraphStart = true;
      lineStart = true;
    }

    var word = text
      .slice(lastSpace, i)
      .replace(/\s/g, '');

    if (word === "") continue;

    var hasSP = hasSentencePunct(word);

    if (onlyPeriodContext && !hasSP && !getNextWord) {
      lastSpace = i;
      continue;
    }

    var token = new Token(word, i, lineStart, paragraphStart);
    tokens.push(token);

    lastSpace = i;
    lineStart = false;
    paragraphStart = false;
    getNextWord = hasSP;
  }

  if (!tokens.length) tokens.push(new Token(text, text.length));

  return tokens;
}

module.exports = WordTokenizer;

