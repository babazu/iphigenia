import { rooms } from './rooms.js';
import { chats } from './chats.js';
import { hints } from './hints.js';
import { translations } from './translations.js';

const minimalScreenSize = 1200;
const idleBeforeLoweringPhoneInMs = 5001;
const defaultDelay = 1000;
const minimalDelayWithoutDots = 700;

let mouseX = 0;
let mouseY = 0;
let isThrottled = false;
let lastChatTimeout;
let clicks = 0;
let battery = 99;
let progress = ["start"];
let currentRoom = "room_start";
let currentChat = "chat_start";
let zoneAreaAlwaysVisible = false;
var idleTimer;

/******************************* DEBUG STARTING VALUES SET HERE *********************************** */
battery = 99;
progress = ["start"];

/*
    početak igre: room_start
    početak igre nakon spore spike: room_0_01 
    ispred prve sobe: room_0_14
    prva soba, početak: room_1_01
*/
currentRoom = "room_start";

/*     
    početak igre: chat_start
    Armida: chat_1_10
*/
currentChat = "chat_start";

zoneAreaAlwaysVisible = false; /* set to true to always see pink zones */

/*************************************************************************************************** */



document.addEventListener("DOMContentLoaded", init);

function init(){
    // show homepage
    document.getElementById("homepage").style.display = "block";
    document.getElementById("canvas").style.display = "none"; 

    screenManager.checkScreenSize();
    window.addEventListener("resize", screenManager.checkScreenSize);

    translationManager.setTranslations();
    document.getElementById("close-button-homepage").addEventListener("click", homepageManager.closeHomepage);
    document.getElementById("popupCloseGameOk").addEventListener("click", popupManager.closePopupCloseGame);
    
    var menuContinueDiv = document.getElementById('menuContinue');
    if (savedGameManager.existSavedGame()) {
        menuContinueDiv.classList.remove('hp_menu_disabled');
        menuContinueDiv.classList.add('hp_menu');
    } else {
        menuContinueDiv.classList.remove('hp_menu');
        menuContinueDiv.classList.add('hp_menu_disabled');
    }
    homepageManager.setHomepageMenus();

    document.addEventListener('keydown', keyboardManager.keyPressed);

    document.addEventListener('mousemove', function(event) {
        mouseX = event.clientX;
        mouseY = event.clientY;
    });

    // mjerenje idle
    document.addEventListener("mousemove", phoneManager.resetTimer);
    document.addEventListener("keypress", phoneManager.resetTimer);
    document.addEventListener("scroll", phoneManager.resetTimer);
    phoneManager.resetTimer();

    setTimeout(function() {popupManager.startFullScreenPopup();}, 4000);
}

function startHomepage(){
    //delete progress
    clearTimeout(lastChatTimeout);
    progress = ["start"];
    currentRoom = "room_start";
    currentChat = "chat_start";
    battery = 99;
    chatManager.removeChoices();
    chatManager.clearChatHistory();

    // show homepage
    document.getElementById("homepage").style.display = "block";
    document.getElementById("canvas").style.display = "none";    
}

function startGame(loadPosition) {
    if(loadPosition){
        savedGameManager.loadGame();
    }

    document.getElementById("homepage").style.display = "none";
    document.getElementById("canvas").style.display = "block";
    document.getElementById("phone-minimise-button").addEventListener("click", phoneManager.togglePhonePosition);
    document.getElementById("phone-button-wifi").addEventListener("click", roomManager.flashAreas);
    document.getElementById("close-button-canvas").addEventListener("click", homepageManager.returnToHomepage);
    window.addEventListener("resize", roomManager.setAreaCursors);
    document.getElementById('phone-minimise-button').addEventListener('mouseenter', () => {
        document.getElementById('tooltipTogglePhone').classList.add('visible');
    });
    document.getElementById('phone-minimise-button').addEventListener('mouseleave', () => {
        document.getElementById('tooltipTogglePhone').classList.remove('visible');
    });
    document.getElementById('phone-minimise-b').addEventListener('focus', () => {
        document.getElementById('phone-minimise-b').blur();
    });

    // slow fade in and start phone after 1 sec
    roomManager.setRoom(currentRoom);
    batteryManager.drawBattery();
    screenManager.canvasFadeIn();
    setTimeout(function() {
        chatManager.setChat(currentChat); 
    }, 2000);
}

