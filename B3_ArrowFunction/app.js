// Your Javascript Code Goes Here

// function expression
var greetMe = function() {
	console.log('Hi Hsuan.');
}
greetMe();

//arrow
greetSherry = () => console.log('Hi Tom!');
greetSherry();

//with paraments
greetU = name => console.log('Hi'+ name +'!');
greetU('NTUE');

var square1 = function(num){return num*num};

var square2 = num => {return num*num};

var square3 = num => num*num;

console.log(square1(2));

console.log(square2(3));

console.log(square3(4));