Vue.use(VAnimateCss.default);

/* TODO
 * -start game turn to blank when game started
 * -button changes to "next round" when round completed
 * -keep track of score and display it
 * -deactivate game once completed
 * -be able to restart game with start game
 */

var app = new Vue({
    el:'#vue-game',
    data: {
        randomArray: [],
        answers: [],
		score: 1,
        message: 'Round: 1',
		game_status: "start game",
		fin: '',
        colorTwo: ['#C98839', '#AC6C82', '#6384B0'],
		colorOne: ['#DEDDDC', '#DEDDDC', '#DEDDDC'],
        buttonColor1: '#C98839',
        buttonColor2: '#AC6C82',
        buttonColor3: '#6384B0'
    },
    
    created: function() {
        this.createArray();
    },
    
    methods: {
        createArray: function() {
            this.randomArray = [];
            for(i = 0; i < this.score + 4; i++) {
                this.randomArray[i] = (Math.floor(Math.random() * 3));
                console.log('random num generated');
            }
            console.log(this.randomArray);
        },

		start: function() {
			if (this.game_status == "start game" || this.game_status == "next round") {
				this.game_status = "";
				this.blinkSequence(0);
				this.fin = '';
				self = this;
				setTimeout(function() { self.game_status = "select choice"; self.answers = [] }, 780 * self.randomArray.length)
			}
		},

		blinkSequence: function(i) {
			console.log(i);
			if (i == this.randomArray.length) {
				console.log(i + " was where I stopped");
				return;
			}
			var self = this;
			this.blink(self.randomArray[i]);
			setTimeout(function() { console.log(self.randomArray); self.blinkSequence(i+1)  }, 850);
		},

        blink: function(numberButton) {
            console.log("I tried to blink button" + numberButton);
            var blinkDelay = 500;
            
            if(numberButton == 0){
                this.buttonColor1 = this.colorOne[numberButton];
                var self = this;
                setTimeout(function(){ 
                    self.buttonColor1 = self.colorTwo[numberButton];
                }, blinkDelay);
            }
             
            else if(numberButton == 1){
                this.buttonColor2 = this.colorOne[numberButton];
                var self = this;
                setTimeout(function(){ 
                    self.buttonColor2 = self.colorTwo[numberButton];
                }, blinkDelay);
            }
            
            else if(numberButton == 2){
                this.buttonColor3 = this.colorOne[numberButton];
                var self = this;
                setTimeout(function(){ 
                    self.buttonColor3 = self.colorTwo[numberButton];
                }, blinkDelay);
            }
            
        },
        
        answer: function(answer) {
            this.answers.push(answer - 1);
            console.log('answer array after calling answer(): ' + this.answers);
			var answerCorrect = true;
			if (this.answers.length == this.randomArray.length && this.game_status != "" && this.game_status != "start game") {
				console.log("check answer");
				for (i = 0; i < this.answers.length; i++) {
					console.log("random: " + this.randomArray[i] + ", guess: " + this.answers[i] + ". " + (this.randomArray[i] == this.answers[i]));
					if (this.randomArray[i] != this.answers[i]) {
						answerCorrect = false;
					}
				}
				if (answerCorrect) {
					console.log("sequences match!");
					this.score++;
					this.createArray();
					this.game_status = "next round";
					this.message = "Round: " + this.score;
				} else {
					this.fin = "Your score was: " + this.score + '. Click "start game" to play again!';
					this.game_status = "start game";
					this.score = 1;
					this.createArray();
					this.message = "Round: " + this.score;
				}
			}
		}
    }
});
