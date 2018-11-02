//--> Creation of Enemy class (the player's enemy) 
class EnemyEntity {
    //--> ES6 Contructor equivalent to what a constructor function does in ES5
    constructor(y) {
        this.sprite = 'images/enemy-bug.png';
        this.x = 0;
        this.y = y;
        this.speed = Math.random() * (1.9 - .95) + .95;
    }

    //--> Updates the enemy's position based on the X coordinate limit using dt (time delta) between ticks 
    update(dt) {
        if (this.x < 4.8) {
            this.x += this.speed * dt;
        } else {
            this.x = -1;
        }
    }

    //--> Draw the enemy on the screen, myltiplying it by N. Then displayed correctly inside the canvas
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 70.5);
    }
}


//--> Creation of Player class 
class PlayerEntity {
    constructor() {
        this.x = 2;
        this.y= 5;
        this.sprite = 'images/char-horn-girl.png';
        this.winner = false;
    }

    update() {
        //--> Check for collisions of player/enemy. Update player position. 
        for (let enemy of allEnemies) {
            if (this.y === enemy.y) {
                if (this.x >= enemy.x - 0.79 && this.x <= enemy.x + 0.79) {
                    this.reset();
                }
            }
        }
        //--> Check if player reached river 
        if (this.y === 0) {
            this.winner = true;
            document.querySelector('.end-modal').style.display = 'flex';
        }
    }

    //--> Draw the player in the canvas 
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 73);
    }

    //--> Handle the player's movment inside the canvas based on what key is pressed
    handleInput(keyUsed) {
        switch (keyUsed) {
            case 'right':
                this.x = this.x < 4 ? this.x + 1 : this.x;
                break;
            case 'down':
                this.y = this.y < 5 ? this.y + 1 : this.y;
                break;
            case 'left':
                this.x = this.x > 0 ? this.x - 1 : this.x;
                break;
            case 'up':
                this.y = this.y > 0 ? this.y - 1 : this.y;
                break;
        }
    }

    //--> Reset the players position to the initial position
    reset() {
        this.x = 2;
        this.y = 5;
    }
}



//--> Return a new Enemies array of 3 elements spreaded with different Y coordinates  
const allEnemies = [...Array(3)].map((elem, index ) => new EnemyEntity(index+1));

//--> Instantiate a new player that is displayed in the canvas 
const player = new PlayerEntity();


//--> Listen for key presses and sends it to the player.handleInput() method
document.addEventListener('keyup', function(e) {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


//--> Close the modal from the close sign  
document.querySelector('.close').addEventListener('click', function () {
    document.querySelector('.end-modal').style.display = 'none';
    
});