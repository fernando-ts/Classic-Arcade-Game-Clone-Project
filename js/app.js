// Enemies our player must avoid
const Enemy = function () {
    //Constructor function (ES5 way for inheritance) with variables and characteristics for enemy which will be intantiaded later
    this.sprite = 'images/enemy-bug.png'; //uses a provided helper to easily load images

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class PlayerEntity {
    constructor() {
        this.x = 2;
        this.y= 5;
        this.sprite = 'images/char-boy.png';  //--> not all the images in the sfile would load properly
    }

    update() {
        
    }

    // Method that does the exact thing as the enemy render method. It is multiplied by the initial X and Y coordinates the images are displayed. 
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 70);
    }

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
}


// Now instantiate your objects.
const player = new PlayerEntity();
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
