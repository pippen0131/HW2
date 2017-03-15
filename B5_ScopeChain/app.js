// scope and scope chain
function b1(){
	// var myVar;
	console.log(myVar);
}

function a1(){
	var myVar = 1;
	b1();
	console.log(myVar);
}

var myVar = 2;
console.log(myVar);
a1();

function a2(){
	var myVar = 1;
	function b2(){
		// var myVar;
		console.log(myVar);
	}
	b2();
	console.log(myVar);
}

var myVar = 2;
console.log(myVar);
a2();

// variables lifting
var firstname = 'Hsuan';
var addSurname = () => {
	var surname = 'Hsu';
	var fullname = firstname + ' ' + surname;
	var firstname = 'Tom';
	console.log(fullname);
}