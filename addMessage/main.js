// create array and create variables
var line = ['Не волнуйся, если не работает. Если бы все всегда работало, у тебя бы не было работы.', 'Если сразу не получилось, хорошо, назовите это версией 1.0.', 'Внимание, в коде выше могут быть баги. Я только доказал его корректность, но не запускал.'],
	lineText = document.getElementById('lineText'),
	sentClear = document.querySelectorAll('.sent input')
	leftRight = document.querySelectorAll('footer input'),
	counter = 0;
// function adding texts in DOM 
var text = function(){
	for(var i = 0; i<line.length; i++){
		lineText.innerText = line[i];
		i++
	}
}
// call function for add firts[0] text from array line 
text()
//function on onclick butt "sent"
sentClear[0].onclick = function(){
	let text = document.getElementById('text');
	if(text.value == '' || text.value == ' '){
			alert('Enter some text')
	}
	else{
		line.push(text.value);
			text.value = '';
	}
}
//function on onclick butt "clear"
sentClear[1].onclick = function(){
	let text = document.getElementById('text');
	text.value = '';
}
//function on onclick butt "next"
leftRight[1].onclick = function(){
	if(counter>=line.length){
		counter=0;
	}
	lineText.innerText = line[counter];
	counter++
}
//function on onclick butt "preview"
leftRight[0].onclick = function(){
	if(counter<=0){
		counter=line.length
	}
	counter--
	lineText.innerText = line[counter];
}