let data;
function isValid(board, row, col, k) {
    for (let i = 0; i < 9; i++) {
        const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        const n = 3 * Math.floor(col / 3) + i % 3;
        if (board[row][i] == k || board[i][col] == k || board[m][n] == k) {
          return false;
        }
    }
    return true;
}
function sudokoSolver(data) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (data[i][j] == '.') {
          for (let k = 1; k <= 9; k++) {
            if (isValid(data, i, j, k)) {
              data[i][j] = `${k}`;
            if (sudokoSolver(data)) {
             return true;
            } else {
             data[i][j] = '.';
            }
           }
         }
         return false;
       }
     }
   }
   return true;
  }
submit.addEventListener('click',()=>{
    let input="[";
    for(let i=1;i<=9;i++){
        input=input+"[";
        for(let j=1;j<=9;j++){
            data=parseInt(document.querySelector(`#input${i}${j}`).value);
            if(isNaN(data)){data="."}
            if(j==9)input = input + `"${data}"`;
            else input = input + `"${data}",`;
        }
        if(i==9) input=input+"]";
        else input=input+"],";
    }
    input=input+"]" 
    console.log(input);
    input = JSON.parse(input)
    sudokoSolver(input);
    console.log(input);
    for(let i=1;i<=9;i++){
      for(let j=1;j<=9;j++){
        let box = `.box${i}${j}`
        document.querySelector(box).textContent=input[i-1][j-1];
      }
    }
})

