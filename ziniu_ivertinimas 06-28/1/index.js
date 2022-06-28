const firstName = 'Aurimas';
const lastName = 'Pileckis';
let birthYear = 1997;
let thisYear = 2022;
const html = (document.querySelector(
	'.container'
).innerHTML = `Sveiki, as esu ${firstName} ${lastName}, man ${thisYear - birthYear} metai`);
