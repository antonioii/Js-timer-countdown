# Js-timer-countdown

A simple Javascript Timer and Countdown WebApp
   
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=flat&logo=html5&logoColor=white) ![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=flat&logo=markdown&logoColor=white)   

## Sketch  

![Sketch](./imgs/Timer.png)  

## Requirements:

- A play button that when clicked (or activated via space/enter) will check if there is any input in the time field and the timer is paused. If it exists and is not paused, it will start a countdown. If it does not exist and it is not paused, it will start a cumulative count up to 99:99:99 (hh:mm:ss format). If it is paused, it just turns into a continue button. When the countdown starts, it turns into a pause button.

- A restart button that will reset the timer.

- A pause button that will pause assign the paused status to the timer and stop counting.
   
  
## Timer Algorithm
   
It receives an input and transforms it into seconds, when the play button is activated it will use an intervalset function so that every second it increments or decrements the time value and displays it on the screen.
   
      
---
   
### To be done:

- [ ] Layout with its proper CSS
- [ ] Interrogation button which displays instructions
- [ ] Play/continue button which becomes a pause button
- [ ] Pause button which becomes a play/continue button
- [ ] Restart button which restarts the timer/page
- [ ] The timer functionalities (timer increase and countdown decrease)
