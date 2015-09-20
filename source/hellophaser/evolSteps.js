var numRounds = 0;
var winningStr;
var winningInt;
var winningSpeed;



// stop if numRounds > 9
function stopEverything() {
    if(numRounds > 9) {
        return;
    }
};

// checking for the winning tribe
// then save the stats
for(var i = 1; i < characters.length; i++) {
    if(characters.children[i].alive) {
        winningStr = characters.children[i].org.strength;
        winningInt = characters.children[i].org.intelligence;
        winningSpeed = characters.children[i].org.speed;
        numRounds++;
    }
};



// destroy alive sprite(s) and food
function destroyShit() {
    for(var i = 0; i < characters.length; i++) {
        characters.remove(characters.children[i]);
    }
   for(var j = 0; j < yummy.length; j++) {
       yummy.remove(yummy.children[j]);
    }
};

// respawn food ?
// pretty unsure abut this one
function spawnMeat() {
    for (var i = 0; i < 15; i++) {
        var meat = yummy.create(game.world.width * Math.random() * 0.95,
                                game.world.height * Math.random(), 'meat');
        meat.scale.setTo(.9, 0.9);
    }   
}