// put in preload()  

game.load.image('meat', 'assets/food.png');


// put with all the global vars
var yummy;

// put in function create();

yummy = game.add.group();
yummy.enableBody = true;



// creates meat and spaces stuff out
for(var i=0; i < 30; i++) {
    var meat = yummy.create(i*100, 0, 'meat');
    meat.body.bounce.y = 0.7 + Math.random() * 0.2;
}


// put in update function

function eatsMeat (organism, meat) {
    
    // remove meat
    meat.kill();
    
    // increase strength score?
    organism.strength +=5;
    
}