
//CONVERT AN ARRAY TO A LIST
function arrayToList(array){
  let list = null; 
  for(let i = array.length-1; 0<=i ; i--){
   list = { value: array[i], rest:list}
  }
  return list;
} 

let values = [1,2,3,4,5,6,7,8,9,];
arrayToList(values);