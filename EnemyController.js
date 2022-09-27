import Enemy from "./Enemy.js";
import MovingDirection from "./MovingDirection.js";

export default class EnemyController{

    enemyMap = [
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [2, 2, 2, 3, 3, 3, 3, 2, 2, 2],
        [2, 2, 2, 3, 3, 3, 3, 2, 2, 2],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      ]; 

    enemyRows = [];

    currentDirection = MovingDirection.right;
    xVelocity = 0;
    yVelocity = 0;
    defaultXVelocity = 1;
    defaultYVelocity = 1;
    moveDownTimerDefault = 30;
    moveDownTimer = this.moveDownTimerDefault;


    constructor(canvas){
        this.canvas = canvas;
        this.createEnemies();
    }

    draw(ctx){
        console.log("draw");
        this.decrementMoveDownTimer();
        this.updateVelocityAndDirection();
        this.drawEnemies(ctx);
        console.log(this.moveDownTimer);
    }

    resetMoveDownTimer(){
        if(this.moveDownTimer <= 0 ){
            this.moveDownTimer = this.moveDownTimerDefault;
        }
    }

    decrementMoveDownTimer(){
        if(
            this.currentDirection === MovingDirection.downLeft || 
            this.currentDirection === MovingDirection.downRight)
            {
                this.moveDownTimer--;
            }
    }

    updateVelocityAndDirection(){
        for(const enemyRow of this.enemyRows){
            if(this.currentDirection == MovingDirection.right){
                this.xVelocity = this.defaultXVelocity;
                this.yVelocity = 0;
                const rightMostEnemy = enemyRow[enemyRow.length - 1];
                if(rightMostEnemy.x + rightMostEnemy.width >= this.canvas.width){
                    this.currentDirection = MovingDirection.downLeft;
                    break;
                }
            }
            else if(this.currentDirection == MovingDirection.downLeft){
                if(this.moveDown(MovingDirection.left)){
                    break;
                }
            }
        }
    }
    
    moveDown(newDirection){
        this.xVelocity = 0;
        this.yVelocity = this.defaultYVelocity;
        if(this.moveDownTimer <= 0){
            this.currentDirection = newDirection;
            return true;
        }
        return false;
    }

    drawEnemies(ctx){
        this.enemyRows.flat().forEach((enemy) => {
            enemy.move(this.xVelocity, this.yVelocity);
            enemy.draw(ctx);
        });
    }
    createEnemies(){
        this.enemyMap.forEach((row, rowIndex) => {
            //row is current [] amd rowIndex is current index number
            this.enemyRows[rowIndex] = [];
            //enemyNumber is a 1,2 or 3, and enemyIndex is current indexNumber
            row.forEach((enemyNumber, enemyIndex)=>{
                if(enemyNumber > 0 ){
                    this.enemyRows[rowIndex].push(
                        new Enemy(enemyIndex*50, rowIndex*34, enemyNumber))
                }

            });
        });
    }
}


