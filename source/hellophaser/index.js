
    function organism(str, int, speed){
        //Creates new organism
        this.strength = str;
        this.intelligence = intl;
        this.speed = speed;
    }

    function createOrganism_A(){
        //Make new organism with hard coded stats
        var organism = new organism();
        return organism;
    }

    function createOrganism_C(){
        var organism = new Organism(6, 1, 4);
        return organism;
    }
  
    var WIDTH = 800;
    var HEIGHT = 600;
    var STARTORG = 5;
    window.onload = function() {

function getStrValue() {
    var strValue = document.getElementById("inputStrength").value;
    alert(strValue);
}

function getIntValue() {
    var intValue = document.getElementById("inputIntelligence").value;
    alert(intValue);
}

function getSpeedValue() {
    var speedValue = document.getElementById("inputSpeed").value;
    alert(speedValue);
}

    window.onload = function() {

        var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create });
        
        function preload () {

            game.load.image('sky', 'assets/sky.png');
            game.load.image('logo', 'phaser.png');
            game.load.spritesheet('dude', 'assets/dude.png', 32, 48);


        }

        function create () {

            //Physics
            //game.physics.startSystem(Phaser.Physics.ARCADE);

            //Background
            game.add.sprite(0, 0, 'sky');
           
            player = game.add.sprite(32, game.world.height - 150, 'dude');

<<<<<<< HEAD
            characters = game.add.group();
	    for(var i = 0; i < STARTORG; i++){
	      player = characters.create(game.world.width * Math.random(), game.world.height * Math.random(), 'dude');
	      player.org = new createOrganism_A();
	    }
        }

        function update () {
       
            characters.forEach(function(char){
                //loop through all characters
                var xdirection;
                var ydirection;
                xdirection = Math.round(Math.random());
                ydirection = Math.round(Math.random());
		
                if(char.org.timeout == 30){
                    char.org.timeout = 0;
                if(xdirection){
                    char.body.velocity.x = char.org.speed * 20;
                }
                else {
                    char.body.velocity.x = char.org.speed * -20;
                }

                if(ydirection){
                    char.body.velocity.y = char.org.speed * 20;
                }
                else {
                    char.body.velocity.y = char.org.speed * -20;
                }
                }
                else {
                    char.org.timeout += 1;
                }
		
		if(char.body.x >= (WIDTH-char.body.width)){
		  char.body.velocity.x = char.org.speed * -20;
		}
		else if(char.body.x <= 0){
		  char.body.velocity.x = char.org.speed * 20;
		}
		if(char.body.y >= (HEIGHT-char.body.height)){
		  char.body.velocity.y = char.org.speed * -20;
		}
		else if(char.body.y <= 0){
		  char.body.velocity.y = char.org.speed * 20;
		}
            });
=======
>>>>>>> e971b4f8015a577b1311e7f1e90d1f1d8c181fc5

        }

    };

