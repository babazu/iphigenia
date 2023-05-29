import { rooms } from './rooms.js';
import { chats } from './chats.js';
import { translations } from './translations.js';

var mouseX = 0;
var mouseY = 0;
const minimalScreenSize = 1200;
var defaultDelay = 1000;
var minimalDelayWithoutDots = 700;
var lastChatTimeout;
var battery = 99;
var progress = ["start"];

document.addEventListener("DOMContentLoaded", function() {
    startHomepage();
});

document.addEventListener('mousemove', function(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

function startHomepage(){
    document.getElementById("homepage").style.display = "block";
    document.getElementById("canvas").style.display = "none";    
    
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    setTranslations();
    setHomepageMenus();  
    setTimeout(function() {startFullScreenPopup();}, 1000);
}

function startRoomAndPhone() {
    document.getElementById("homepage").style.display = "none";
    document.getElementById("canvas").style.display = "block";

    setRoom("room_start");  /* ZA DEBUG OVDJE SETAJ POČETNU SOBU. 
                                početak igre: room_start
                                početak igre: room_0_01 
                                ispred prve sobe:    room_0_14
                                prva soba: room_1_01
                            */
    
    // slow fade in and start phone after 1 sec
    canvasFadeIn();
    setTimeout(function() {
      setChat(chats["chat_0_01"]); /* ZA DEBUG OVDJE SETAJ POČETNI CHAT. 
                                        početak igre: chat_0_01
                                        Armida: chat_1_10
                                    */
    }, 2000);
    
    document.getElementById("phone-minimise-button").addEventListener("click", togglePhonePosition);
    document.getElementById("phone-button-wifi").addEventListener("click", flashAreas);
    document.getElementById("close-button").addEventListener("click", closeGame);
    window.addEventListener("resize", setAreaCursors);
    window.addEventListener("resize", checkFullSCreen);
    drawBattery();
    setTimeout(function() {setFullscreenButton();},500);
}

function setTranslations(){
    const userLanguage = "hr"; //navigator.language || navigator.userLanguage;
 
    const selectedLanguage = translations[userLanguage] || translations.hr;
    const title = selectedLanguage.title;

    document.getElementById("phone-title").textContent = selectedLanguage.phoneTitle;
    document.getElementById("tooltipTitle").textContent = selectedLanguage.tooltipPhoneTitle;
    document.getElementById("tooltipFullscreen").textContent = selectedLanguage.tooltipFullscreen;
    document.getElementById("tooltipAlarm").textContent = selectedLanguage.tooltipAlarm;
    document.getElementById("tooltipWifi").textContent = selectedLanguage.tooltipWifi;
    document.getElementById("tooltipSignal").textContent = selectedLanguage.tooltipSignal;
    document.getElementById("tooltipBattery").textContent = selectedLanguage.tooltipBattery + battery + "%";
    document.getElementById("tooltipBattery2").textContent = selectedLanguage.tooltipBattery + battery + "%";
    document.getElementById("smallScreenOverlayP").textContent = selectedLanguage.smallScreenCaption + minimalScreenSize + "px.";
}

function closeGame(){
    document.getElementById("popupAreYouSure").style.display = "block";
    document.getElementById("popupAreYouSureYes").addEventListener("click", proceedCloseGame);
    document.getElementById("popupAreYouSureNo").addEventListener("click", closeAreYouSure);
}

function closeAreYouSure() {
    document.getElementById("popupAreYouSure").style.display = "none";
}
function proceedCloseGame() {
    closeAreYouSure();
    startHomepage();
}

function startFullScreenPopup(){
    if (!isFullScreen()){
        document.getElementById("popupFullScreen").style.display = "block";
        document.getElementById("popupFullScreenYes").addEventListener("click", setFullScreen);
        document.getElementById("popupFullScreenNo").addEventListener("click", closeFullScreenPopup);
    }
}

function closeFullScreenPopup() {
    document.getElementById("popupFullScreen").style.display = "none";
}

function setFullScreen() {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) { // Firefox
        document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, Opera
        document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
        document.documentElement.msRequestFullscreen();
    }
    closeFullScreenPopup();
}

function isFullScreen() {
    return !window.screenTop && !window.screenY;
}

  function checkFullSCreen(){
    var fullscreenButton = document.getElementById("phone-button-fullscreen");
    if (isFullScreen()) {
        fullscreenButton.style.display = "none";
    } else {
        fullscreenButton.style.display = "block";
    }
}

function setFullscreenButton(){
    checkFullSCreen();
    var fullscreenButton = document.getElementById("phone-button-fullscreen");
    fullscreenButton.addEventListener("click", function() {
        if (!isFullScreen()) {
            setFullScreen();
        }
        checkFullSCreen();
    });
}

function gameOver(){
    console.log("TODO gameOver");
}

function setHomepageMenus(){
    const cursorImg = document.createElement("img");
    cursorImg.src = "graphic/arrow-menu.png";
    cursorImg.style.position = "absolute";
    cursorImg.style.pointerEvents = "none";
    cursorImg.style.display = 'none';

    const menuElements = document.getElementsByClassName("hp_menu");

    for (let i = 0; i < menuElements.length; i++) {
        menuElements[i].appendChild(cursorImg);

        menuElements[i].addEventListener("mousemove", (event) => {
            cursorImg.style.left = `${event.clientX-cursorImg.width}px`;
            cursorImg.style.top = `${event.clientY-(cursorImg.height/2)}px`;
        });

        menuElements[i].addEventListener("mouseout", () => {
            cursorImg.style.display = "none";
        });

        menuElements[i].addEventListener("mouseover", () => {
            cursorImg.style.display = "block";
        });

        menuElements[i].style.cursor = "none";
    }

    // event listeners
    document.getElementById("menuNew").addEventListener("click", function() {
        startRoomAndPhone();
    });
    document.getElementById("menuHow").addEventListener("click", function() {
        document.getElementById("popupHowToPlay").style.display = "block";
        initialiseHowToPlayMovie();
    });
    document.getElementById("popupHowToPlayXButton").addEventListener("click", function() {
        document.getElementById("popupHowToPlay").style.display = "none";
    });
    document.getElementById("menuAbout").addEventListener("click", function() {
        document.getElementById("popupAbout").style.display = "block";
        initialiseHowToPlayMovie();
    });
    document.getElementById("popupAboutXButton").addEventListener("click", function() {
        document.getElementById("popupAbout").style.display = "none";
    });
}

function raisePhoneIfLowered(){
    let upperPosition = "-16px";
    var phone = document.querySelector('.phone');
    const iconDown = document.querySelector("#icon-down");
    const iconUp = document.querySelector("#icon-up");
    if (!phone.style.bottom || phone.style.bottom !== upperPosition) {
        phone.style.bottom = upperPosition;
        iconDown.style.display = "block";
        iconUp.style.display = "none";
    } 
}

function togglePhonePosition() {
    let upperPosition = "-16px";
    let bottomPosition = "-600px";
    var phone = document.querySelector('.phone');
    const iconDown = document.querySelector("#icon-down");
    const iconUp = document.querySelector("#icon-up");
    if (!phone.style.bottom || phone.style.bottom !== bottomPosition) {
        phone.style.bottom = bottomPosition;
        iconDown.style.display = "none";
        iconUp.style.display = "block";
    } else {
        phone.style.bottom = upperPosition;
        iconDown.style.display = "block";
        iconUp.style.display = "none";
    }
}

function removeDots(messages){
    var liDots = messages.querySelectorAll('li[data-dots]');
    liDots.forEach(function(liDots) {
        liDots.remove();
    });
}

function addSpokenLine(role, newLine, dots){
    var messages = document.querySelector("#messages");
    removeDots(messages);
    var li = document.createElement("li");
    li.classList.add(role);
    li.textContent = newLine;
    if(dots){
        li.setAttribute('data-dots', true)
    }
    messages.appendChild(li);
    setTimeout(function() {
        messages.scrollTop = messages.scrollHeight;
    }, 100);
}

function addImageLine(role, url, w, h, dots){
    var messages = document.querySelector("#messages");
    removeDots(messages);
    var li = document.createElement("li");
    li.classList.add(role);
    li.innerHTML = "<img src='" + url + "' width='" + w + "' height='" + h + "' draggable='false'>";
    if(dots){
        li.setAttribute('data-dots', true)
    }
    messages.appendChild(li);
    setTimeout(function() {
        messages.scrollTop = messages.scrollHeight;
    }, 100);
}

function removeChoices(){
    let choices = document.getElementById("choices");
    while (choices.firstChild){
        choices.removeChild(choices.firstChild);
    } 
}

function addChoice(choice){
    var messages = document.querySelector("#messages");
    let choices = document.getElementById("choices");
    let newDiv = document.createElement("div");
    let newBtn = document.createElement("button");
    newBtn.innerHTML = choice.text;
    newBtn.onclick = function() {
        if (choice.text) { addSpokenLine("player", choice.text); }
        if (choice.setProgress) { progress.push(choice.setProgress); }
        if (choice.func) { eval(choice.func + "()"); }
        if (choice.drainBattery) { drainBattery(choice.drainBattery);}
        if (choice.next) { eval(choice.next + "(chats['" + choice.chat + "'])"); removeChoices(); } //next je očito UVIJEK SetChat, inače ću morati refaktorirati
        if (choice.room) { eval ("setRoom('" + choice.room + "',false)")}
      };
    newDiv.appendChild(newBtn);
    choices.appendChild(newDiv);
    setTimeout(function() {
        messages.scrollTop = messages.scrollHeight;
    }, 100);
}

function writeLine(step) {
    switch (step.type) {
        case "playerLine":
            addSpokenLine("player", step.line);
            break;

        case "eginaLine":
            addSpokenLine("egina", step.line);
            break;

        case "playerImage":
            addImageLine("player", step.url, step.w, step.h);
            break;
            
        case "eginaImage":
            addImageLine("egina", step.url, step.w, step.h);
            break;

        case "choice":
            // Shows buttons
            for (var j = 0; j < step.choices.length; j++) {
                addChoice(step.choices[j]);
            }
            break;   

        case "rollNext":
            // Execute funtion in 'next' field
            eval(step.next + "(chats['" + step.chat + "'])"); 
            removeChoices(); //next je očito UVIJEK SetChat, inače ću morati refaktorirati
            break;

        default:
            // nok
    }
}

function createAreas(areaDefinition){
    const canvas = document.getElementById("canvas");

    // remove areas exists
    var oldAreas = canvas.querySelectorAll(".area");
    oldAreas.forEach(function(element) {
        element.remove();
    });

    // add new areas
    areaDefinition.forEach(o => {

        // if requisite parameter exists, I must check it's value
        if (o.requisite && !progress.includes(o.requisite)) {
            return;
        }

        const areaDiv = document.createElement("div");
        areaDiv.id = `area${o.areaId}`;
        areaDiv.style.position = "absolute";
        areaDiv.style.top = o.top;
        areaDiv.style.left = o.left;
        areaDiv.style.width = o.width;
        areaDiv.style.height = o.height;
        areaDiv.setAttribute("data-cursor", o.cursor);
        areaDiv.classList.add("area");
        
        // area click action
        if (o.actions){
            o.actions.forEach(function(a) {
                let clearChoices = false;
                if (a.clearChoices !== undefined){
                    clearChoices = a.clearChoices;
                }

                switch (a.action) {
                    case "setRoom":
                        areaDiv.addEventListener('click', function () {
                            setRoom(a.room, clearChoices);
                        });
                        break;
                    case "setChat":
                        areaDiv.addEventListener('click', function () {
                            setChat(chats[a.chat], clearChoices);
                        });
                        break;
                    case "setChatAndClearHistory":
                        areaDiv.addEventListener('click', function () {
                            clearChatHistory();
                            setChat(chats[a.chat], clearChoices);
                        });
                        break;
                    case "animateWin":
                        areaDiv.addEventListener('click', function () {
                            animateWin();
                        });
                        break;                      
                    case "animateLose":
                        areaDiv.addEventListener('click', function () {
                            animateLose();
                        });
                        break; 
                    case "drainBattery":
                        areaDiv.addEventListener('click', function () {
                            drainBattery(a.amount);
                        });
                        break; 
                    default:
                        break;
                }
            });
        }

        canvas.appendChild(areaDiv);
    });
}

function promiseWriteLine(step) {

    animateDots(step);

    let delay = step.delay ?? defaultDelay;
    return new Promise((resolve, reject) => {
        lastChatTimeout = setTimeout(() => {
            resolve(step);
        }, delay);
    });
}

function runChat(steps, stepIndex) {
    if (stepIndex >= steps.length) {
        return;
    }

    promiseWriteLine(steps[stepIndex]).then(data => {
        writeLine(data);
        stepIndex++;
        runChat(steps, stepIndex);
    });
}

function animateDots(step){
    let delay = step.delay ?? defaultDelay;
    if (delay > minimalDelayWithoutDots){
        switch (step.type) {
            case "playerLine":
            case "playerImage":
                addImageLine("player", "graphic/dots.gif", 31, 8, true);
                break;
            case "eginaLine":
            case "eginaImage":
                addImageLine("egina", "graphic/dots.gif", 31, 8, true);
                break;
            default:
                // nok
        }
    }
}

function setChat(chat, clearChoices){
    if (clearChoices){
        removeChoices();
    }

    raisePhoneIfLowered();

    // Kill active chat. If chat is unstopping, that mean it doesnt kill active chat.
    if (!chat.unstopping){
        clearTimeout(lastChatTimeout);
    }
    
    runChat(chat.steps, 0);
}

function clearChatHistory(){
    let chatHistory = document.getElementById("messages");
    while (chatHistory.firstChild){
        chatHistory.removeChild(chatHistory.firstChild);
    } 
}

function setAreaCursors(){
    const areas = document.getElementsByClassName("area");
    for (let i = 0; i < areas.length; i++) {
        setCursorToArea(areas[i]);
    }
}

function setCursorToArea(area){
    //Remove cursors if exists
    while (area.firstChild) {
        area.removeChild(area.firstChild);
    }
    
    // Define cursor
    var cursorIcons = {
        "hand": "arrow-hand",
        "up": "arrow-up",
        "back": "arrow-back",
        "left": "arrow-left",
        "right": "arrow-right",
        "disabled": "arrow-disabled"
    };
    let icon = cursorIcons[area.getAttribute("data-cursor")] || "arrow-hand";

    const cursorImg = document.createElement("img");
    cursorImg.src = `graphic/${icon}.png`;
    cursorImg.style.position = "absolute";
    cursorImg.style.pointerEvents = "none";
    cursorImg.style.display = 'none';
    area.appendChild(cursorImg);

    // Adapt cursor size to page size
    var cursorSize = {
        "hand": "6vw",
        "up": "6vw",
        "back": "6vw",
        "left": "12vw",
        "right": "12vw",
        "disabled": "12vw"
    };
    cursorImg.style.width = cursorSize[area.getAttribute("data-cursor")];
    //cursorImg.style.width = "6vw";
    var vWidth = parseFloat(getComputedStyle(cursorImg).width);
 
    // After image initialisation set offsets based on cursor type
    let offsetX = 0;
    let offsetY = 0;
    var cursorOffsets = {
        "hand": { offsetX: vWidth / 4, offsetY: 0, },
        "up": { offsetX: vWidth / 2, offsetY: 0 },
        "back": { offsetX: vWidth / 2, offsetY: 0 },
        "left": { offsetX: 0, offsetY: vWidth / 3.2 },
        "right": { offsetX: vWidth, offsetY: vWidth / 3.2 },
        "disabled": { offsetX: vWidth / 2, offsetY: vWidth / 2 }
    };
    var cursorAttr = cursorOffsets[area.getAttribute("data-cursor")] || {};
    offsetX = cursorAttr.offsetX || offsetX;
    offsetY = cursorAttr.offsetY || offsetY;

    area.addEventListener("mousemove", (event) => {
        cursorImg.style.left = `${event.offsetX - offsetX}px`;
        cursorImg.style.top = `${event.offsetY - offsetY}px`;
    });

    area.addEventListener('mouseout', () => {
        cursorImg.style.display = 'none';
    });

    area.addEventListener('mouseover', () => {
        cursorImg.style.display = 'block';
    });

    area.style.cursor = "none";
}

function flashAreas() {
    const areas = document.getElementsByClassName("area");
    for (let i = 0; i < areas.length; i++) {
        areas[i].style.transition = "background-color 1s ease-out";
        areas[i].style.backgroundColor = "rgba(255, 85, 241, 0.4)";//"rgba(255, 85, 241, 0.3)";//"rgba(255, 85, 241, 0.3)";
        setTimeout(function() {
            areas[i].style.transition = "background-color 4s ease-in";
            areas[i].style.backgroundColor = "transparent";
        }, 1500);
    }
}

function setRoom(roomName, clearChoices){
    console.log("Entering room: ",roomName);
    
    if (clearChoices){
        removeChoices();
    }

    // set background photo
    var canvas = document.getElementById("canvas");
    canvas.style.backgroundImage = `url('fotos/${rooms[roomName].image}')`;

    // set areas
    createAreas(rooms[roomName].areas);

    // set cursors
    setAreaCursors();
}

function animateWin(){
    var canvas = document.getElementById("canvas");
    const winAnimation = document.createElement("img");
    winAnimation.src = "graphic/heart-green.png";
    winAnimation.style.position = "absolute";
    winAnimation.style.opacity = 0;
    winAnimation.style.display = 'block';
    winAnimation.style.transform = 'translate(-50%, -50%)';
    winAnimation.style.animation = 'fadeEffect 2s ease-in-out';
    winAnimation.style.width = "15vw";
    winAnimation.style.top = (mouseY - winAnimation.offsetHeight / 2) + 'px';
    winAnimation.style.left = (mouseX - winAnimation.offsetWidth / 2) + 'px';
    winAnimation.style.zIndex = '10010';
    canvas.appendChild(winAnimation);
    setTimeout(function() {
        winAnimation.style.display = 'none';
    }, 2000);
}

function animateLose(){
    var canvas = document.getElementById("canvas");
    const winAnimation = document.createElement("img");
    winAnimation.src = "graphic/thumb-down.png";
    winAnimation.style.position = "absolute";
    winAnimation.style.opacity = 0;
    winAnimation.style.display = 'block';
    winAnimation.style.transform = 'translate(-50%, -50%)';
    winAnimation.style.animation = 'fadeEffect 1s ease-in-out';
    winAnimation.style.width = "10vw";
    winAnimation.style.top = (mouseY - winAnimation.offsetHeight / 2) + 'px';
    winAnimation.style.left = (mouseX - winAnimation.offsetWidth / 2) + 'px';
    winAnimation.style.zIndex = '10010';
    canvas.appendChild(winAnimation);
    setTimeout(function() {
        winAnimation.style.display = 'none';
    }, 1000);
}

function drainBattery(amount){
    battery -= amount;
    drawBattery();
    if (battery < 1){
        gameOver();
    }
}

function drawBattery(){
    
    //set label
    const userLanguage = "hr"; //navigator.language || navigator.userLanguage;
    const selectedLanguage = translations[userLanguage] || translations.hr;
    const title = selectedLanguage.title;
    document.getElementById("tooltipBattery").textContent = selectedLanguage.tooltipBattery + battery + "%";
    document.getElementById("tooltipBattery2").textContent = selectedLanguage.tooltipBattery + battery + "%";
    document.getElementById("phone-button-battery-value").textContent = battery + "%";

    // set battery image
    const phoneButtonBattery = document.getElementById("phone-button-battery");
    if (battery > 95){
        phoneButtonBattery.innerHTML = "<i class='material-icons'>battery_full</i>";
    } else if (battery > 85){
        phoneButtonBattery.innerHTML = "<i class='material-icons'>battery_6_bar</i>";
    } else if (battery > 70){
        phoneButtonBattery.innerHTML = "<i class='material-icons'>battery_5_bar</i>";
    } else if (battery > 65){
        phoneButtonBattery.innerHTML = "<i class='material-icons'>battery_4_bar</i>";
    } else if (battery > 49){
        phoneButtonBattery.innerHTML = "<i class='material-icons'>battery_3_bar</i>";
    } else if (battery > 30){
        phoneButtonBattery.innerHTML = "<i class='material-icons'>battery_2_bar</i>";
    } else if (battery > 9){
        phoneButtonBattery.innerHTML = "<i class='material-icons'>battery_1_bar</i>";
    } else if (battery > 3){
        phoneButtonBattery.innerHTML = "<i class='material-icons'>battery_0_bar</i>";
    } else {
        phoneButtonBattery.innerHTML = "<i class='material-icons'>battery_alert</i>";
    }
}

function checkScreenSize(){
    if (window.innerWidth < minimalScreenSize) {
        document.getElementById("smallScreenOverlay").style.display = "block";
    }else{
        document.getElementById("smallScreenOverlay").style.display = "none";
    }
}

function canvasFadeIn(){
    const canvas = document.getElementById('canvas');
    let opacity = 0;

    const fadeInInterval = setInterval(() => {
      opacity += 0.01;
      canvas.style.opacity = opacity;

      if (opacity >= 1) {
        clearInterval(fadeInInterval);
      }
    }, 20);
}

function initialiseHowToPlayMovie(){
    const subtitlesDiv = document.getElementById("subtitles");
    const video = document.getElementById("howToVideo");
    
    const subtitles = [
      { start: 0, end: 7, text: "Klikom na zone istražuj i kreći se po prostoru." },
      { start: 7, end: 11, text: "Za kretanje unatrag nađi zonu pri dnu stranice." },
      { start: 11, end: 16, text: "Simbol Wi-Fi na mobitelu će ti otkriti koje zone na ekranu se mogu kliknuti." },
      { start: 16, end: 21, text: "Na mobitelu prati priču." },
      { start: 21, end: 24, text: "Mobitel možeš spustiti i podići." },
      { start: 24, end: 28, text: "Neki dijalozi će od tebe očekivati odluku, tad na mobitelu izaberi jednu od ponuđenih opcija." },
      { start: 28, end: 31, text: "Istraži ostale tajne koje igra skriva." },
      { start: 31, end: 45, text: "Sretno!" },
    ];
    
    video.play();

    video.addEventListener("timeupdate", function() {
      const currentTime = video.currentTime;
      
      // Find the appropriate subtitle based on the current time
      const currentSubtitle = subtitles.find(subtitle => subtitle.start <= currentTime && subtitle.end >= currentTime);
      
      // Update the subtitle text
      if (currentSubtitle) {
        subtitlesDiv.textContent = currentSubtitle.text;
      } else {
        subtitlesDiv.textContent = "";
      }
    });
}
