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
		setInterval(() => {

		}, 500)
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
		game.death();
	}
	teen(){
		$('#teen').css('display', 'block')
		$('#child').css('display', 'none')
		console.log("im changing");
	}
	adult(){
		console.log("im changing");
	}
	elder(){
		console.log("im changing");
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
				if(this.character.age === 5){
					this.character.teen();
				}
				if(this.character.age === 14){
					this.character.adult();
				}
				if(this.character.age === 24){
					this.character.elder();
				}
			}
			if(this.clock % 20 === 0){
				this.character.tired()
				this.character.bored()
			}
			if(this.clock % 10 === 0){
				this.character.hungry()
			}
			this.updateStats()
			// if(this.character.boredom === 10 || this.character.hunger === 10 || this.character.sleep === 10){
			// 	this.character.die()
			// }
		}, 500)
	},
	updateStats() {
		$('#age').text(`Age: ${this.character.age}`);
		$('#boredom').text(`Boredom: ${this.character.boredom}`);
		$('#hunger').text(`Hunger: ${this.character.hunger}`);
		$('#sleepiness').text(`Sleepiness: ${this.character.sleep}`);
	},
	death(){
		if(this.character.alive === false){
			$('#die').css('display', 'block')
		}
	}
}

$('#createName').on('click', (event) => {
	event.preventDefault();
	const userName = $('#name').val();
	game.createName(userName);
	$('.begin').css('display', 'none')
	$('#start').css('display', 'block')
	$('.device').css('display', 'block')
	$('#teen').css('display', 'none')
	$('.namechoice').text(`Here is ${userName}`)
})

$('#start').on('click', (event) => {
	$('#start').css('display', 'none')
	$('#init').css('display', 'none')
	$('#child').css('display', 'block')
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









