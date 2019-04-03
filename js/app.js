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
	hungry(){
		this.hunger++
	}
	tired(){
		this.sleep++
	}
	bored(){
		this.boredom++
	}
	die(){
		this.alive = false;
		clearInterval(game.currentTime);
		game.death();
	}
	morph(){
		$('#teen').css('display', 'inline')
		$('#child').css('display', 'none')
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
	startTime() {
		this.currentTime = setInterval(() => {
			this.clock++
			if(this.clock % 60 === 0){
				this.character.older()
				if(this.character.age === 10){
					this.character.morph();
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
			if(this.character.boredom === 10 || this.character.hunger === 10 || this.character.sleep === 10){
				this.character.die()
			}
		}, 250)
	},
	updateStats() {
		$('#age').text(`Age: ${this.character.age}`);
		$('#boredom').text(`Boredom: ${this.character.boredom}`);
		$('#hunger').text(`Hunger: ${this.character.hunger}`);
		$('#sleepiness').text(`Sleepiness: ${this.character.sleep}`);
	},
	death(){
		if(this.character.alive === false){
			$('#die').css('display', 'flex')
			$('.screen').css('display', 'none')
			$('.buttons').css('display', 'none')
		}
	},
	feed(){
		if(this.character.hunger > 1){
			const feed = setInterval(() => {
				$('#eat').css('display', 'inline')
				this.character.hunger--
				if(this.character.hunger === 1){
					$('#eat').css('display', 'none')
					clearInterval(feed)
				}
			}, 200)
	  }
	},
	play(){
		if(this.character.boredom > 1){
			const playing = setInterval(() => {
				$('#eat').css('display', 'inline')
				this.character.boredom--
				if(this.character.boredom === 1){
					$('#eat').css('display', 'none')
					clearInterval(playing)
				}
			}, 500)
	  }
	},
	sleep(){
		if(this.character.sleep > 1){
			const nap = setInterval(() => {
				$('.screen').css('backgroundColor', 'dimGray')
				this.character.sleep--
				if(this.character.sleep === 1){
					$('.screen').css('backgroundColor', 'white')
					clearInterval(nap)
				}
			}, 800)
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
	$('#child').css('display', 'inline')
	game.startTime();
})

$('#feed').on('click', (event) => {
	game.feed();
})

$('#fun').on('click', (event) => {
	game.play();
})

$('#sleep').on('click', (event) => {
	game.sleep();
})









