
function maximumPyr(array,row,col){
    if((!row)&&(!col)){
        row=0
        col=0
    }
    if(row===array.length-1){
        return array[row][col]
    }
    const leftElementNextRow=col
    const rightElementNextRow=col+1
    return Math.max(array[row][col]+maximumPyr(array,row+1,leftElementNextRow),array[row][col]+maximumPyr(array,row+1,rightElementNextRow))
}

module.exports = maximumPyr