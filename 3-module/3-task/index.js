function camelize(str) {
  let arr = str.split('-');
  let result = '';
  let firstWord = true;
  for (let word of arr) {
    if (firstWord) {
      firstWord = false;
      result += word;
      continue;
    }
    if (word.length > 0) {
      result += word[0].toUpperCase() + word.slice(1);
    }
  }
  return result;
}

