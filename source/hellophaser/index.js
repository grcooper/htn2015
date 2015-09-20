var NAMECOUNTER = 0;

function organism(id, str, intl, speed) {
    //Creates new organism
    this.id = id;
    this.strength = parseInt(str, 10);
    this.intelligence = parseInt(intl, 10);
    this.speed = parseInt(speed, 10);
    this.name = NAMECOUNTER;
    this.vitality = 100;
    this.dir = {
        x: 0,
        y: 0
    };
    NAMECOUNTER++;
}


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function createOrganism_A(id, str, intl, speed) {
    //Make new organism with hard coded stats
    var org = new organism(id, str, intl, speed);
    return org;
}

var WIDTH = 800;
var HEIGHT = 600;
var STARTORG = 4;
var start = false;
var yummy;
var SPSCALE = 0.3;


// gets values for OrgA
function getStrValueA() {
    var strValueA = document.getElementById("inputStrengthA").value;
    return strValueA;
}

function getIntValueA() {
    var intValueA = document.getElementById("inputIntelligenceA").value;
    return intValueA;
}

function getSpeedValueA() {
    var speedValueA = document.getElementById("inputSpeedA").value;
    return speedValueA;
}

// gets values for OrgB
function getStrValueB() {
    var strValueB = document.getElementById("inputStrengthB").value;
    return strValueB;
}

function getIntValueB() {
    var intValueB = document.getElementById("inputIntelligenceB").value;
    return intValueB;
}

function getSpeedValueB() {
    var speedValueB = document.getElementById("inputSpeedB").value;
    return speedValueB;
}

// gets values for OrgC
function getStrValueC() {
    var strValueC = document.getElementById("inputStrengthC").value;
    return strValueC;
}

function getIntValueC() {
    var intValueC = document.getElementById("inputIntelligenceC").value;
    return intValueC;
}

function getSpeedValueC() {
    var speedValueC = document.getElementById("inputSpeedC").value;
    return speedValueC;
}


// gets values for OrgD
function getStrValueD() {
    var strValueD = document.getElementById("inputStrengthD").value;
    return strValueD;
}

function getIntValueD() {
    var intValueD = document.getElementById("inputIntelligenceD").value;
    return intValueD;
}

function getSpeedValueD() {
    var speedValueD = document.getElementById("inputSpeedD").value;
    return speedValueD;
}

// MEAT STUFF
function eatsMeat(organism, meat) {
    meat.kill();
    organism.strength += 5;
    organism.health += 50;
}

