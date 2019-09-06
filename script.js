console.log("connected!!");
 
var squareColors = randomColor(6);
var picked = squareColors[Math.floor(Math.random()*6 )];
var squares = document.querySelectorAll(".square");
var text = document.querySelector(".response");
var truth = document.querySelector("span");
var buttonHower=document.querySelectorAll("stripitems");
var winnerback=document.querySelector("h1");
var newbtn=document.querySelector("#new");

function setSquares(){
for(i=0;i<squares.length;i++){
	squares[i].style.background=squareColors[i];
    squares[i].addEventListener("click",function(){
	var clicked=this.style.background;
	if(clicked===picked){
		text.textContent="Correct!!"
		console.log("correct!!");
		winner(clicked);
	}else{
		text.textContent="TryAgain!"
		console.log("tryAgain!!");
	}
})}
    truth.textContent="RGB: " +picked.slice(3);
}
setSquares();

function randomColor(num){
	//Creating an empty array
	var arr=[];
	//Calling out a function 
	for(i=0;i<num;i++){
		arr.push(colorGen());}
	//Returning the array 
	return arr;
}

function colorGen(){
	var r=Math.floor(Math.random()*256 );
	var g=Math.floor(Math.random()*256 );
	var b=Math.floor(Math.random()*256 );
	return "rgb("+r+", "+g+", "+b+")" ;
}

function winner(click){
	winnerback.style.background=click;
	for(i=0;i<squares.length;i++){
		squares[i].style.background=click;
	}
}

function newbt(){
	newbtn.addEventListener("click",function(){
		setSquares();

	});
}
newbt();
