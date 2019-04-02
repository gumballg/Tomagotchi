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
	aging(){

	}
	morph(){

	}
}

const game = {
	clock: 0,
	start() {
		this.startTime();
	},
	startTime() {
		this.currentTime = setInterval(() => {
			this.clock++
			console.log(game.clock);
		}, 1000)
	},
	stats() {
		
	}
}

// method to update all stats on screen

$('#start').on('click', (event) => {
	game.start();
})





