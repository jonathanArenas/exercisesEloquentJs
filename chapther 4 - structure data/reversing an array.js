

//  CREATE A NEW ARRAY WITH REVERSE VALUES , NOT ITS THE SAME 

let values = ["A","B","C","D","E"]// ARRAY "A"

function reverseArray(array){ 
  const arrayReturn = [] //ARRAY "B"
  for(let i= array.length - 1; i>=0; i--)
    arrayReturn.push(array[i]); //ADD ELEMENTS FROM A TO B
  return arrayReturn; //RETURN ARRAY "B"
}

function reverseArray2(array){//OTHER SOLUTION USING FOR OF LOOP
  const arrayReturn = [];
  for(let value of array)
    arrayReturn.unshift(value);
  return arrayReturn;
}

console.log(reverseArray(values));
console.log(reverseArray2(["Z","Y","X","W","V"]))




//THE SAME EXERCISE BUT WE MANIPULATE THE SAME ARRAY

let arrayValue = [1,2,3,4];

function reverseArrayInPlace(array){
  let size = array.length-1;
  for(let i= size; i > Math.floor(size/2); i--){
      let first = array[(size)-i]; //GET FIRST VALUE
      let end = array[i]; //GET END VALUE
      array[i] = first; //EXCHANGE OF VALUES 
      array[(size)-i] = end;
  }
}    




reverseArrayInPlace(arrayValue);
console.log(arrayValue);
