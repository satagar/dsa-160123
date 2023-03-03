function knigthTour(n){
    let board= new Array(n);
    for(let i=0;i<n;i++){
        board[i] = new Array(n);
    }

for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        board[i][j]= -1;
    }
}
let Store=[];

let x=0;
let y=0;
board[x][y] = 0;
Store.push([x,y])
 
let moveX = [1,1,-1,-1,2,2,-2,-2];
let moveY = [2,-2,2,-2,1,-1,1,-1];

function moveKnight(x,y,step){
    if(step === n*n-1){
        return true;
    }

    for(let i=0;i< 8;i++){
        let nextX= x + moveX[i];
        let nextY= y+ moveY[i]

    if (isValidMove(nextX,nextY,n)){
        board[nextX][nextY] =step + 1
        Store.push([nextX,nextY])
    

    if(moveKnight(nextX,nextY,step+1)){
        return true ;
    }
    else{
       Store.pop();
       board[nextX][nextY]=-1
    }
 }
}
return false;
}

function isValidMove(x,y,n){
    if(x<0 || x>=n || y < 0 || y>=n ||board[x][y] !== -1){
        return false ;
    }
    return true ;
}

if(moveKnight(x,y,0)){
    console.log(Store)
}else{
    console.log("No solution found ")
 }
}

knigthTour(8)