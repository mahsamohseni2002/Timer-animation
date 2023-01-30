class Timer {
    // parameter here is singnals to our DOM
    constructor(durationInput, startButton, pauseButton){
     // assign the arguments to instance variables
     this.durationInput = durationInput;
     this.startButton = startButton;
     this.pauseButton = pauseButton;
     // whenever in the DOM I clicked on start button play the start method.
     this.startButton.addEventListener('click', this.start);
     this.pauseButton.addEventListener('click', this.pause)
    };
    start = () => {
        this.tick();
        this.interval = setInterval(this.tick, 1000);
    };

    pause = () => {
        clearInterval(this.interval);
    };

    tick = () => { 
        if (this.timeRemaining <= 0 ){
            this.pause();
        } else {
            this.timeRemaining = this.timeRemaining - 1;
        }
        
    };

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time) {
        this.durationInput.value = time
    }
}

 const durationInput = document.querySelector('#duration');
 const startButton = document.querySelector('#start');
 const pauseButton = document.querySelector('#pause');

  
const timer = new Timer (durationInput, startButton, pauseButton)