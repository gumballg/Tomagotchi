class Tomagotchi {
	constructor(name){
		this.hunger = 6;
		this.sleep = 3;
		this.boredom = 1;
		this.age = 1;
		this.name = name;
		this.alive = true;
		this.stage = 1;
	}
	eat(){
		this.hunger = 1;
	}
	hungry(){
		this.hunger++
	}
	nap(){
		this.sleep = 1;
	}
	tired(){
		this.sleep++
	}
	play(){
		this.boredom = 1;
	}
	bored(){
		this.boredom++
	}
	die(){
		this.alive = false;
		clearInterval(game.currentTime);
	}
	morph(){

	}
	older(){
		this.age++
	}
}

const game = {
	clock: 0,
	character: null,
	createName(name) {
	 	const dingleWood = new Tomagotchi(name);
	 	 this.character = dingleWood;	
	},
	updateTime() {
		$('#time').text(`Time: ${this.clock}`);
	},
	startTime() {
		this.currentTime = setInterval(() => {
			this.clock++
			this.updateTime()
			if(this.clock % 60 === 0){
				this.character.older()
			}
			if(this.clock % 20 === 0){
				this.character.tired()
				this.character.bored()
			}
			if(this.clock % 10 === 0){
				this.character.hungry()
			}
			this.updateStats()
			if(this.character.boredom === 10 || this.character.hunger === 10 || this.character.sleep === 10){
				this.character.die()
			}
		}, 100)
	},
	updateStats() {
		$('#age').text(`Age: ${this.character.age}`);
		$('#boredom').text(`Boredom: ${this.character.boredom}`);
		$('#hunger').text(`Hunger: ${this.character.hunger}`);
		$('#sleepiness').text(`Sleepiness: ${this.character.sleep}`);
	}
}

$('#createName').on('click', (event) => {
	event.preventDefault();
	const userName = $('#name').val();
	game.createName(userName);
	$('.begin').css('display', 'none')
	$('#start').css('display', 'block')
	$('.device').css('display', 'block')
})

$('#start').on('click', (event) => {
	$('#start').css('display', 'none')
	game.startTime();
})

$('#feed').on('click', (event) => {
	game.character.eat();
})

$('#play').on('click', (event) => {
	game.character.play();
})

$('#sleep').on('click', (event) => {
	game.character.nap();
})









