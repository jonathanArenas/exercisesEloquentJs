//Recursion 
//function in expression form

let isEven = function (n){
  if(n == 0){
    return true;
  }else if(n == 1){
    return false;
  }else{
    return (n>0)?isEven(n-2):isEven(-n);//recursion
  }
}

console.log(isEven(50));
console.log(isEven(-50))