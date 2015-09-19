
    function Organism(str, intl, speed){
        //Creates new organism
        this.strength = str;
        this.intelligence = intl;
        this.speed = speed;
    }

    function createOrganism_A(){
        //Make new organism with hard coded stats
        var organism = new Organism(5, 5, 5);
        return organism;
    }

    function createOrganism_B(){
        var organism = new Organism(2, 3, 8);
        return organism;
    }

    function createOrganism_C(){
        var organism = new Organism(6, 1, 4);
        return organism;
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

