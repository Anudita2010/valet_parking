canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d"); 

usercar_width= 75;
usercar_height=100;

background_image = "parkingLot.jpg";
usercar_image = "car2.png";

usercar_x=5;
usercar_y=225; 

function add() {
background_imageTag= new Image;
background_imageTag.onload= uploadBackground;
background_imageTag.src= background_image;

usercar_imageTag= new Image;
usercar_imageTag.onload= uploadUsercar;
usercar_imageTag.src= usercar_image;
}

function uploadBackground() {
ctx.drawImage(background_imageTag, 0, 0, canvas.width, canvas.height);

}

function uploadUsercar() {
ctx.drawImage(usercar_imageTag, usercar_x, usercar_y, usercar_width, usercar_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
 if (usercar_y >= 0) {
	 usercar_y = usercar_y - 10;
	console.log( "When up arrow is clicked, x=" + usercar_x + "and y=" + usercar_y)
	uploadBackground();
	uploadUsercar();
 }
};

function down()
{
	if (usercar_y <= 300) {
		usercar_y = usercar_y+ 10;
	   console.log( "When down arrow is clicked, x=" + usercar_x + "and y=" + usercar_y)
	   uploadBackground();
	   uploadUsercar();
	}
};

function left()
{
	if (usercar_x >= 0) {
		usercar_x = usercar_x - 10;
	   console.log( "When left arrow is clicked, x=" + usercar_x + "and y=" + usercar_y)
	   uploadBackground();
	   uploadUsercar();
	}
};

function right()
{
	if (usercar_x <= 725) {
		usercar_x = usercar_x + 10;
	   console.log( "When right arrow is clicked, x=" + usercar_x + "and y=" + usercar_y)
	   uploadBackground();
	   uploadUsercar();
	}
};
