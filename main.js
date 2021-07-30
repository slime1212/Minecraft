canvas = new fabric.Canvas("c");

PlayerX = 10;
PlayerY = 10;

blockWidth = 30;
blockHeight = 30;

var player_object = "";
var block_image = "";

function player_update() {
    fabric.Image.fromURL("player.png", function(img) {
        player_object = img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({top: PlayerY, left: PlayerX}); 
        canvas.add(player_object);
    });
};

function newImage(get_img) {
    fabric.Image.fromURL(get_img, function(img) {
        block_image = img;
        block_image.scaleToWidth(blockWidth);
        block_image.scaleToHeight(blockHeight);
        block_image.set({top: PlayerY, left: PlayerX}); 
        canvas.add(block_image);
    });
};

window.addEventListener("keydown", down);
function down(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (e.shiftKey == true && keyPressed == "90") {
        console.log("Z and Shift Pressed Together.");
        blockWidth = blockWidth + 10;
        blockHeight = blockHeight + 10;
        document.getElementById("current-width").innerHTML = blockWidth;
        document.getElementById("current-height").innerHTML = blockHeight;
    };

    if (e.shiftKey == true && keyPressed == "88") {
        console.log("X and Shift Pressed Together.");
        blockWidth = blockWidth - 10;
        blockHeight = blockHeight - 10;
        document.getElementById("current-width").innerHTML = blockWidth;
        document.getElementById("current-height").innerHTML = blockHeight;
    };

    if (keyPressed == "38") {
        up();
        console.log("Player Movement Status: UP");
    };

    if (keyPressed == "40") {
        down1();
        console.log("Player Movement Status: DOWN");
    };

    if (keyPressed == "37") {
        left();
        console.log("Player Movement Status: LEFT");
    };

    if (keyPressed == "39") {
        right();
        console.log("Player Movement Status: RIGHT");
    };

    if (keyPressed == "49") {
        newImage('cloud.jpg');
        console.log("Using: Stone Block");
    };

    if (keyPressed == "50") {
        newImage('dark_green.png');
        console.log("Using: Dark Grass Block");
    };

    if (keyPressed == "51") {
        newImage('ground.png');
        console.log("Using: Main Block");
    };

    if (keyPressed == "52") {
        newImage('light_green.png');
        console.log("Using: Light Grass Block");
    };

    if (keyPressed == "53") {
        newImage('roof.jpg');
        console.log("Using: Cobblestone Block");
    };

    if (keyPressed == "54") {
        newImage('trunk.jpg');
        console.log("Using: Wood Block");
    };

    if (keyPressed == "55") {
        newImage('unique.png');
        console.log("Using: Hard Sand Block");
    };

    if (keyPressed == "56") {
        newImage('wall.jpg');
        console.log("Using: Brick Wall Block");
    };

    if (keyPressed == "57") {
        newImage('yellow_wall.png');
        console.log("Using: Brick Wall Block (Yellow)");
    };
};

function up() {
    if (PlayerY >= 0) {
        PlayerY = PlayerY - blockHeight;
        console.log("Block Image Height: " + blockHeight);
        console.log("When UP arrow is pressed, X: " + PlayerX + ", Y: " + PlayerY);
        canvas.remove(player_object);
        player_update();
    };
};

function down1() {
    if (PlayerY <= 500) {
        PlayerY = PlayerY + blockHeight;
        console.log("Block Image Height: " + blockHeight);
        console.log("When DOWN arrow is pressed, X: " + PlayerX + ", Y: " + PlayerY);
        canvas.remove(player_object);
        player_update();
    };
};

function left() {
    if (PlayerX > 0) {
        PlayerX = PlayerX - blockWidth;
        console.log("Block Image Width: " + blockWidth);
        console.log("When LEFT arrow is pressed, X: " + PlayerX + ", Y: " + PlayerY);
        canvas.remove(player_object);
        player_update();
    };
};

function right() {
    if (PlayerX <= 850) {
        PlayerX = PlayerX + blockWidth;
        console.log("Block Image Width: " + blockWidth);
        console.log("When RIGHT arrow is pressed, X: " + PlayerX + ", Y: " + PlayerY);
        canvas.remove(player_object);
        player_update();
    };
};