var homepageManager = {
    setHomepageMenus: function(){
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
            startGame(false);
        });    
        document.getElementById("menuContinue").addEventListener("click", function() {
            startGame(true);
        });
        document.getElementById("menuHow").addEventListener("click", function() {
            document.getElementById("popupHowToPlay").style.display = "block";
            homepageManager.initialiseHowToPlayMovie();
        });
        document.getElementById("popupHowToPlayXButton").addEventListener("click", function() {
            document.getElementById("popupHowToPlay").style.display = "none";
        });
        document.getElementById("menuAbout").addEventListener("click", function() {
            document.getElementById("popupAbout").style.display = "block";
            homepageManager.initialiseHowToPlayMovie();
        });
        document.getElementById("popupAboutXButton").addEventListener("click", function() {
            document.getElementById("popupAbout").style.display = "none";
        });
    },
    returnToHomepage: function(){
        document.getElementById("popupAreYouSure").style.display = "block";
        document.getElementById("popupAreYouSureYes").addEventListener("click", popupManager.proceedCloseGame);
        document.getElementById("popupAreYouSureNo").addEventListener("click", popupManagercloseAreYouSure);
    },
    closeHomepage: function(){
        if (screenManager.isFullScreen()){
            screenManager.exitFullscreen();
        }
        document.getElementById("popupCloseGame").style.display = "block";
    },
    initialiseHowToPlayMovie: function(){
        const subtitlesDiv = document.getElementById("subtitles");
        const video = document.getElementById("howToVideo");
        
        const subtitles = [
          { start: 0, end: 7, text: "Klikom na zone istražuj i kreći se po prostoru." },
          { start: 7, end: 11, text: "Za kretanje unatrag nađi zonu pri dnu ekrana." },
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
};

var screenManager = {
    isFullScreen: function() {
        return (
            (document.fullscreenElement && document.fullscreenElement !== null) ||
            document.mozFullScreen ||
            document.webkitIsFullScreen ||
            document.msFullscreenElement
          );
    },
    exitFullscreen: function() {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
    },
    setFullScreen: function() {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) { // Firefox
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, Opera
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
            document.documentElement.msRequestFullscreen();
        }
        popupManager.closeFullScreenPopup();
    },
    checkScreenSize: function(){
        // Check minimal screen size
        if (window.innerWidth < minimalScreenSize) {
            document.getElementById("smallScreenOverlay").style.display = "block";
            document.getElementById("smallScreenOverlayPP").innerText = "Current width: " + window.innerWidth + "px";
        }else{
            document.getElementById("smallScreenOverlay").style.display = "none";

        }
    
        // Check ratio
        if (!screenManager.checkIsRatioValid()) {
            document.getElementById("invalidRatioOverlay").style.display = "block";
            document.getElementById("popupFullScreenYes2").addEventListener("click", screenManager.setFullScreen);
        }else{
            document.getElementById("invalidRatioOverlay").style.display = "none";
        }
    },
    checkIsRatioValid: function() {
        // jesmo na canvasu ili homepage
        let element = document.getElementById("canvas");
        if (element.style.display == "none"){
            element = document.getElementById("homepage");
        }
    
        const rect = element.getBoundingClientRect();
        const visibleWidth = Math.min(rect.right, window.innerWidth) - Math.max(rect.left, 0);
        const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
        let visibleRatio = (visibleWidth/visibleHeight).toFixed(2);
        let goodRatio = (1920/1080).toFixed(2);
        if (visibleRatio/goodRatio > 1.03){
            //odrezan je donji dio ekrana, pa se ne može igrati.
            return false;
        } else {
            return true;
        }
    },
    canvasFadeIn: function(){
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
};

var popupManager = {
    gameOver: function() {
        console.log("TODO gameOver");
    },
    proceedCloseGame: function() {
        popupManager.closeAreYouSure();
        startHomepage();
    },
    closeAreYouSure: function() {
        document.getElementById("popupAreYouSure").style.display = "none";
    },
    closePopupCloseGame: function() {
        document.getElementById("popupCloseGame").style.display = "none";
    },
    closeFullScreenPopup: function() {
        document.getElementById("popupFullScreen").style.display = "none";
    },
    startFullScreenPopup: function() {
        if (!screenManager.isFullScreen()){
            document.getElementById("popupFullScreen").style.display = "block";
            document.getElementById("popupFullScreenYes").addEventListener("click", screenManager.setFullScreen);
            document.getElementById("popupFullScreenNo").addEventListener("click", popupManager.closeFullScreenPopup);
        }
    }
};

var phoneManager = {
    raisePhoneIfLowered: function() {
        let upperPosition = "-16px";
        var phone = document.querySelector('.phone');
        const iconDown = document.querySelector("#icon-down");
        const iconUp = document.querySelector("#icon-up");
        if (!phone.style.bottom || phone.style.bottom !== upperPosition) {
            phone.style.bottom = upperPosition;
            iconDown.style.display = "block";
            iconUp.style.display = "none";
        } 
    },
    lowerPhoneIfRaised: function() {
        let bottomPosition = "-600px";
        var phone = document.querySelector('.phone');
        const iconDown = document.querySelector("#icon-down");
        const iconUp = document.querySelector("#icon-up");
        if (!phone.style.bottom || phone.style.bottom !== bottomPosition) {
            phone.style.bottom = bottomPosition;
            iconDown.style.display = "none";
            iconUp.style.display = "block";
        }
    },
    togglePhonePosition: function() {
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
    },
    resetTimer: function() {
        clearTimeout(idleTimer);
        idleTimer = setTimeout(phoneManager.lowerPhoneIfRaised, idleBeforeLoweringPhoneInMs);
    }
};

var roomManager = {
    setRoom: function(roomName, clearChoices){
        console.log("Entering room: ", roomName);
        
        currentRoom = roomName;
        savedGameManager.saveGame();
    
        if (clearChoices){
            chatManager.removeChoices();
        }
    
        // set background photo
        var canvas = document.getElementById("canvas");
        canvas.style.backgroundImage = `url('fotos/${rooms[roomName].image}')`;
    
        // set areas
        roomManager.createAreas(rooms[roomName].areas);
    
        // set cursors
        roomManager.setAreaCursors();
        
        clicks++;
        progressManager.checkHintSystem();
    },
    createAreas: function(areaDefinition){
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
            areaDiv.style.position = "absolute";
            areaDiv.style.top = o.top;
            areaDiv.style.left = o.left;
            areaDiv.style.width = o.width;
            areaDiv.style.height = o.height;
            if(zoneAreaAlwaysVisible){
                areaDiv.style.backgroundColor = "rgba(255, 5,241,0.3)";
            }
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
                                roomManager.setRoom(a.room, clearChoices);
                            });
                            break;
                        case "setChat":
                            areaDiv.addEventListener('click', function () {
                                chatManager.setChat(a.chat, clearChoices);
                            });
                            break;
                        case "setChatAndClearHistory":
                            areaDiv.addEventListener('click', function () {
                                chatManager.clearChatHistory();
                                chatManager.setChat(a.chat, clearChoices);
                            });
                            break;
                        case "animateWin":
                            areaDiv.addEventListener('click', function () {
                                animationManager.animateWin();
                            });
                            break;                      
                        case "animateLose":
                            areaDiv.addEventListener('click', function () {
                                animationManager.animateLose();
                            });
                            break; 
                        case "drainBattery":
                            areaDiv.addEventListener('click', function () {
                                batteryManager.drainBattery(a.amount);
                            });
                            break; 
                        case "clearProgress":
                            areaDiv.addEventListener('click', function () {
                                progressManager.clearProgress();
                            });
                            break; 
                        default:
                            break;
                    }
                });
            }
            canvas.appendChild(areaDiv);
        });
    },
    setAreaCursors: function(){
        const areas = document.getElementsByClassName("area");
        for (let i = 0; i < areas.length; i++) {
            roomManager.setCursorToArea(areas[i]);
        }
    },
    setCursorToArea: function(area){
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
            "back": "7vw",
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
            "back": { offsetX: vWidth / 2, offsetY: vWidth / 2},
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
    },
    flashAreas: function() {
        const areas = document.getElementsByClassName("area");
        for (let i = 0; i < areas.length; i++) {
            areas[i].style.transition = "background-color 1s ease-out";
            areas[i].style.backgroundColor = "rgba(255, 85, 241, 0.4)";
            setTimeout(function() {
                areas[i].style.transition = "background-color 4s ease-in";
                areas[i].style.backgroundColor = "transparent";
            }, 1500);
        }
    }
};

