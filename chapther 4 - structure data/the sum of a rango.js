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

function suma(...numbers){
  let total = 0;
  for(let value of numbers){
    total += value;
  }
  return total;
}

console.log(rango(5,10));