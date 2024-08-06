
const hour = document.querySelector('.hour-hand');
const minute = document.querySelector('.minute-hand');
const second = document.querySelector('.second-hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secDeg = ((seconds / 60) * 360) + 90;
    second.style.transform = `rotate(${secDeg}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    minute.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
    hour.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();











//digital clock 

let hrs = document.getElementById('hrs')
let min = document.getElementById('min')
let sec = document.getElementById('sec')


setInterval(()=>{

    let time = new Date() ; 
    
    
    console.log(time.getHours()) ; 
    console.log(time.getMinutes()) ;
    console.log(time.getSeconds()) ;  
    
    hrs.innerHTML = time.getHours() ; 
    
    min.innerHTML = time.getMinutes() ; 
    
    sec.innerHTML = time.getSeconds() ; 
},1000)



