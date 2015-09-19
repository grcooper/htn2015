// Returns an array [x, y] coordinates for the object to use based on intelligence

function chooseDir(var currentCell) {
    var intel = currentCell.intelligence;
    var str = currentCell.strength;
    var x = currentCell.x;
    var y = currentCell.y;
    var range = intel * 30; // 30 is arbitrary
    var smartness = intel * Math.random();

    var dir = {x: 0, y: 0};

    if (smartness > 0.3) {
        var len = characters.children.length();
        var found = false;
        for (var i = 0; i < len; i++) {
            var ex = characters.children[i].x;
            var ey = characters.children[i].y;
            if (Math.abs(x - ex) < range && Math.abs(y - ey) < range) {
                var estr = characters.children[i].strength;
                if (estr > str) {
		    var len = Math.sqrt((x * x) + (y * y));
                    dir.x = (ex - x)/len;
		    dir.y = (ey - y)/len;
                }
		else {
		    var len = Math.sqrt((x * x) + (y * y));
		    dir.x = -(ex - x)/len;
		    dir.y = -(ey - y)/len;
		}
		found = true;
		break;
            }
        }
    }
    if(found == false){
      dir.x = Math.random();
      dir.y = Math.random();
      var len = Math.sqrt((x * x) + (y * y));
      dir.x = dir.x/len;
      dir.y = dir.y/len;
    }
    return dir;
}
