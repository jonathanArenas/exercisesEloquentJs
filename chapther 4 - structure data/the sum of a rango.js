//CREATE A ARRAY WITH THE VALUES BETWEEN START AND END, AND THEN, TAKING THE VALUE JUMP O STEP.
function rango(start, end, step = start < end ? 1 : -1 ){
  let array = []
  if(start <= end){
    if(Math.sign(step) == -1)
      step = -(step)
    for(let i = start; i<=end; i+=step)
      array.push(i);
  }else{
    if(Math.sign(step) == 1)
      step = -(step)
    for(let i= start; i>=end; i+=step)
      array.push(i);
  }
  return array;
}
//SUM THE VALUES OF THE ARRAY. USING REST PARAMETERS
function sum(...numbers){
  let total = 0;
  for(let value of numbers){
      total += value;
  }
  return total;
}
console.log(rango(5,10));
console.log(sum(...rango(5,10)));