var chatManager = {
    setChat: function(chatName, clearChoices){
        console.log('Starting chat:', chatName);
    
        if (clearChoices){
            chatManager.removeChoices();
        }
    
        currentChat = chatName;
        savedGameManager.saveGame();
        phoneManager.raisePhoneIfLowered();
    
        // Kill active chat. If chat is unstopping, that mean it doesnt kill active chat.
        if (chats[chatName].unstopping == undefined || !chats[chatName].unstopping){
            clearTimeout(lastChatTimeout);
        }
        
        chatManager.runChat(chats[chatName].steps, 0);
    },
    addSpokenLine: function(role, newLine, dots){
        var messages = document.querySelector("#messages");
        chatManager.removeDots(messages);
        var li = document.createElement("li");
        li.classList.add(role);
        li.textContent = newLine.replace(/\[battery\]/gi, battery.toString());
        if(dots){
            li.setAttribute('data-dots', true)
        }
        messages.appendChild(li);
        setTimeout(function() {
            messages.scrollTop = messages.scrollHeight;
        }, 100);
    },
    addImageLine: function(role, url, w, h, dots){
        var messages = document.querySelector("#messages");
        chatManager.removeDots(messages);
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
    },
    removeChoices: function(){
        let choices = document.getElementById("choices");
        while (choices.firstChild){
            choices.removeChild(choices.firstChild);
        } 
    },
    addChoice: function(choice){
        var messages = document.querySelector("#messages");
        let choices = document.getElementById("choices");
        let newDiv = document.createElement("div");
        let newBtn = document.createElement("button");
        newBtn.innerHTML = choice.text;
        newBtn.onclick = function() {
            if (choice.text) { chatManager.addSpokenLine("player", choice.text); }
            if (choice.setProgress) { progressManager.setProgress(choice.setProgress); }
            if (choice.func) { eval(choice.func + "()"); }
            if (choice.drainBattery) { batteryManager.drainBattery(choice.drainBattery);}
            if (choice.chat) { eval("chatManager.setChat('" + choice.chat + "')"); chatManager.removeChoices(); }
            if (choice.room) { eval("roomManager.setRoom('" + choice.room + "',false)");}
            if (choice.removeChoices) { chatManager.removeChoices();}
          };
        newDiv.appendChild(newBtn);
        choices.appendChild(newDiv);
        setTimeout(function() {
            messages.scrollTop = messages.scrollHeight;
        }, 100);
    },
    writeLine: function(step) {
        switch (step.type) {
            case "playerLine":
                chatManager.addSpokenLine("player", step.line);
                break;
    
            case "eginaLine":
                chatManager.addSpokenLine("egina", step.line);
                break;
    
            case "playerImage":
                chatManager.addImageLine("player", step.url, step.w, step.h);
                break;
                
            case "eginaImage":
                chatManager.addImageLine("egina", step.url, step.w, step.h);
                break;
    
            case "choice":
                // Shows buttons
                for (var j = 0; j < step.choices.length; j++) {
                    chatManager.addChoice(step.choices[j]);
                }
                break;   
    
            case "rollNext":
                eval("chatManager.setChat('"+ step.chat +"')"); 
                chatManager.removeChoices();
                break;
    
            case "lowerPhone":
                setTimeout(() => {
                    phoneManager.lowerPhoneIfRaised();
                  }, step.delay);
                break;
            default:
                // nok
        }
    },
    promiseWriteLine: function(step) {
        chatManager.animateDots(step);
        let delay = step.delay ?? defaultDelay;
        //if (defaultDelay = 0){
        //    // If user ever keypressed Period (.), no delay
        //    delay = 0;
        //}
        return new Promise((resolve, reject) => {
            lastChatTimeout = setTimeout(() => {
                resolve(step);
            }, delay);
        });
    },
    runChat: function(steps, stepIndex) {
        if (stepIndex >= steps.length) {
            return;
        }
        chatManager.promiseWriteLine(steps[stepIndex]).then(data => {
            phoneManager.resetTimer();
            chatManager.writeLine(data);
            stepIndex++;
            chatManager.runChat(steps, stepIndex);
        });
    },
    animateDots: function(step){
        let delay = step.delay ?? defaultDelay;
        if (delay > minimalDelayWithoutDots){
            switch (step.type) {
                case "playerLine":
                case "playerImage":
                    chatManager.addImageLine("player", "graphic/dots.gif", 31, 8, true);
                    break;
                case "eginaLine":
                case "eginaImage":
                    chatManager.addImageLine("egina", "graphic/dots.gif", 31, 8, true);
                    break;
                default:
                    // nok
            }
        }
    },
    removeDots: function(messages) {
        var liDots = messages.querySelectorAll('li[data-dots]');
        liDots.forEach(function(liDot) {
            liDot.remove();
        });
    },
    clearChatHistory: function(){
        let chatHistory = document.getElementById("messages");
        while (chatHistory.firstChild){
            chatHistory.removeChild(chatHistory.firstChild);
        } 
    }
};

