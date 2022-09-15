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

    constructor(canvas){
        this.canvas = canvas;
        this.createEnemies();
    }

    draw(ctx){
        console.log("draw");
    }

    createEnemies(){
        this.enemyMap.forEach((row, rowIndex) => {
            this.enemyRows[rowIndex] = [];
            row.forEach((enemyNumber, enemyIndex)=>{
                
            });
        });
    }
}


