Vue.use(VAnimateCss.default);


var app = new Vue({
    el:'#vue-game',
    data: {
        randomArray: [],
        arraySize: 5,
        answers: [],
        answerIter: 0,
        message: 'Welcome! Begin game',
        colorOne: 'pink',
        colorTwo: 'white',
        buttonColor1: 'white',
        buttonColor2: 'white',
        buttonColor3: 'white'
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
			this.blink(self.randomArray[i]);
			setTimeout(function() { console.log(self.randomArray); self.blinkSequence(i+1)  }, 2000);
		},

        blink: function(numberButton) {
            console.log("I tried to blink button" + numberButton);
            var blinkDelay = 500;
            
            if(numberButton == 0){
                this.buttonColor1 = this.colorOne;
                var self = this;
                setTimeout(function(){ 
                    self.buttonColor1 = self.colorTwo;
                }, blinkDelay);
            }
             
            else if(numberButton == 1){
                this.buttonColor2 = this.colorOne;
                var self = this;
                setTimeout(function(){ 
                    self.buttonColor2 = self.colorTwo;
                }, blinkDelay);
            }
            
            else if(numberButton == 2){
                this.buttonColor3 = this.colorOne;
                var self = this;
                setTimeout(function(){ 
                    self.buttonColor3 = self.colorTwo;
                }, blinkDelay);
            }
            
        },
        
        answer: function() {
            this.answers[this.answerIter] = arguments[0] - 1;
            this.answerIter++;
            console.log('answer array after calling answer(): ' + this.answers);
        }
    }
});
