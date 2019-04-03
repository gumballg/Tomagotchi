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
	character: [],
	createName(name) {
	 	const dingleWood = new Tomagotchi(name);
	 	 this.character.push(dingleWood)
	 	console.log(dingleWood);
	 	console.log(dingleWood.age);
	 	console.log(this.character[0]);
	 	console.log(this.character[0].age);
	 	
	},
	start(){
		this.startTime();
	},
	updateTime() {
		$('#time').text(`Time: ${this.clock}`);
	},
	startTime() {
		this.currentTime = setInterval(() => {
			this.clock++
			this.updateTime()
			if(this.clock % 60 === 0){
				this.character[0].older()
			}
			if(this.clock % 20 === 0){
				this.character[0].tired()
				this.character[0].bored()
			}
			if(this.clock % 10 === 0){
				this.character[0].hungry()
			}
			this.updateStats()
		}, 100)
	},
	updateStats() {
		$('#age').text(`Age: ${this.character[0].age}`);
		$('#boredom').text(`Boredom: ${this.character[0].boredom}`);
		$('#hunger').text(`Hunger: ${this.character[0].hunger}`);
		$('#sleepiness').text(`Sleepiness: ${this.character[0].sleep}`);
	}
}

//game.updateTime();
// game.updateStats();

// method to update all stats on screen
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
	game.start();
})

$('#feed').on('click', (event) => {
	dingleWood.feed();
})

$('#play').on('click', (event) => {
	dingleWood.play();
})

$('#sleep').on('click', (event) => {
	dingleWood.die();
})









