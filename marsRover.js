// This is to test: final version in repo for Ironhack prep work
const rover = {
    direction: "N",
    x: 0,
    y: 0,
    travelLog: [{x:0, y:0}]
};

let obstacle = {x:2, y:1};

function turnLeft(rover){
    if (rover.direction === "N"){
        rover.direction = "W";
        //console.log(rover.direction); 
    } else if (rover.direction === "W"){
        rover.direction = "S";
        //console.log(rover.direction); 
    } else if (rover.direction === "S"){
        rover.direction = "E";
        //console.log(rover.direction);
    } else if (rover.direction === "E"){
        rover.direction = "N";
        //console.log(rover.direction);
    }
}

function turnRight(rover){
    if (rover.direction === "N"){
        rover.direction = "E";
        //console.log(rover.direction); 
    } else if (rover.direction === "E"){
        rover.direction = "S";
        //console.log(rover.direction); 
    } else if (rover.direction === "S"){
        rover.direction = "W";
        //console.log(rover.direction);
    } else if (rover.direction === "W"){
        rover.direction = "N";
        //console.log(rover.direction);
    }
}

function moveForward(rover){
    if (rover.direction === "N"){
        rover.y--;
        //console.log(`Position is: ${rover.x}, ${rover.y}`);
    } else if (rover.direction === "S"){
        rover.y++;
        //console.log(`Position is: ${rover.x}, ${rover.y}`);
    } else if (rover.direction === "W"){
        rover.x--;
        //console.log(`Position is: ${rover.x}, ${rover.y}`);
    } else if (rover.direction === "E"){
        rover.x++;
        //console.log(`Position is: ${rover.x}, ${rover.y}`);
    } 

else {
    console.log("The rover cannot be placed outside the grid.");
}
}

function moveBackwards(rover){
    if (rover.direction === "N"){
        rover.y++;
        //console.log(`Position is: ${rover.x}, ${rover.y}`);
    } else if (rover.direction === "S"){
        rover.y--;
        //console.log(`Position is: ${rover.x}, ${rover.y}`);
    } else if (rover.direction === "W"){
        rover.x--;
        //console.log(`Position is: ${rover.x}, ${rover.y}`);
    } else if (rover.direction === "E"){
        rover.x++;
        //console.log(`Position is: ${rover.x}, ${rover.y}`);
    }
}
   
function manageRover(rover, directions){
    for (let i = 0; i < directions.length; i++){
        if (rover.x >= 0 && rover.x < 10 && rover.y >= 0 && rover.y < 10){
            if ((rover.y + 1) === obstacle.y || (rover.x + 1) === obstacle.x || (rover.y - 1) === obstacle.y || (rover.x - 1) === obstacle.x){
            console.log("You cannot move due to an obstacle");
            break; }
            let orientation = directions[i];
            if (["l", "r", "f", "b"].includes(orientation)){
                switch(orientation){
                    case "l":
                        turnLeft(rover, orientation);
                        //console.log(`Rover facing direction ${rover.direction}`);
                        break;
                    case "r":
                        turnRight(rover, orientation);
                        //console.log(`Rover facing direction ${rover.direction}`);
                        break;
                    case "f":
                        moveForward(rover, orientation);
                        console.log(`Rover facing direction ${rover.direction}, x is ${rover.x} and y is ${rover.y}`);
                        break;
                    case "b":
                        moveBackwards(rover, orientation);
                        console.log(`Rover facing direction ${rover.direction}, x is ${rover.x} and y is ${rover.y}`);
                        break;      
            }
            rover.travelLog.push({x: rover.x, y: rover.y});
            console.log(rover.travelLog);
            }
            else {
                console.log("Please use correct directions: f, b, r and l.");
            }
        }
        else {
            console.log("This move is outside the grid.");
        }
    }
}

manageRover(rover, "r");



/* PROBLEM WITH INDEX USING FOR LOOP: i < whatever.length NOT i <=
whatever = [1, 2, 3, 4, 5, 6, 7]
==> this means index ends at 6, you start counting from 0 !!
*/