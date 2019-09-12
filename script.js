//World Clock API consumption
var apiData;
var currentDate;
var currentTime;


function apiCall() {
  var request = new XMLHttpRequest();
  
  request.open('GET', 'http://worldclockapi.com/api/json/est/now', true);
  
  request.onload = function () {
    var data = JSON.parse(this.response);
    
    apiData = data.currentDateTime;
    //original data format "2019-08-12T13:38-04:00"
    //currentDate = apiData.slice(0, 10); //"2019-08-12"
    currentTime = apiData.slice(11, 16);//"13:38"
    
  };
  
  request.send();
}

apiCall();


//Grabbed html elements
const quoteDisplay = document.getElementById('quoteDisplay');
const quoteButton = document.querySelector('#quoteButton');
quoteButton.addEventListener('click', newQuote);
const div = document.querySelector('.two');

var quotesArray = [
/*0*/'Cuando digo que te amo, digo que en ti reconozco algo que siento en mí también y que ver el mundo contigo me hace más feliz. Cuando nos cueste, recuerda que contigo yo lo voy a querer seguir intentando siempre, y cuando nos salga muy simple, no olvides que fue porque no nos rendimos antes... porque la magia está en el intento. Gracias por ser real para mí <3 :)'];



function newQuote() {
  /*this is to show random quotes in case I want to later.
  let quoteNumb = Math.floor(Math.random() * 3);
  quoteDisplay.textContent = quotes[quoteNumb];*/
  
  /*if (currentDate blablabla || bla) {
    quoteSelection(quotesArray);
  } else {
    videoSelection(videoArray);
  }*/
  quoteSelection();
  
  
}



//create video element
var video = document.createElement('video');
video.setAttribute('width', '100%');
video.setAttribute('height', 'auto');
video.controls = true;

var sourceMP4 = document.createElement('source');
sourceMP4.type = "video/mp4";
sourceMP4.src = "para_jacque.mp4";
video.appendChild(sourceMP4);



function newPhrase(array_to_read) {
  array_to_read = quotesArray;
  quoteDisplay.textContent = array_to_read[0];
}


//conditional logic
function quoteSelection(quote) {
  
  
  //formatting - currentDate "2019-08-12" currentTime "13:38"
  switch (true) {
    /*case "2019-8-12" || "2019-08-12":
    quoteDisplay.textContent = quotes[0];
    break;*/
    case currentTime >= "22:00":
    visualization.appendChild(video);
    var paragraphDiv = document.querySelector('.phrase-button-container');
    var paragraphButton = document.createElement('button');
    paragraphButton.classList.add('btn', 'btn-warning');
    paragraphButton.textContent = "Házme clic después de ver el video";
    paragraphDiv.appendChild(paragraphButton);
    paragraphButton.addEventListener('click', newPhrase);
    
    /*break;
    case "2019-08-14":
    quoteDisplay.textContent = quotes[1];
    break;
    case "2019-08-15":
      //para agregar video al DOM y recargarlo
      videoDisplay.setAttribute('src', videoArray[1]);
      video.appendChild(videoDisplay)
      visualization.appendChild(video);
      
    break;
    case "2019-08-18":
    quoteDisplay.textContent = quotes[4];
    break;
    case "2019-08-17":
    quoteDisplay.textContent = quotes[5];
    break;
    case "2019-08-18":
    quoteDisplay.textContent = quotes[6];
    break;
    case "2019-08-19":
    quoteDisplay.textContent = quotes[7];
    break;
    case "2019-08-20":
    quoteDisplay.textContent = quotes[8];
    break;
    case "2019-08-21":
    quoteDisplay.textContent = quotes[9];
    break;
    case "2019-08-22":
    quoteDisplay.textContent = quotes[10];
    break;
    case "2019-08-23":
    quoteDisplay.textContent = quotes[11];
    break;
    case "2019-08-24":
    quoteDisplay.textContent = quotes[12];
    break;
    case "2019-08-25":
    quoteDisplay.textContent = quotes[13];
    break;
    case "2019-08-26":
    quoteDisplay.textContent = quotes[14];
    break;
    case "2019-08-27":
    quoteDisplay.textContent = quotes[15];
    break;
    case "2019-08-28":
    quoteDisplay.textContent = quotes[16];
    break;
    case "2019-08-29":
    quoteDisplay.textContent = quotes[17];
    break;
    case "2019-08-30":
    quoteDisplay.textContent = quotes[18];
    break;
    case "2019-09-01" || "2019-09-1":
    quoteDisplay.textContent = quotes[19];
    break;
    case "2019-08-02" || "2019-08-2":
    quoteDisplay.textContent = quotes[20];
    break;
    case "2019-08-03" || "2019-08-3":
    quoteDisplay.textContent = quotes[21];
    break;
    case "2019-08-04" || "2019-08-4":
    quoteDisplay.textContent = quotes[22];
    break;*/
  }
  
  //Code by Keny Zachelin (I just borrowed it because it's got a nice look)
  var text = quoteDisplay;
  var newDom = '';
  var animationDelay = 6;
  
  
    for (let i = 0; i < text.innerText.length; i++) {
      newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i]) + '</span>';
    }
    
    text.innerHTML = newDom;
    var length = text.children.length;
    
    for (let i = 0; i < length; i++) {
      text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
    }
  }


/////////////////////////////////////

