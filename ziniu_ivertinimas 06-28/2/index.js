let one = Math.floor(Math.random() * 8999) + 1000;
let oneStr = one.toString();
let two = Math.floor(Math.random() * 8999) + 1000;
let twoStr = two.toString();
let three = Math.floor(Math.random() * 8999) + 1000;
let threeStr = three.toString();
let four = Math.floor(Math.random() * 8999) + 1000;
let fourStr = four.toString();
let five = Math.floor(Math.random() * 8999) + 1000;
let fiveStr = five.toString();
let six = Math.floor(Math.random() * 8999) + 1000;
let sixStr = six.toString();
console.log(oneStr, twoStr, threeStr, fourStr, fiveStr, sixStr);
const html = (document.querySelector(
	'#container'
).innerHTML = `${oneStr} ${twoStr} ${threeStr} ${fourStr} ${fiveStr} ${sixStr}`);