var keyboardManager = {
    keyPressed: function(event) {
        keyboardManager.throttle(() => {
            switch (event.keyCode) {
                case 32: // Spacebar
                phoneManager.togglePhonePosition();
                    break;
                //case 190: // Period (.)
                //   defaultDelay = 0; //ubrza chat
                //    break;    
                case 37: // Left arrow
                case 65: // A key
                    keyboardManager.moveWithKey("left");
                    break;
                case 38: // Up arrow
                case 87: // W key
                    keyboardManager.moveWithKey("up");
                    break;
                case 39: // Right arrow
                case 68: // D key
                    keyboardManager.moveWithKey("right");
                    break;
                case 40: // Down arrow
                case 83: // S key
                    keyboardManager.moveWithKey("back");
                    break;
                default:
                    break;
            }
        }, 200);
    },
    moveWithKey: function(icon){
        // ako postoji area čija ikona odgovara zadanoj, izvršim klik na taj area.
        const areas = document.getElementsByClassName("area");
        for (let i = 0; i < areas.length; i++) {
            if (areas[i].getAttribute('data-cursor') == icon){
                areas[i].click();
                break;
            }
        }
    },
    throttle: function(func, delay) {
        if (!isThrottled) {
          func();
          isThrottled = true;
      
          setTimeout(() => {
            isThrottled = false;
          }, delay);
        }
    }
};

