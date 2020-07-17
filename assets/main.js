let board = document.querySelector('.gridcontainer')
let rows = document.querySelectorAll('.row')
let turnTracker = 1
let boardTracker = [[0,0,0,0,0,0],
[0,0,0,0,0,0],
[0,0,0,0,0,0],
[0,0,0,0,0,0],
[0,0,0,0,0,0],
[0,0,0,0,0,0],
[0,0,0,0,0,0],]


let boardHeight = boardTracker[0].length - 2;
let boardWidth = boardTracker.length - 2;
function updateBoard(row){
    currentBoardRow = boardTracker[row.id]
    boardTracker[row.id].splice(row.children.length - 1, 1, turnTracker)
}

function selectRow(row){
    let currentRow = row.currentTarget
    
    let newDiv = document.createElement('div')
    if(currentRow.children.length < 6 && turnTracker === 2){
        newDiv.className = 'dragDiv'
        currentRow.append(newDiv)
        boardTracker[currentRow.id].splice(currentRow.children.length - 1, 1, turnTracker)
        console.log(boardTracker[currentRow.id])
        checkWin()
        return turnTracker = 1
    } else if(currentRow.children.length < 6 && turnTracker === 1 ){
        newDiv.className = 'flowerDiv'
        currentRow.append(newDiv)
        updateBoard(currentRow)
        console.log(boardTracker[currentRow.id])
        checkWin()
        return turnTracker = 2
    }
}

function checkWin(){
    for(let index = 0; index < boardWidth; index ++){
        
        let currentArray = boardTracker[index]
        
        for(let innerIndex = 0; innerIndex < currentArray.length; innerIndex++){
            let currentCheck = currentArray[innerIndex]
            let nextCell = currentArray[innerIndex + 1]
            if(nextCell !=  0 && currentCheck === currentArray[innerIndex + 1]
                &&currentCheck === currentArray[innerIndex + 2]
                && currentCheck === currentArray[innerIndex + 3]){
                   if (currentCheck === 2){
                       return alert('Dragons Win!!')
                   }else{
                       return alert('Flowers win!!')
                   }
                }
        }
    }
    
    for(let index = 0; index < boardWidth; index++){
        for(let innerIndex = 0; innerIndex < boardTracker[0].length; innerIndex++){
            let currentSpace = boardTracker[index][innerIndex]
            if(currentSpace != 0){
                if(currentSpace === boardTracker[index +1][innerIndex]
                    &&currentSpace === boardTracker[index + 2][innerIndex]
                    &&currentSpace === boardTracker[index + 3][innerIndex]){
                        if (currentSpace === 2){
                            return alert('Dragons Win!!')
                        }else{
                            return alert('Flowers win!!')
                        }
                    }
            }
        }
    }

    for(let index = 0; index < boardHeight; index ++){
        for(let innerIndex = 0; innerIndex < boardWidth; innerIndex++){
            let diagonal1Check = boardTracker[index][innerIndex]
            if(diagonal1Check != 0){
                if(diagonal1Check === boardTracker[index +1][innerIndex + 1]
                    &&diagonal1Check === boardTracker[index + 2][innerIndex + 2]
                    &&diagonal1Check === boardTracker[index + 3][innerIndex + 3]){
                        if (diagonal1Check === 2){
                            return alert('Dragons Win!!')
                        }else{
                            return alert('Flowers win!!')
                        }
                    }
            }
        }
    }

    for(let index = 3; index < boardTracker.length; index++){
        for(let innerIndex =0; innerIndex < boardWidth; innerIndex++){
            let diagonal2Check = boardTracker[index][innerIndex]
            if(diagonal2Check != 0){
                if(diagonal2Check === boardTracker[index - 1][innerIndex + 1]
                    &&diagonal2Check === boardTracker[index - 2][innerIndex + 2]
                    &&diagonal2Check === boardTracker[index - 3][innerIndex + 3]){
                        if (diagonal2Check === 2){
                            return alert('Dragons Win!!')
                        }else{
                            return alert('Flowers win!!')
                        }
                    }
            }
        }
    }
    // tie checker
    if(! boardTracker.join('').includes(0)){
        return alert('tie')
    }


}


for(let index = 0; index < rows.length; index++){
    rows[index].addEventListener('click', selectRow)
    rows[index].id = index
    console.log(rows[index].id)
}
