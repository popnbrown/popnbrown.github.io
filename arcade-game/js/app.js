/* Global Variables */
var COLUMN_WIDTH = 101;
var ROW_HEIGHT = 83;
var ROW_OFFSET = -20;

/* Player Variables */
var PLAYER_START_X = COLUMN_WIDTH*2;
var PLAYER_START_Y = ROW_HEIGHT * 5 + ROW_OFFSET;

/* Enemy Variables */
var INITIAL_ENEMY_Y = [ROW_HEIGHT + ROW_OFFSET, ROW_HEIGHT*2 + ROW_OFFSET, ROW_HEIGHT*3 + ROW_OFFSET];
var MINIMUM_SPEED = 105;
var MAXIMUM_RANDOM_SPEED = 400;
var MAXIMUM_RANDOM_X_OFFSET = -500;

/* Boundaries */
var ENEMY_X_BOUNDARY_MAX = COLUMN_WIDTH*5;
var PLAYER_X_BOUNDARY_MAX = COLUMN_WIDTH*4;
var PLAYER_X_BOUNDARY_MIN = 0;
var PLAYER_Y_BOUNDARY_MAX = PLAYER_START_Y;
var PLAYER_Y_BOUNDARY_MIN = ROW_HEIGHT + ROW_OFFSET;


// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = Math.random() * MAXIMUM_RANDOM_X_OFFSET - COLUMN_WIDTH; //all images start at different x axis points
    this.y = INITIAL_ENEMY_Y[Math.floor(Math.random() * INITIAL_ENEMY_Y.length)];//pick a random row (2,3,4) to start
    this.speed = Math.random() * MAXIMUM_RANDOM_SPEED + MINIMUM_SPEED;//minimum speed 105, max speed 505
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    //collision detection - make bug left point smaller to give a better visual cue to player
    if(this.x + COLUMN_WIDTH * 0.75 >= player.x && this.x <= player.x + COLUMN_WIDTH && player.y == this.y){
        player.reset();
    }

    //move x direction
    this.x = this.x + dt * this.speed;

    //reset x and randomize y if enemy goes off the screen
    if(this.x > ENEMY_X_BOUNDARY_MAX) {
        this.x = -1 * COLUMN_WIDTH;
        this.y = INITIAL_ENEMY_Y[Math.floor(Math.random() * INITIAL_ENEMY_Y.length)];
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {

    // The image/sprite for our player, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-boy.png';
    this.x = PLAYER_START_X;
    this.y = PLAYER_START_Y;
    this.score = 0;
    this.scoreMultiplier = 10;
};

//handle scoring here
Player.prototype.update = function(dt) {
    if(this.y >= INITIAL_ENEMY_Y[0] && this.y <= INITIAL_ENEMY_Y[2]) {
        this.score = this.score + this.scoreMultiplier * dt;
    } else if (this.score > 0 && this.y > INITIAL_ENEMY_Y[2]) {
        this.score = this.score - this.scoreMultiplier / 2 * dt;
    }
    document.getElementById('score').innerHTML = Math.round(this.score).toString(); //display score
}

//modify character location based on event
Player.prototype.handleInput = function(allowedKeys) {
    switch(allowedKeys) {
        case 'left':
            this.x = (this.x - COLUMN_WIDTH >= PLAYER_X_BOUNDARY_MIN) ? this.x - COLUMN_WIDTH : PLAYER_X_BOUNDARY_MIN;
            break;
        case 'up': //special case, if hit water reset
            if(this.y - ROW_HEIGHT >= PLAYER_Y_BOUNDARY_MIN){
                this.y = this.y - ROW_HEIGHT;
            } else {
                this.reset();
            }
            break;
        case 'right':
            this.x = (this.x + COLUMN_WIDTH <= PLAYER_X_BOUNDARY_MAX) ? this.x + COLUMN_WIDTH : PLAYER_X_BOUNDARY_MAX;
            break;
        case 'down':
            this.y = (this.y + ROW_HEIGHT <= PLAYER_Y_BOUNDARY_MAX) ? this.y + ROW_HEIGHT : PLAYER_Y_BOUNDARY_MAX;
            break;
    }
}

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//reset the player
Player.prototype.reset = function() {
    document.getElementById('score-list').innerHTML += '<li>'+Math.round(this.score).toString()+'</li>'; //add score to score lsit

    //reset char location and score
    this.x = PLAYER_START_X;
    this.y = PLAYER_START_Y;
    this.score = 0;
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [new Enemy(), new Enemy(), new Enemy()];
var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
