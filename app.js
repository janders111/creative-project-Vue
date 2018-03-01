Vue.use(VAnimateCss.default);


var app = new Vue({
    el:'#vue-game',
    data: {
        randomArray: [],
        arraySize: 5,
        answers: [],
        answerIter: 0,
        message: 'Welcome! Begin game',
        colorOne: 'white',
        colorTwo: 'black',
        buttonColor: ['white', 'white', 'white']
    },
    
    created: function() {
        this.message = 'test';
        this.createArray();
        
        /*setTimeout(function(){ 
            console.log("test10");
            this.message = 'Remember the sequence!';
            console.log(this.message);
        }, 2000);*/
        
        /*
                    this.message = 'Remember the sequence!';
            for(i = 0; i < this.answerIter; i++) {
                var current = this.randomArray[this.answerIter];
                console.log(current);
                this.blink(0);
                this.blink(1);
            }
            this.message = 'repeat what you just saw';
            
            
            window.setInterval(() => {
            console.log(this.answerIter);
            for(i = 0; i < this.answerIter; i++) {
                var identifier = '#b' + this.randomArray[this.answerIter].toString();
                console.log(identifier);
                //$('head').fadeToggle(1000);
            }
            this.message = 'repeat what you just saw';
        },3000);
*/
            //when answerArray.size = answerIter, check if it is the same

            //if it is the same, repeat last two lines while 
            //answerarray.size < array size

            //else, cout you win! 
    },
    
    methods: {
        createArray: function() {
            var i = 0;
            for(i = 0; i < this.arraySize; i++) {
                this.randomArray[i] = (Math.floor(Math.random() * 3));
                console.log('random num generated');
            }
            console.log(this.randomArray);
        },

		start: function() {
			this.blinkSequence(0);

		},

		blinkSequence: function(i) {
			console.log(i);
			if (i == this.randomArray.length) {
				console.log(i + " was where I stopped");
				return;
			}
			var self = this;
			this.blink(self.randomArray[i], self);
			setTimeout(function() { console.log(self.randomArray); self.blinkSequence(i+1)  }, 2000);
		},

        blink: function(numberButton, self) {
            console.log("I tried to blink " + numberButton);
			self.buttonColor[numberButton - 1] = self.colorOne;
			setTimeout(function () {
				self.buttonColor[numberButton - 1] = self.colorTwo;
			}, 1500);
			/*if(numberButton == 0){
                console.log("1111");
                this.buttonColor1 = this.colorOne;
                setTimeout(function(){ 
                    this.buttonColor1 = this.colorTwo;
                }, 2000);
            }
             
            else if(numberButton == 1){
                this.buttonColor2 = this.colorOne;
                setTimeout(function(){ 
                    this.buttonColor2 = this.colorTwo;
                }, 2000);
            }
            
            else if(numberButton == 2){
                this.buttonColor3 = this.colorOne;
                setTimeout(function(){ 
                    this.buttonColor3 = this.colorTwo;
                }, 2000);
            }*/
            
        },
        
        answer: function() {
            this.answers[this.answerIter] = arguments[0] - 1;
            this.answerIter++;
            console.log('answer array after calling answer(): ' + this.answers);
        }
    }
});
