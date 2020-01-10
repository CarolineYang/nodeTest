var solveSudoku = function(board) {
    let row={0:[],1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[]};
    let col={0:[],1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[]};
    let squ={0:[],1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[]};
    Array.prototype.unique=function(isStrict) {
        if (this.length < 2)
            return [this[0]] || [];
        var tempObj = {}, newArr = [];
        for (var i = 0; i < this.length; i++) {
            var v = this[i];
            var condition = isStrict ? (typeof tempObj[v] != typeof v) : false;
            if ((typeof tempObj[v] == "undefined") || condition) {
                tempObj[v] = v;
                newArr.push(v);
            }
        }
        return newArr;
    }
    for(let i=0;i<board.length;i++){
        for(let j=0;j<9;j++){
            if(board[i][j]!="."){
                row[i].push(board[i][j]);
                col[j].push(board[i][j]);
                let index;
                if(i<3&&j<3){
                    index=0;
                }else if(j<6 && j>=3 && i<3){
                    index=1;
                }else if(j<9 && j>=6 && i<3){
                    index=2;
                }else if(j<3 && i>=3 && i<6){
                    index=3;
                }else if(j>=3 && j<6 && i>=3 && i<6){
                    index=4;
                }else if(j>=6 && j<9 && i>=3 && i<6){
                    index=5;
                }else if(j<3 && i>=6 && i<9){
                    index=6;
                }else if(j>=3 && j<6 && i>=6 && i<9){
                    index=7;
                }else if(j>=6 && j<9 && i>=6 && i<9){
                    index=8;
                }
                squ[index].push(board[i][j]);
            }
        }
    }
    let all=[1,2,3,4,5,6,7,8,9];
    let num=0;
    while(num!=81){
        num=0;
        for(let i=0;i<board.length;i++){
            for(let j=0;j<9;j++){
                if(board[i][j]=="."){
                    let index;
                    if(i<3&&j<3){
                        index=0;
                    }else if(j<6 && j>=3 && i<3){
                        index=1;
                    }else if(j<9 && j>=6 && i<3){
                        index=2;
                    }else if(j<3 && i>=3 && i<6){
                        index=3;
                    }else if(j>=3 && j<6 && i>=3 && i<6){
                        index=4;
                    }else if(j>=6 && j<9 && i>=3 && i<6){
                        index=5;
                    }else if(j<3 && i>=6 && i<9){
                        index=6;
                    }else if(j>=3 && j<6 && i>=6 && i<9){
                        index=7;
                    }else if(j>=6 && j<9 && i>=6 && i<9){
                        index=8;
                    }
                    let aa=row[i].concat(col[j]).concat(squ[index]);
                    let kk=aa.unique();
                    if(kk.length!=8){
                        continue;
                    }
                    let allin=JSON.parse(JSON.stringify(all));
                    kk.map(function(item){
                        for(let w=0;w<allin.length;w++){
                            if(item==allin[w]){
                                allin.splice(w,1)
                                w--;
                            }
                        }
                    })
                    if(allin.length==1){
                        board[i][j]=allin[0].toString();
                        col[j].push(allin[0]);
                        row[i].push(allin[0]);
                        squ[index].push(allin[0]);
                        console.log(i,j,allin[0])
                    }
                }else{
                    num++;
                }
            }
        }
        // console.log('>>>>',num)
    }
    // console.log(row,col,squ)
    return board
};
console.log(solveSudoku([[".",".","9","7","4","8",".",".","."],
    ["7",".",".",".",".",".",".",".","."],
    [".","2",".","1",".","9",".",".","."],
    [".",".","7",".",".",".","2","4","."],
    [".","6","4",".","1",".","5","9","."],
    [".","9","8",".",".",".","3",".","."],
    [".",".",".","8",".","3",".","2","."],
    [".",".",".",".",".",".",".",".","6"],
    [".",".",".","2","7","5","9",".","."]]))
