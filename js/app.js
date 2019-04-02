class Tomagotchi {
	constructor(name){
		this.hunger = 6;
		this.sleep = 3;
		this.boredom = 1;
		this.age = 1;
		this.name = 'name';
		this.alive = true;
		this.stage = 1;
	}
	feed(){

	}
	lights(){

	}
	play(){

	}
	die(){

	}
	morph(){

	}
}

const dingleWood = new Tomagotchi('dingleWood');

const game = {
	clock: 0,
	start() {
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
				dingleWood.age++
			}
			if(this.clock % 20 === 0){
				dingleWood.sleep++
				dingleWood.boredom++
			}
			if(this.clock % 10 === 0){
				dingleWood.hunger++
			}
			this.updateStats()
		}, 1000)
	},
	updateStats() {
		$('#age').text(`Age: ${dingleWood.age}`);
		$('#boredom').text(`Boredom: ${dingleWood.boredom}`);
		$('#hunger').text(`Hunger: ${dingleWood.hunger}`);
		$('#sleepiness').text(`Sleepiness: ${dingleWood.sleep}`);
	}
}
game.updateTime();
game.updateStats();

// method to update all stats on screen

$('#start').on('click', (event) => {
	game.start();
})





