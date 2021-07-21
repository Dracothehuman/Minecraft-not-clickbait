var x=document.getElementById("MINCERAFT");



canvas = new fabric.Canvas('myCanvas');

player_x=10;
player_y=10;

block_width=30;
block_height=30;

var player_image="";
var block_image="";

function update_player(){
    x.play();
    fabric.Image.fromURL("steve.jpg",function(Img){
        player_image=Img;
        player_image.scaleToWidth(150);
        player_image.scaleToHeight(140);
        player_image.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_image);
    })
}

function block_place(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_image=Img;
        block_image.scaleToWidth(block_width);
        block_image.scaleToHeight(block_height);
        block_image.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image);
    })
}
window.addEventListener("keydown", mykeydown);

function mykeydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (e.shiftKey == true && keyPressed == "80"){
        console.log("The p and shift key have been pressed increasing the dimensions of your blocks");
        block_height=block_height + 10;
        block_width=block_width + 10;
        document.getElementById("height").innerHTML = block_height;
        document.getElementById("width").innerHTML = block_width;
    }
    if (e.shiftKey == true && keyPressed == "77"){
        console.log("The m and shift key have been pressed decreasing the dimensions of your blocks");
        block_height=block_height - 10;
        block_width=block_width - 10;
        document.getElementById("height").innerHTML = block_height;
        document.getElementById("width").innerHTML = block_width;
    }
    if (keyPressed == "38"){
        up();
        console.log("Up");
    }
    if (keyPressed == "37"){
        left();
        console.log("Left");
    }
    if (keyPressed == "39"){
        right();
        console.log("Right");
    }
    if (keyPressed == "40"){
        down();
        console.log("Down");
    }
    if (keyPressed == "66"){
        block_place("blue_wool.png");
        console.log("b")
    }
    if (keyPressed == "67"){
        block_place("chest.png");
        console.log("c")
    }
    if (keyPressed == "49"){
        block_place("crafting table.jpg");
        console.log("1")
    }
    if (keyPressed == "50"){
        block_place("cobblestone.jpg");
        console.log("2")
    }
    if (keyPressed == "68"){
        block_place("diamond.png");
        console.log("d")
    }
    if (keyPressed == "113"){
        block_place("furnace.jpg");
        console.log("q")
    }
    if (keyPressed == "69"){
        block_place("leaves.jpg");
        console.log("e")
    }
    if (keyPressed == "65"){
        block_place("oak_log.jpg");
        console.log("a")
    }
    if (keyPressed == "51"){
        block_place("Obsidian-Block.png");
        console.log("3")
    }
    if (keyPressed == "55"){
        block_place("sheep.png");
        console.log("7")
    }
    if (keyPressed == "52"){
        block_place("stone brrick.png");
        console.log("4")
    }
    if (keyPressed == "53"){
        block_place("stone.png");
        console.log("5")
    }
    if (keyPressed == "119"){
        block_place("white_wool.jpg");
        console.log("w")
    }
    if (keyPressed == "54"){
        block_place("wooden_plank.jpg");
        console.log("6")
    }
}
function up(){
    if (player_y >=0){
        player_y=player_y - block_height;
        console.log("Block height is" + block_height);
        console.log("PLayer's x is" + player_x + "Player's y is" + player_y);
        canvas.remove(player_image);
        update_player();

    }
}
function down(){
    if (player_y <=500){
        player_y=player_y + block_height;
        console.log("Block height is" + block_height);
        console.log("Player's x is" + player_x + "Player's y is" + player_y);
        canvas.remove(player_image);
        update_player();
    }
}
function left(){
    if (player_x >=0){
        player_x=player_x - block_width;
        console.log("Block width is" + block_width);
        console.log("Player's x is" + player_x + "Player's y is" + player_y);
        canvas.remove(player_image);
        update_player();
    }
}
function right(){
    if (player_x <= 850){
        player_x=player_x + block_width;
        console.log("Block width is" + block_width);
        console.log("Player's x is" + player_x + "Player's y is" + player_y);
        canvas.remove(player_image);
        update_player();
    }
}