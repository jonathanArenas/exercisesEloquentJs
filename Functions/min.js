//Exercise minimum
function min(a,b){ //using two return
  if(a<b)
    return a;
  else
    return b;
}

//Using the ternary operator
function Min(a,b){
  return (a<b) ? a : b ;
}


console.log(min(0,-10))
console.log(Min(5, -10));