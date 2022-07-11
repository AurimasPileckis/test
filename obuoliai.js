let grauztukai = new Map();
function rand(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
}

class Vaisius {
	constructor() {
		this.dydis = rand(5, 25);
		this.id = rand(1000000, 9999999);
		this.prakastas = false;
	}

	setPrakasti(prakasti) {
		this.prakastas = prakasti;
	}
	getPrakastas() {
		this.prakastas = true;
		return this;
	}
}
// const vaisius = new Vaisius();
// vaisius.setPrakasti(true);
// console.log(vaisius);

class Krepsys {
	static vaisiai = [];
	static pripildyti() {
		for (let i = 0; i < 20; i++) {
			this.vaisiai.push(new Vaisius());
			this.vaisiai.sort((a, b) => b.dydis - a.dydis);
		}
		return this;
	}
	static isimti() {
		let isimtasVaisius = Krepsys.vaisiai.shift();
		isimtasVaisius.setPrakasti(true);
		grauztukai.set(isimtasVaisius.id, isimtasVaisius);
		return this;
	}
}

Krepsys.pripildyti();
Krepsys.isimti();
Krepsys.isimti();
Krepsys.isimti();
Krepsys.isimti();
Krepsys.isimti();
Krepsys.isimti();
Krepsys.isimti();
Krepsys.isimti();
Krepsys.isimti();
console.log(Krepsys);
console.log(grauztukai);
Krepsys.pripildyti();
console.log(Krepsys);
console.log(grauztukai);
