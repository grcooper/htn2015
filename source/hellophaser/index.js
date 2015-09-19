
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


        }

    };

