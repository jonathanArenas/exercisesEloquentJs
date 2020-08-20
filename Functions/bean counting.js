//exercise Bean Counting
function countBs(string){//by side effects
  let counter = 0;
  for(let i=0; i<string.length; i++){
    if(string.charAt(i) == "B")
        counter++;
  }
  return counter;
}

function countChar(string, char){// by return value
  let counter = 0;
  for(let i=0; i<string.length;i++){
      if(string.charAt(i) == char)
        counter++;
  }
  return counter;
}
console.log(countBs("BBCB"));
console.log(countChar("kakkerlak", "k"));