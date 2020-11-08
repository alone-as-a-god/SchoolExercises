const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];                                                                              //works like enum in c, jus translates numbers to the corresponding month, needed later to display time and date

////////////EXERCISE 1 //////////////

function clickSubmit(){                                                     
    username = document.getElementById('usernameInput').value;                  //reads the input in the "usernameInput" field
    window.alert(username);
    
}
/////////////////////////////////////


///////// EXERCISE 2 ///////////////

function updateTime(){
    
    if(document.URL.includes("ex2")){                                         //Since my page is basically always the same, thanks to the angular routes stuff (coming later) it checks if the user is currently on the correct tab for this exercise
        date = new Date();
        year = date.getFullYear();
        month = date.getMonth();
        day = date.getDay() + 1;
        hour = date.getHours();
        minute = date.getMinutes();
        second = date.getSeconds();
        millisecond = date.getMilliseconds();
        prefix = "am";  
        if(hour >= 12){                                                 //The following is just formatting, like am/pm month names etc
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

window.setInterval(function(){      //The updateTime function gets called every 1ms
  updateTime();
}, 1);

//////////////////////////////////////////////////

////////////EXERCISE 3 ///////////////////////////

function changeColor(){                                     //Changes sites background color to the color specified in the picker
  alpha = document.getElementById("alpha").value;
  color = adjustHexOpacity(document.getElementById("colorPicker").value, alpha);
  color2 = adjustHexOpacity(document.getElementById("colorPicker2").value, alpha);
  document.body.style.background = "linear-gradient("+color+", "+color2+"), url(../styles/images/office.jpg) no-repeat top center";
}

function adjustHexOpacity (color, opacity) {        //Formates the color to add opacity (otherwise the background image would be invisible)
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);
  return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + opacity + ')';
}


/////////////////////////

////////////EXERCISE 4 ////////////////

function clickSubmit2(){
  username = document.getElementById('usernameInput').value;
  
  if(document.getElementById("checkDoctor").checked){   //If the corresponding checkboxes/radioboxes are checked it adds these titles
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
  toCalculate = toCalculate + number;   //Adds the entered number to the end of previous number, therefore it is not an addition 
  updateDisplay();
}

function addOperator(operator){
  toCalculate = toCalculate + operator;
  updateDisplay();
}

function calculate(){
  toCalculate = parseFloat(eval(toCalculate));    //eval evaluates the expression entered into the input field 
  updateDisplay();
}

function clearAll(){
  toCalculate = "";
  updateDisplay();
}

/////////////////////////////
///////EXERCISE 6///////////
var currentImage = "../styles/images/diluc.jpg"

function changeImg(){                                           //Always swaps between these two pictures, could be increased to more pictures by just using an array, didnt deem it neccessary
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
var isBold = false;                                         //Boldifies the text
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
function openLink(link){            //Opens link in current tab
  window.open(link, "_self");
}

function openTab(link){             //Opens link in new tab
  window.open(link);
}

function openWindow(link){
  window.open(link, "_blank", "height=900,width=1600");       //Opens link in new window, it is neccessary to give a height and width 
}
////////////////////////////

////////EXERCISE 9 /////////

function clickSubmit3(){                                      
  username = document.getElementById('usernameInput').value;
  setCookie("username",username,14);          //Adds cookie with the name that was just entered, expires after 14 days
  //window.alert("added cookie" + username, 14);
  
}

function setCookie(cname, cvalue, exdays){            //function copied from my other project, creates a cookie with the values specified
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));          //multiplies exdays by A LOT so it's a duration in days
  var expires = "expires"+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function loadCookie(){
  window.alert(getCookie("username"));
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);    //Loads previously saved cookie (if it exists)
  var ca = decodedCookie.split(';');                          //Splits the cookie (which is basically a string) at ;  which were set earlier
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);                                   //Creates a string containing the value of the cookie
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);            //Returns value of the cookie
    }
  }
  return "";
}

function changeGreeting(){                                  //Updates the text with name saved in cookie
  cookie = getCookie("username");
  if(cookie!=null){
    document.getElementById("greeting").innerHTML = "Welcome back " + cookie;
  }
}



///////////////////////////

///////EXERCISE 10/////////

function getBrowserInformation(){                                       //Honestly just 1:1 copied from the internet to get the browser type and version as the functions we learned just gave back useless gibberish
  var browser = '';
  var browserVersion = 0;

  if (/Opera[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
      browser = 'Opera';
  } else if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
      browser = 'MSIE';
  } else if (/Navigator[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
      browser = 'Netscape';
  } else if (/Chrome[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
      browser = 'Chrome';
  } else if (/Safari[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
      browser = 'Safari';
      /Version[\/\s](\d+\.\d+)/.test(navigator.userAgent);
      browserVersion = new Number(RegExp.$1);
  } else if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
      browser = 'Firefox';
  }
  if(browserVersion === 0){
      browserVersion = parseFloat(new Number(RegExp.$1));
  }
  //alert(browser + " version" + browserVersion);
  document.getElementById("BrowserName").innerHTML = browser + " version" + browserVersion;
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


