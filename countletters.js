function countLetters(inputText){
  var letterCount = inputText.split(' ').join('');
  return letterCount;
  //return letterCount;
}

console.log(countLetters("This is a test"));
console.log(countLetters("Word"));
console.log(countLetters("the quick brown fox jumped over the lazy dog"));
