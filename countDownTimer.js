
let timer = document.getElementById("countdown");
let timeLeft = 0;
let timeStoped = false;
let button = document.getElementById("myBtn");
let btnIncSeconds = document.getElementById("upseconds");
let btnDecSeconds = document.getElementById("downseconds");
let btnIncMinuts = document.getElementById("upminuts");
let btnDecMinuts = document.getElementById("downminuts");
let btnIncHours = document.getElementById("uphours");
let btnDecHours = document.getElementById("downhours");                
function startCountdown()
        {

            button.disabled = true;
            btnIncSeconds.disabled = true;
            btnIncMinuts.disabled = true;
            btnIncHours.disabled = true;
            btnDecSeconds.disabled = true;
            btnDecMinuts.disabled = true;
            btnDecHours.disabled = true;
        
            updateTimerDisplay();

            countdown = setInterval(() => {
                
                if(timeLeft > 0){
                    timeLeft--;
                    updateTimerDisplay();
        
                }
                else{
                    clearInterval(countdown);
                    if(!timeStoped){
                        window.alert("Time is up")
                    }
                    enablebtns();
                    button.style.backgroundColor = "black";
                }
        
            }, 1000);

      
        }

function pauseCountdown(){
    clearInterval(countdown);
} 

function resumeCountdown(){
    startCountdown();
}

function stopCountdown(){
    timeStoped = true;
    timeLeft = 0;
    updateTimerDisplay();
}

function enablebtns (){
    btnIncSeconds.disabled = false,
    btnIncMinuts.disabled = false,
    btnIncHours.disabled = false,
    btnDecSeconds.disabled = false,
    btnDecMinuts.disabled = false,
    btnDecHours.disabled = false,
    button.style.background = "black",
    button.disabled = false;
}
let incrementInterval1;
let incrementInterval2;
function msDownS() {
    incrementInterval1 = setInterval(() => {
        incrementSeconds();
        if(timeLeft === 25){
            incrementInterval2 = setInterval(() => {
                incrementSeconds();
            },150)
        }
    }, 200);
}

function msUpS() {
    clearInterval(incrementInterval1);
    clearInterval(incrementInterval2)
}

function incrementSeconds(){
    timeLeft++;
    updateTimerDisplay();
}

function decrementSeconds(){
    if(timeLeft <= 0){
        window.alert("SECONDS ARE ALREADY 0");
    }
    else{
        timeLeft--;
    }

    updateTimerDisplay();
}

function msDownM(){
    incrementInterval1 = setInterval(() => {
        incrementMinuts();
        if(timeLeft === 960){
            incrementInterval2 = setInterval(() => {
                incrementMinuts();
            }, 180);
        }
    }, (200));
}

function msUpM(){
    clearInterval(incrementInterval1);
    clearInterval(incrementInterval2);
}

function incrementMinuts(){
    timeLeft= timeLeft + 60;
    updateTimerDisplay();
}

function decrementMinuts(){
    if(timeLeft < 60){
        window.alert("MINUTS ARE ALREADY 0");
    }
    else{
        timeLeft = timeLeft - 60;
    }

    updateTimerDisplay();
}

function msDownH(){
    incrementInterval1 = setInterval(() => {
        incrementHours();
        if(timeLeft === 144000){
            incrementInterval2 = setInterval(() => {
                incrementHours();
            }, 180);
        }
    }, 200)
}

function msUpH(){
    clearInterval(incrementInterval1);
    clearInterval(incrementInterval2);
}

function incrementHours(){
    timeLeft= timeLeft + 3600;

    updateTimerDisplay();
}

function decrementHours(){
    if(timeLeft < 3600){
        window.alert("HOURS ARE ALREADY 0");
    }
    else{
        timeLeft= timeLeft - 3600;
    }

    updateTimerDisplay();
}

function updateTimerDisplay() {
    let hours = Math.floor(timeLeft / 3600);
    let minutes = Math.floor((timeLeft % 3600) / 60);
    let seconds = timeLeft % 60;

    timer.innerHTML = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}