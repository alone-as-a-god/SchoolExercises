const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

////////////EXERCISE 1 //////////////

function clickSubmit(){
    username = document.getElementById('usernameInput').value;
    window.alert(username);
    
}
/////////////////////////////////////


///////// EXERCISE 2 ///////////////

function updateTime(){
    
    if(document.URL.includes("ex2.html")){
      date = new Date();
    year = date.getFullYear();
    month = date.getMonth();
    day = date.getDay()
    hour = date.getHours();
    minute = date.getMinutes();
    second = date.getSeconds();
    millisecond = date.getMilliseconds();
    prefix = "am";
    if(hour >= 12){
      prefix = "pm";
    }
    if(millisecond < 100){
      millisecond = "0"+ parseInt(millisecond);
    }else{
      millisecond = parseInt(millisecond);
    }
    if(second < 10){
      second = "0"+parseInt(second);
    }
    if(minute < 10){
      minute = "0"+parseInt(minute);
    }

    //window.alert(monthNames[month] + " " + day + "th " + year + " " + hour + ":" +minute + ":" + second + " " + prefix);
    document.getElementById("time").innerHTML = monthNames[month] + " " + day + "th " + year + " " + hour + ":" +minute + ":" + second + ":" + millisecond + " " + prefix;
    }
    
  }

window.setInterval(function(){
  updateTime();
}, 1);

//////////////////////////////////////////////////

////////////EXERCISE 3 ///////////////////////////

function changeColor(){
  color = document.getElementById("colorPicker").value;
  document.body.style.backgroundColor = color;
}

/////////////////////////

////////////EXERCISE 4 ////////////////

function clickSubmit2(){
  username = document.getElementById('usernameInput').value;
  
  if(document.getElementById("checkDoctor").checked){
    username = "Dr. " + username;
  }
  if(document.getElementById("checkProf").checked){
    username = "Prof. " + username;
  }
  if(document.getElementById("radioMale").checked){
    username = "Herr " + username;
  }else{
    username = "Frau " + username;
  }
  window.alert(username);
  
}

////////EXERCISE 5 ////////////////
var toCalculate = "";
function updateDisplay(){
  document.getElementById("display").value = toCalculate;
}


function addNr(number){
  number = parseInt(number);
  toCalculate = toCalculate +    + number;
  updateDisplay();
}

function addOperator(operator){
  toCalculate = toCalculate + operator;
  updateDisplay();
}

function calculate(){
  toCalculate = parseFloat(eval(toCalculate));
  updateDisplay();
}

function clearAll(){
  toCalculate = "";
  updateDisplay();
}

/////////////////////////////
var currentImage = "../styles/images/diluc.jpg"
///////EXERCISE 6///////////
function changeImg(){
  if(currentImage == "../styles/images/diluc.jpg"){
  document.getElementById("sourceImg").src="../styles/images/venti.jpg";
  currentImage = "../styles/images/venti.jpg"
}else{
  document.getElementById("sourceImg").src = "../styles/images/diluc.jpg"
  currentImage = "../styles/images/diluc.jpg"
}
}