const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function clickSubmit(){
    username = document.getElementById('usernameInput').value;
    window.alert(username);
}

function updateTime(){
    
    date = new Date();
    year = date.getFullYear();
    month = date.getMonth();
    day = date.getDay()
    hour = date.getHours();
    minute = date.getMinutes();
    second = date.getSeconds();
    window.alert(year + " " + monthNames[month] + " " + day + "th " + hour + " " +minute + " " + second);
}