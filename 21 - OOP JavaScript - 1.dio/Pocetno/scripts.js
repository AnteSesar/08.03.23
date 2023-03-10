var character = {
  name: 'Eleven',
  show: 'Stranger Things',
  portrayedBy: 'Millie Bobby Brown'
}

const quotes = [
	'I\'m going to my friends. I\'m going home.', 
	'Pure fuel! PURE FUEL! WOO!', 
	'See? Zoomer.', 
	'Bitchin.'
];

// for (i=0; i <= quotes.length; i++){
// 	console.log(quotes[i]);
// }

//1
var proto1 = Object.getPrototypeOf(character);
var proto2 = Object.getPrototypeOf(proto1);


// console.log(proto1);
// console.log(proto2);

//2
//var rndCnt = parseInt(Math.random()*10) % 4;
//var rndCnt = Math.floor(Math.random()*quotes.length);
// var rndCnt = parseInt(Math.random()*quotes.length);
// console.log(rndCnt);
// var rndVal = quotes[rndCnt];
// console.log(rndVal);

//3
character.prototype = function(){
	let rndCnt = parseInt(Math.random()*quotes.length);
	//console.log(rndCnt);
	let rndVal = quotes[rndCnt];
	//console.log(rndVal);
	return rndVal;
}

console.log(character.prototype());
//console.log(proto1);