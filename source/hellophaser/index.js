
    function Organism(str, intl, speed){
        //Creates new organism
        this.strength = str;
        this.intelligence = intl;
        this.speed = speed;
        this.timeout = 0;
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

        var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

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

            characters = game.add.group();
            player = characters.create(32, game.world.height - 150, 'dude');
            player.org = new createOrganism_A();



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

            });

        }

    };

