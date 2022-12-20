/*Setting how the numbers can be inputted:
*/
let numbers = document.querySelectorAll('.number');
numbers.forEach(element => {
    element.addEventListener('keypress', function(event) {
        let value = element.value;
        //when a key is pressed it'll check if there are more than two digits in number value:
        if (value.match(/\d{2,}/)) {
            // If it does, prevent the change from being applied:
            event.preventDefault();
          }
    })
});

/* Set the interrogation mark button functionality
*/
const icon = document.getElementById("interrogationBtn");
const text = document.getElementById("textInstructions");
let textHidden = true;
icon.addEventListener("click", () => {
  textHidden = !textHidden;
  if (textHidden) {
    text.style.animation = "fadeOut 0.5s forwards";
  }
  else {
    text.style.animation = "fadeIn 0.5s forwards";
  }
});

/*Class Timer:
*/
class CountdownTimer {
  constructor() {
    this.time = 0;
    this.intervalId = null;
    this.hourField = document.getElementById('hour');
    this.minuteField = document.getElementById('minute');
    this.secondField = document.getElementById('second');

    //Windows listeners:
    window.addEventListener("keydown", event => {
      if((event.key === "Enter") && (document.getElementById("playBtn") !== null)) {
        document.getElementById("playBtn").click();
      } else if (event.key === "Enter" && (document.querySelector(".pause-button") !== null)){
        document.querySelector(".pause-button").click();
      }
    });

    //Play button:
    this.buttonsBox = document.querySelector("#buttonsBox"); 
    this.playBtn = document.getElementById("playBtn");

    //Declare initial empty pause elements:
    this.pauseButton = null;
    this.pauseIcon = null;
    this.pauseBar1 = null;
    this.pauseBar2 = null;

    this.setPlayBtnListeners();

    //Reset button functionalities:
    document.getElementById('reset').addEventListener('click', () => {
      this.reset();
    });
  }

  setPlayBtnListeners() {
    this.playBtn.addEventListener("click", () => {      
    //Starts the timer:
    this.time = (this.hourField.value * 3600) + (this.minuteField.value * 60) + (this.secondField.value * 1);
    if(this.time == 0) {
      this.reverse();
    } else {
      this.start();
    }
    //Then, substitue the #playBtn button to a .pause-button button:
    this.buttonsBox.removeChild(this.playBtn);  
    this.pauseButton = document.createElement("button");
    this.pauseButton.classList.add("pause-button");  
        this.pauseIcon = document.createElement("div");
        this.pauseIcon.classList.add("pause-icon");  
            this.pauseBar1 = document.createElement("div");
            this.pauseBar1.classList.add("pause-bar");
            this.pauseBar2 = document.createElement("div");
            this.pauseBar2.classList.add("pause-bar");
          this.pauseIcon.appendChild(this.pauseBar1);  
          this.pauseIcon.appendChild(this.pauseBar2);  
    this.pauseButton.appendChild(this.pauseIcon);
    this.buttonsBox.insertBefore(this.pauseButton, this.buttonsBox.firstChild);    
    //And, add an eventlistener to this pause button:
    this.pauseButton.addEventListener("click", this.resumePlay.bind(this));
    });
  }

  resumePlay() {
    this.pause();
    //Then change the button back to a #playBtn:
    this.playBtn = document.createElement('button');
    this.playBtn.id = 'playBtn';
    this.buttonsBox.removeChild(this.pauseButton);
    this.buttonsBox.insertBefore(this.playBtn, this.buttonsBox.firstChild);
    this.setPlayBtnListeners();
  }

  start() {
      // Turn the inputed time to seconds:
      this.time = (this.hourField.value * 3600) + (this.minuteField.value * 60) + (this.secondField.value * 1);
      this.intervalId = setInterval(() => {
        this.time--;

    // If the remaining time is less than 0, reset it to 0
    if (this.time < 0) {
        this.time = 0;
      }

      // Update the input fields with the remaining time
      this.hourField.value = `${Math.floor(this.time / 3600)}`.padStart(2, '0');
      this.minuteField.value = `${Math.floor((this.time % 3600) / 60)}`.padStart(2, '0');
      this.secondField.value = `${Math.floor(this.time % 60)}`.padStart(2, '0');

      //if it reaches 00:00:00 should reset
      if (this.time === 0) {
        this.reset();
      }

    }, 1000);
  }

  pause() {
  clearInterval(this.intervalId);
  }

  reset() {
    let checkPlayBtn = !(document.querySelector('#playBtn') === null);
    let checkPauseBtn = !(document.querySelector('.pause-button') === null);
    if(checkPlayBtn) { //if there is a playBtn
      if(this.time == 0) {
        console.log("Your countdown is already reset. Don't try to reset it again!")
      } else {
        this.pause();
        this.time = 0;
        this.hourField.value = '';
        this.minuteField.value = '';
        this.secondField.value = '';
      }
    } else if (checkPauseBtn) { //suf there is a pause-button
      this.resumePlay();
    }
    this.time = 0;
    this.hourField.value = '';
    this.minuteField.value = '';
    this.secondField.value = ''; 
  }


  reverse() {
    // Turn the inputed time to seconds:
    this.time = (this.hourField.value * 3600) + (this.minuteField.value * 60) + (this.secondField.value * 1);
    this.intervalId = setInterval(() => {
      this.time++;  
      // Update the input fields with the time
      this.hourField.value = `${Math.floor(this.time / 3600)}`.padStart(2, '0');
      this.minuteField.value = `${Math.floor((this.time % 3600) / 60)}`.padStart(2, '0');
      this.secondField.value = `${this.time % 60}`.padStart(2, '0');      
    }, 1000);
  }

  }
   


/* Create a new object countdown timer:
*/
const timer = new CountdownTimer();
