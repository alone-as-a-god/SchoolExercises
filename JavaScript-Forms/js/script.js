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
    
    if(document.URL.includes("ex2")){
      date = new Date();
    year = date.getFullYear();
    month = date.getMonth();
    day = date.getDay() + 1;
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
    switch(day){
      case 1:
        formattedDay = "1st ";
        break;
      case 2:
        formattedDay = "2nd ";
        break;
      case 3: 
        formattedDay = "3rd ";
        break;
      default:
        formattedDay = day+"th ";
    }

    //window.alert(monthNames[month] + " " + day + "th " + year + " " + hour + ":" +minute + ":" + second + " " + prefix);
    document.getElementById("time").innerHTML = monthNames[month] + " " + formattedDay + year + " " + hour + ":" +minute + ":" + second + ":" + millisecond + " " + prefix;
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
///////EXERCISE 6///////////
var currentImage = "../styles/images/diluc.jpg"

function changeImg(){
  if(currentImage == "../styles/images/diluc.jpg"){
  document.getElementById("sourceImg").src="../styles/images/venti.jpg";
  currentImage = "../styles/images/venti.jpg"
}else{
  document.getElementById("sourceImg").src = "../styles/images/diluc.jpg"
  currentImage = "../styles/images/diluc.jpg"
}
}
/////////////////////////////

///////EXERCISE 7 ////////////
var isBold = false;
function editParagraph(){
  const elements = document.getElementsByClassName("par");
  for(let i = 0; i<elements.length; i++){
    if(isBold==false){
      elements[i].style.fontWeight = "bold";
    }else{
      elements[i].style.fontWeight = "normal";
    } 
  }
  isBold = !isBold;
}

//////////////////////////////

////////EXERCISE 8 ///////////
function openLink(link){
  window.open(link, "_self");
}

function openTab(link){
  window.open(link);
}

function openWindow(link){
  window.open(link, "_blank", "height=500,width=500");
}
////////////////////////////

////////EXERCISE 9 /////////

function clickSubmit3(){
  username = document.getElementById('usernameInput').value;
  setCookie("username",username,14);
  window.alert("added cookie" + username, 14);
  
}

function setCookie(cname, cvalue, exdays){
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires"+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function loadCookie(){
  window.alert(getCookie("username"));
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function changeGreeting(){
  cookie = getCookie("username");
  if(cookie!=null){
    document.getElementById("greeting").innerHTML = "Welcome back " + cookie;
  }
}



///////////////////////////

///////EXERCISE 10/////////

function getBrowserInformation(){
  browserName = navigator.userAgent;
  browserVersion = ''+parseFloat(navigator.appVersion);
  browserLanguage = navigator.language;
  window.alert(browserName + "  " + browserVersion + "  " + browserLanguage);
}

///////////////////////////

/////// ANGULAR CANCER /////////////
  (function () {

    var app = angular.module('sampleApp',['ngRoute']);
    
    app.config(function ($routeProvider){
        $routeProvider
            .when('/',{
                templateUrl:'../exercises/ex1.html'
            })
            .when('/ex2',{
                templateUrl:'../exercises/ex2.html'
            })
            .when('/ex3',{
                templateUrl:'../exercises/ex3.html'
            })
            .when('/ex4',{
              templateUrl:'../exercises/ex4.html'
            })  
            .when('/ex5',{
              templateUrl:'../exercises/ex5.html'
            })  
            .when('/ex6',{
              templateUrl:'../exercises/ex6.html'
            })  
            .when('/ex7',{
              templateUrl:'../exercises/ex7.html'
            })  
            .when('/ex8',{
              templateUrl:'../exercises/ex8.html'
            })  
            .when('/ex9',{
              templateUrl:'../exercises/ex9.html'
            })  
            .when('/ex10',{
              templateUrl:'../exercises/ex10.html'
            })  
            .otherwise({ redirectTo:'/'});
    });
  })();


