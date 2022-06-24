let words = ['This', 'is', 'JavaScript', 'Coding!'];

function createSentence(words) {
  let sentence = '';
  words.forEach((word)=>{
    sentence = sentence + word + " " 
  })
  return sentence;
}

console.log(createSentence(words));