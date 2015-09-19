// put in preload()  

game.load.image('meat', 'assets/food.png');


// put with all the global vars
var yummy;

// put in function create();

yummy = game.add.group();



// creates meat and spaces stuff out
for(var i=0; i < 30; i++) {
    var meat = yummy.create(i*100, 0, 'meat');
}


// put in update function

function eatsMeat (organism, meat) {
    
    // remove meat
    meat.kill();
    
    // increase strength score?
    organism.strength +=5;
    
}
