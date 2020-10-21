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

window.setInterval(function(){
  updateTime();
}, 1);

//////////////////////////////////////////////////