window.onload = function() {

    var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
        preload: preload,
        create: create,
        update: update
    });

    function preload() {

        game.load.image('sky', 'assets/sky.png');
        game.load.image('orgA', 'assets/OrganismA.png');
        game.load.image('orgB', 'assets/OrganismB.png');
        game.load.image('orgC', 'assets/OrganismC.png');
        game.load.image('orgD', 'assets/OrganismD.png');
        game.load.image('meat', 'assets/chocolate.png');


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
                    if (!start) {
                        for (var i = 0; i < STARTORG; i++) {
                            // for OrgA
                            player = characters.create(game.world.width * Math.random() * 0.95, game.world.height * Math.random(), 'orgA');
                            player.scale.setTo(SPSCALE, SPSCALE);
                            player.org = new createOrganism_A(1, getStrValueA(), getIntValueA(), getSpeedValueA());
                            player.org.timeout = 0;
                        }

                        // for OrgB
                        for (var i = 0; i < STARTORG; i++) {
                            player = characters.create(game.world.width * Math.random() * 0.95, game.world.height * Math.random(), 'orgB');
                            player.scale.setTo(SPSCALE, SPSCALE);
                            player.org = new createOrganism_A(2, getStrValueB(), getIntValueB(), getSpeedValueB());
                            player.org.timeout = 0;
                        }
                        // for OrgC
                        for (var i = 0; i < STARTORG; i++) {
                            player = characters.create(game.world.width * Math.random() * 0.95, game.world.height * Math.random(), 'orgC');
                            player.scale.setTo(SPSCALE, SPSCALE);
                            player.org = new createOrganism_A(3, getStrValueC(), getIntValueC(), getSpeedValueC());
                            player.org.timeout = 0;
                        }

                        // for OrgD
                        for (var i = 0; i < STARTORG; i++) {
                            player = characters.create(game.world.width * Math.random() * 0.95, game.world.height * Math.random(), 'orgD');
                            player.scale.setTo(SPSCALE, SPSCALE);
                            player.org = new createOrganism_A(4, getStrValueD(), getIntValueD(), getSpeedValueD());
                            player.org.timeout = 0;
                        }

                        yummy = game.add.group();
                        yummy.enableBody = true;
                        for (var i = 0; i < 15; i++) {
                            var meat = yummy.create(game.world.width * Math.random() * 0.95,
                                game.world.height * Math.random(),
                                'meat');
                            meat.scale.setTo(0.8, 0.8);
                        }
                        start = true;
                    }
		    shuffle(characters.children);
                }
            }
        }
    }

    function collisionHandler(e1, e2) {

        if (e1.org.id != e2.org.id) {
            if (e1.org.strength > e2.org.strength) {
		e2.kill();
		e1.org.vitality += 10;
            } else {
                e1.kill();
		e2.org.vitality += 10;
            }
        }


        // refer to World.js line 393
        // https://github.com/photonstorm/phaser/blob/v2.4.3/src/physics/arcade/World.js
        // ?? do something with collideCallback, processCallback, callbackContext
        /*if (e1.id === e2.id) {
            var strength = (e1.strength + e2.strength) / 2;
            var intelligence = (e1.intelligence + e2.intelligence) / 2;
            var speed = e1.speed;

            player = characters.create(game.world.width * Math.random(), game.world.height * Math.random(), 'dude');
            player.org = new Organism(e1.id, strength, intelligence, speed);

            // if (e1.intelligence < e2.intelligence) {
            //     intelligence = e1.intelligence * 1.1;
            // }
            // else {
            //     intelligence = e2.intelligence * 1.1;
            // }

            // switch(e1.id) {
            //     case 1:
            //         organism = new Organism(5, intelligence, 5);
            //         break;
            //     case 2:
            //         organism = new Organism(1, intelligence, 8);
            //         break;
            //     case 3:
            //         organsim = new Organism(6, intelligence, 4);
            //         break;
            // }

            // both parents remaining life span decreases
            e1.strength -= 2;
            e2.strength -= 2;
        }*/
    }

    function update() {

        game.physics.arcade.collide(characters, characters, collisionHandler, null, this);
        game.physics.arcade.collide(characters, yummy, eatsMeat, null, this);

        if (start) {
            characters.forEach(function(char) {
		//console.log(char.org.name);
                //loop through all characters
		
	      if(char.org.vitality <= 0){
		char.kill();
		console.log("unit died of old age");
	      }
	      else {
                if(char.org.timeout >= 30) {
		    char.org.vitality -= 10;
		    char.org.dir = chooseDir(char);
		    //console.log(char.org.dir);
                    char.org.timeout = 0;
                    char.body.velocity.x = char.org.speed * char.org.dir.x;
                    char.body.velocity.y = char.org.speed * char.org.dir.y;
                } else {
                    char.org.timeout += 1;
                }

                if (char.body.x >= (WIDTH - char.width)) {
                    char.body.velocity.x = char.org.speed * -char.org.dir.x;
                } else if (char.body.x <= 0) {
                    char.body.velocity.x = char.org.speed * -char.org.dir.x;
                }
                if (char.body.y >= (HEIGHT - char.height)) {
                    char.body.velocity.y = char.org.speed * -char.org.dir.y;
                } else if (char.body.y <= 0) {
                    char.body.velocity.y = char.org.speed * -char.org.dir.y;
                }
	      }
            });
        }
    }

    function chooseDir(currentCell) {
        var intel = currentCell.org.intelligence;
        var str = currentCell.org.strength;
        var x = currentCell.body.x;
        var y = currentCell.body.y;
        var range = 10 * intel; // infinite range for now intel * 10; // 10 is arbitrary
        var smartness = intel * Math.random();

        var dir = {
            x: 0,
            y: 0
        };

        var found = false;
	var foodfound = false;

        if (smartness > 0.2) {
	    var foodlen = yummy.length;
	    for(var q = 0; q < foodlen; q++){
	      if(yummy.children[q].alive){
		var fx = yummy.children[q].x;
		var fy = yummy.children[q].y;
		if(Math.abs(x - fx) < range && Math.abs(y - fy) < range){
		  var xdiff = fx - x;
		  var ydiff = fy - y;
		  var len = Math.sqrt((xdiff * xdiff) + (ydiff * ydiff));
		  dir.x = xdiff / len;
		  dir.y = ydiff / len;
		  foodfound = true;
		  found = true;
		  break;
		}
	      }
	    }
	    if(!foodfound){
            // console.log("hi");
            var len = characters.length;
            for (var i = 0; i < len; i++) {
		if(characters.children[i].alive){
                var ex = characters.children[i].x;
                var ey = characters.children[i].y;
                if (currentCell.org.name != characters.children[i].org.name && currentCell.org.id != characters.children[i].org.id) {
                    if (Math.abs(x - ex) < range && Math.abs(y - ey) < range) {
                        //console.log("range");
                        var estr = characters.children[i].org.strength;
                        if (estr > str) {
                            var xdiff = ex - x;
                            var ydiff = ey - y;
                            var len = Math.sqrt((xdiff * xdiff) + (ydiff * ydiff));
                            dir.x = -(xdiff) / len;
                            dir.y = -(ydiff) / len;
                        } else {
                            var xdiff = ex - x;
                            var ydiff = ey - y;
                            var len = Math.sqrt((xdiff * xdiff) + (ydiff * ydiff));
                            dir.x = (xdiff) / len;
                            dir.y = (ydiff) / len;
                        }
			//console.log("found!");
                        found = true;
			//console.log(characters.length);
                        break;
                    }
                }
		}
            }
	    }
        }
        if (found === false) {
	    //console.log("not found");
            dir.x = Math.random() - 0.5;
            dir.y = Math.random() - 0.5;
            var len = Math.sqrt((dir.x * dir.x) + (dir.y * dir.y));
            dir.x = dir.x / len;
            dir.y = dir.y / len;
        }
        return dir;
    }
}
