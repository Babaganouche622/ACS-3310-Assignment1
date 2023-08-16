function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function allCaps(str) {
  return str.toUpperCase();
}

function capitalizeWords(str) {
  return str.split(' ').map(capitalize).join(' ');
}

function capitalizeHeadline(str) {
  const words = str.split(' ');
  const firstWord = words.shift();
  const capitalizedWords = words.map(word => {
    const lowerCaseWord = word.toLowerCase();
    const nonCapitalizedWords = ['the', 'in', 'a', 'an', 'and', 'but', 'for', 'at', 'by', 'from'];
    return nonCapitalizedWords.includes(lowerCaseWord) ? lowerCaseWord : capitalize(word);
  });
  return capitalize(firstWord) + ' ' + capitalizedWords.join(' ');
}

function removeExtraSpaces(str) {
  return str.trim().replace(/\s+/g, ' ');
}

function kebobCase(str) {
  return str.replace(/\s+/g, '-').toLowerCase();
}

function snakeCase(str) {
  return str.replace(/\s+/g, '_').toLowerCase();
}

function camelCase(str) {
  const words = str.split(' ');
  const firstWord = words[0].toLowerCase();
  const restOfWords = words.slice(1);
  const capitalizedWords = restOfWords.map(capitalize);
  return firstWord + capitalizedWords.join('');
}

function shift(str) {
  return str.slice(1) + str.charAt(0);
}

function makeHashTag(str) {
  const words = str.split(' ');
  const topThreeWords = words
    .sort((a, b) => b.length - a.length)
    .slice(0, 3)
    .map(word => '#' + word);
  return topThreeWords.join(' ');
}

function isEmpty(str) {
  return str.trim() === '';
}

module.exports = {
  capitalize,
  allCaps,
  capitalizeWords,
  capitalizeHeadline,
  removeExtraSpaces,
  kebobCase,
  snakeCase,
  camelCase,
  shift,
  makeHashTag,
  isEmpty
};





// const word = 'hello world';
// const phrase = 'woah there buddy, where are you going that fast in a car?';
// const phraseWithSpace = 'woah there buddy,      where are you going that fast in a car?';

// console.log(capitalize(word));
// console.log(allCaps(word));
// console.log(capitalizeWords(phrase));
// console.log(capitalizeHeadline(phrase));
// console.log(removeExtraSpaces(phraseWithSpace));
// console.log(kebobCase(phrase));
// console.log(snakeCase(phrase));
// console.log(camelCase(phrase));
// console.log(shift(word));
// console.log(makeHashTag(phrase));
