const watch = document.querySelector('.watch');

//start button
const startButton = document.querySelector('.start-button');


watch.innerHTML = 0;

let id;
let count = 0;
startButton.addEventListener('click', () => {
  stopButton.innerHTML = 'STOP';
  count = 0;
  id = setInterval(function(){
    count ++;
    watch.innerHTML = count;

  }, 1000);
});

//stop button
const stopButton = document.querySelector('.stop-button');

stopButton.addEventListener('click', () => {

    if(count !== 0){
      stopButton.innerHTML = 'CONTINUE';
      clearInterval(id);
      count = count;
    }
});

//reset button
const resetButton = document.querySelector('.reset-button');

resetButton.addEventListener('click', () => {
  stopButton.innerHTML = 'STOP';
  clearInterval(id);
  count = 0;
  watch.innerHTML = count;
});