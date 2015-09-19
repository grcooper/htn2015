function organism(str, intl, speed) {
    //Creates new organism
    this.strength = str;
    this.intelligence = intl;
    this.speed = speed;
}

function createOrganism_A(str, intl, speed) {
    //Make new organism with hard coded stats
    var org = new organism(str, intl, speed);
    return org;
}

function createOrganism_C() {
    var organism = new Organism(6, 1, 4);
    return organism;
}

var WIDTH = 800;
var HEIGHT = 600;
var STARTORG = 5;
var start = false;
var yummy;

function getStrValue() {
    var strValue = document.getElementById("inputStrength").value;
    return strValue;
}

function getIntValue() {
    var intValue = document.getElementById("inputIntelligence").value;
    return intValue;
}

function getSpeedValue() {
    var speedValue = document.getElementById("inputSpeed").value;
    return speedValue;
}

function eatsMeat(organism, meat) {
  meat.kill();
  organism.strength+=5;
}

window.onload = function() {

    var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
        preload: preload,
        create: create,
        update: update
    });

    function preload() {

        game.load.image('sky', 'assets/sky.png');
        game.load.image('logo', 'phaser.png');
        game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
	game.load.image('meat', 'assets/food.png');

    }

    function create() {

        //Physics
        game.physics.startSystem(Phaser.Physics.ARCADE);

        //Background
        game.add.sprite(0, 0, 'sky');
        characters = game.add.group();
        characters.enableBody = true;
        //  Our controls.
        cursor = game.input.keyboard.createCursorKeys();

        if (!start) {
            game.input.keyboard.onDownCallback = function(e) {
                if (e.keyCode === 13) {
		    if(!start){
                    for (var i = 0; i < STARTORG; i++) {
                        player = characters.create(game.world.width * Math.random(), game.world.height * Math.random(), 'dude');
                        player.org = new createOrganism_A(getStrValue(), getIntValue(), getSpeedValue());
                        player.org.timeout = 0;
                    }
                    start = true;
		    }
                    	yummy = game.add.group();
	for(var i = 0; i < 30; i++){
	  var meat = yummy.create(game.world.width * Math.random() * 0.95, 
                              game.world.height * Math.random(), 
                              'meat');
	}
    }
                }
            }
            
        }


    function update() {

        if (start) {
            characters.forEach(function(char) {
                //loop through all characters
                var xdirection;
                var ydirection;
                xdirection = Math.round(Math.random());
                ydirection = Math.round(Math.random());

                if (char.org.timeout == 30) {
                    char.org.timeout = 0;
                    if (xdirection) {
                        char.body.velocity.x = char.org.speed * 20;
                    } else {
                        char.body.velocity.x = char.org.speed * -20;
                    }

                    if (ydirection) {
                        char.body.velocity.y = char.org.speed * 20;
                    } else {
                        char.body.velocity.y = char.org.speed * -20;
                    }
                } else {
                    char.org.timeout += 1;
                }

                if (char.body.x >= (WIDTH - char.width)) {
                    char.body.velocity.x = char.org.speed * -20;
                } else if (char.body.x <= 0) {
                    char.body.velocity.x = char.org.speed * 20;
                }
                if (char.body.y >= (HEIGHT - char.height)) {
                    char.body.velocity.y = char.org.speed * -20;
                } else if (char.body.y <= 0) {
                    char.body.velocity.y = char.org.speed * 20;
                }
            });
        }
    }
}
