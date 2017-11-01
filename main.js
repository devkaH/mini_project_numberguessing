var randomGuess=Math.floor((Math.random() * 100) + 1);
var inputElt=document.querySelector('input');
var btnElt=document.querySelector('button');
var listElt= document.querySelector('.guessList');
var newText= document.querySelector('.title');
var messageRes=document.querySelector('.messageRes');
var indication=document.querySelector('.indication');
var result=document.querySelector('.result');
var form = document.getElementById("#myForm");
var i=0;

btnElt.onclick=function guess(){
	var newGuess=inputElt.value;
	
	if (i<=9){

		if (newGuess>randomGuess){

			messageRes.textContent="wrong!!!";
			indication.textContent="Last guess was too high";
			inputElt.value="";
			i++;


		}else if (newGuess<randomGuess) {
			messageRes.textContent="wrong!!!";
			indication.textContent="Last guess was too low";
			inputElt.value="";
			i++;

		}else {messageRes.textContent="";
		indication.textContent="";
		result.textContent="Congratuation! you got it right";
		disable();
		restartGame();
	}



	newText.textContent="Previous Guesses:";
	var newItem=document.createElement('li');
}else {
	messageRes.textContent="GameOver you have only 10 times";
	restartGame();
	disable();
	indication.textContent="";

}

function disable(){
	inputElt.readOnly=true;
	inputElt.value="";
	document.getElementById("myBtn").disabled = true;
}

function restartGame(){
		var btn = document.createElement("BUTTON");
	t = document.createTextNode("Start new game");

	btn.appendChild(t);   
	document.body.appendChild(btn);  
	btn.onclick=function reset(){ window.location.reload();}
}
newItem.textContent=newGuess;
listElt.appendChild(newItem);





}
