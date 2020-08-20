for(let i=1; i<=100;i++){
  let FizzBuzz ="";
  if(i%3 ===0){
    FizzBuzz = "Fizz";
  }
  if(i%5 ===0){
    FizzBuzz += "Buzz";
  }
  console.log(FizzBuzz || i);
}