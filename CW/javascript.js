window.addEventListener('DOMContentLoaded', function () {

const body = document.querySelector('body');

var mainForm = document.createElement('form'),
	textDiv = document.createElement('div'),
	textFish = document.createElement('div'),
	buttDiv = document.createElement('div'),
    forRegistration = document.createElement('div'),
	tyForRegistration = document.createElement('div'),
	x = document.createElement('input'),

	inputNameFormOne = document.createElement('div'),
	inputNameFormTwo = document.createElement('div'),
	inputNameFormThree = document.createElement('div'),

	inputFormOne = document.createElement('input'),
	inputFormTwo = document.createElement('input'),
	inputFormThree = document.createElement('input'),
	buttTrue = document.createElement('input'),
	buttFalse = document.createElement('input');

body.appendChild(mainForm);
mainForm.setAttribute('class','mainBlock');

mainForm.appendChild(textDiv);
textDiv.setAttribute('class','text');
textDiv.textContent = 'Forma registration';

mainForm.appendChild(inputNameFormOne);
inputNameFormOne.textContent = 'First';
inputNameFormOne.setAttribute('class','inputNameFormOne');
mainForm.appendChild(inputFormOne);
inputFormOne.setAttribute('class','inputFormOne');

mainForm.appendChild(inputNameFormTwo);
inputNameFormTwo.textContent = 'Second';
inputNameFormTwo.setAttribute('class','inputNameFormTwo');
mainForm.appendChild(inputFormTwo);
inputFormTwo.setAttribute('class','inputFormOne');

mainForm.appendChild(inputNameFormThree);
inputNameFormThree.textContent = 'Third';
inputNameFormThree.setAttribute('class','inputNameFormThree');
mainForm.appendChild(inputFormThree);
inputFormThree.setAttribute('class','inputFormOne');

mainForm.appendChild(textFish);
textFish.textContent = '* Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
textFish.setAttribute('class','fish');

mainForm.appendChild(buttDiv);
buttDiv.setAttribute('class','buttonDiv');
buttDiv.appendChild(buttTrue);
buttDiv.appendChild(buttFalse);
buttTrue.textContent = 'Enter';
buttFalse.textContent = 'Close';
buttTrue.setAttribute('class','buttReady');
buttFalse.setAttribute('class','buttClose');
buttTrue.setAttribute('value','Enter');
buttFalse.setAttribute('value','Close');
buttTrue.setAttribute('type','button');
buttFalse.setAttribute('type','button');

mainForm.style.display = 'none';
mainForm.style.zIndex = '100';

formOpen.onclick = function(){

	tyForRegistration.style.display = 'none';

	inputFormOne.style.borderColor = 'lightgray';
	inputFormTwo.style.borderColor = 'lightgray';
	inputFormThree.style.borderColor = 'lightgray';

	inputFormOne.value = '';
	inputFormTwo.value = '';
	inputFormThree.value = '';

	if(mainForm.style.display === 'none'){
		mainForm.style.display = 'block'
	}
	else if(mainForm.style.display === 'block'){
		mainForm.style.display = 'none'
	}

};

buttFalse.onmouseover = function(){buttFalse.style.color = 'white'; buttFalse.style.background = '#ba3737'};
buttFalse.onmouseout= function(){buttFalse.style.background = '#e26636'; buttFalse.style.color = 'white'};

buttFalse.onclick = function(){
	mainForm.style.display = 'none';
	inputFormOne.value = '';
	inputFormTwo.value = '';
	inputFormThree.value = '';
};

buttTrue.onmouseover = function(){buttTrue.style.color = 'white'; buttTrue.style.background = 'green'};
buttTrue.onmouseout= function(){buttTrue.style.background = '#6cd173'; buttTrue.style.color = 'white'};
buttTrue.onclick = function(){

	if(inputFormOne.value === ''|| inputFormTwo.value === '' || inputFormThree.value === ''){
		if(inputFormOne.value === ''){
		inputFormOne.style.borderColor = '#e26666'
		}
		else{
			inputFormOne.style.borderColor = '#6cd173'
		}

		if(inputFormTwo.value === ''){
			inputFormTwo.style.borderColor = '#e26666'
		}
		else{
			inputFormTwo.style.borderColor = '#6cd173'
		}

		if(inputFormThree.value === ''){
			inputFormThree.style.borderColor = '#e26666'
		}
		else{
			inputFormThree.style.borderColor = '#6cd173'
		}
	}
	else{

		const object ={Name:inputFormOne.value, SecondName:inputFormTwo.value, Something:inputFormThree.value};
		mainForm.style.display = 'none';
		console.log(object);

		body.appendChild(tyForRegistration);
		tyForRegistration.appendChild(forRegistration);
		tyForRegistration.appendChild(x);

		x.setAttribute('type', 'button');
		x.setAttribute('value', 'Good by!!1');
		x.style.margin = '25px 0px 0px 240px';
		x.style.fontSize = '20px';
		x.style.weight = 'bold';
		x.style.width = '150px';
		x.style.background = 'white';
		x.style.border = '5px solid #6cd173';
		x.style.color = '#6cd173';

		tyForRegistration.style.display = 'block';
		tyForRegistration.style.width = '400px';
		tyForRegistration.style.margin = '20px auto';
		tyForRegistration.style.fontSize = '30px';
		tyForRegistration.style.fontWeight = 'bold';
		tyForRegistration.style.color = 'gray';
		tyForRegistration.style.padding = '20px';
		tyForRegistration.style.border = '10px solid lightgray';

		forRegistration.textContent = 'Thank you for registering';
		forRegistration.style.textAlign = 'center';

	}
	x.onmouseout = function(){x.style.color = '#6cd173'; x.style.background = 'white'};
	x.onmouseover = function(){x.style.background = '#6cd173'; x.style.color = 'white'};
	x.onclick = function(){body.removeChild(tyForRegistration)}
}
});