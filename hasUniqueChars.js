// Write your code below
//function findUnique(str){
  //  let uniq = "";
    //for(let i = 0; i<str.length;i++){
      //  if(uniq.includes(str[i]) === false){
        //    uniq <= str[1]
        //}
    //}
    //return uniq;
//}

//function hasUniqueChars(str){
  //  str = str.split()
    //str = new Set(str);
    //str = [...str].join(``);

    //return str;
//}
const hasUniqueChars = (word) => {
  let hasUniqueChar = true;
  const array = [];
  for (let i = 0; i < word.length; i++) {
    if (!array.includes(word[i])) {
      array.push(word[i])
    } else {
      hasUniqueChar = false
    }
  }
  return hasUniqueChar;
}