var savedGameManager = {
    saveGame: function(){
        var savedPosition = {
            battery: battery,
            progress: progress,
            currentRoom: currentRoom,
            currentChat: currentChat
          };
    
        var encodedValue = btoa(JSON.stringify(savedPosition));
        //var encodedValue = JSON.stringify(savedPosition);
        localStorage.setItem("iphigenia_saved_game", encodedValue);
    },
    loadGame: function(){
        var savedPosition = localStorage.getItem("iphigenia_saved_game");
        var decodedValue = JSON.parse(atob(savedPosition));
        //var decodedValue = JSON.parse(savedPosition);
    
        battery = decodedValue.battery;
        progress = decodedValue.progress;
        currentRoom = decodedValue.currentRoom;
        currentChat = decodedValue.currentChat;
    },
    existSavedGame: function(){
        var savedPosition = localStorage.getItem("iphigenia_saved_game");
        return !!savedPosition;
    }
};

var batteryManager = {
    drainBattery: function(amount){
        battery -= amount;
        if (battery < 0){
            battery = 0;
        }
        
        batteryManager.setBatteryValue();
    
        const batteryIcon = document.getElementById("phone-button-battery");
        batteryIcon.innerHTML = "<i class='material-icons'>battery_alert</i>";
        batteryIcon.style.color = "red";
        document.getElementById("phone-button-battery-value").style.color = "red";
    
        setTimeout(() => {
            batteryIcon.style.color = "white";
            document.getElementById("phone-button-battery-value").style.color = "white";
            batteryManager.drawBattery();
        }, 3000);
        
        if (battery < 1){
            popupManager.gameOver();
        }
    },
    setBatteryValue: function(){
        const userLanguage = "hr"; //navigator.language || navigator.userLanguage;
        const selectedLanguage = translations[userLanguage] || translations.hr;
        const title = selectedLanguage.title;
        document.getElementById("tooltipBattery").textContent = selectedLanguage.tooltipBattery + battery + "%";
        document.getElementById("tooltipBattery2").textContent = selectedLanguage.tooltipBattery + battery + "%";
        document.getElementById("phone-button-battery-value").textContent = battery + "%";
    },
    drawBattery: function(){
        batteryManager.setBatteryValue();
    
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
};

var progressManager = {
    setProgress: function(progressKey){
        progress.push(progressKey);
        clicks = 0;
        console.log('setProgress',progress,clicks);
    },
    clearProgress: function(){
        progress = ["start"];
        clicks = 0;
        console.log('clearProgress',progress,clicks);
    },
    checkHintSystem: function(){
        for (let i = 0; i < hints.length; i++) {
            if (progress.includes(hints[i].progress) && clicks === hints[i].clicks) {
                chatManager.setChat(hints[i].chat, false);
                break;
            }
        }
    }
};

var animationManager = {
    animateWin: function(){
        var canvas = document.getElementById("canvas");
        const winAnimation = document.createElement("img");
        winAnimation.src = "graphic/heart-green.png";
        winAnimation.style.position = "absolute";
        winAnimation.style.opacity = 0;
        winAnimation.style.display = 'block';
        winAnimation.style.transform = 'translate(-50%, -80%)';
        winAnimation.style.animation = 'fadeEffect 2s ease-in-out';
        winAnimation.style.width = "15vw";
        winAnimation.style.top = (mouseY - winAnimation.offsetHeight / 2) + 'px';
        winAnimation.style.left = (mouseX - winAnimation.offsetWidth / 2) + 'px';
        winAnimation.style.zIndex = '10010';
        canvas.appendChild(winAnimation);
        setTimeout(function() {
            winAnimation.style.display = 'none';
        }, 2000);
    },
    animateLose: function(){
        var canvas = document.getElementById("canvas");
        const winAnimation = document.createElement("img");
        winAnimation.src = "graphic/thumb-down.png";
        winAnimation.style.position = "absolute";
        winAnimation.style.opacity = 0;
        winAnimation.style.display = 'block';
        winAnimation.style.transform = 'translate(-50%, -80%)';
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
};

var translationManager = {
    setTranslations: function(){
        const userLanguage = "hr"; //navigator.language || navigator.userLanguage;
     
        const selectedLanguage = translations[userLanguage] || translations.hr;
    
        document.getElementById("phone-title").textContent = selectedLanguage.phoneTitle;
        document.getElementById("tooltipTitle").textContent = selectedLanguage.tooltipPhoneTitle;
        document.getElementById("tooltipTogglePhone").textContent = selectedLanguage.togglePhone;
        document.getElementById("tooltipAlarm").textContent = selectedLanguage.tooltipAlarm;
        document.getElementById("tooltipWifi").textContent = selectedLanguage.tooltipWifi;
        document.getElementById("tooltipSignal").textContent = selectedLanguage.tooltipSignal;
        document.getElementById("tooltipBattery").textContent = selectedLanguage.tooltipBattery + battery + "%";
        document.getElementById("tooltipBattery2").textContent = selectedLanguage.tooltipBattery + battery + "%";
        document.getElementById("smallScreenOverlayP").textContent = selectedLanguage.smallScreenCaption + minimalScreenSize + "px.";
        document.getElementById("invalidRatioOverlayP").textContent = selectedLanguage.invalidRatioCaption;
    }
};







     