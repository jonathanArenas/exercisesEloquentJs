let size = 8;
let chessboard = "";
for(let i= 1; i<=size; i++){//row  
  for(let j=1; j<=size;j++){//col
    if((i+j)%2 == 0){
      chessboard += " ";
    }else{
      chessboard  += "#";
    }
  }
  chessboard += "\n";
}
