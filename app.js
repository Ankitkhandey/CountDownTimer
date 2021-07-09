const daysEl=document.getElementById("day");
const hoursEl=document.getElementById("hour");
const minutesEl=document.getElementById("minute");
const secondsEl=document.getElementById("second");


function setdate(givenDate){
    if(givenDate.value.length!=0){
        deleteWarning();
        date=givenDate.value;
        setIntervalFun();
    }else{
        deleteWarning();
        const p=document.createElement('p');
        const warning= document.createTextNode("Select a date");
        p.appendChild(warning);
        p.setAttribute("id","warning-signal");
        document.getElementById("input").appendChild(p);
    }
}

function countDown(){
    const currentDate=new Date();
    const setDate=new Date(date);
    const totalSeconds= (setDate-currentDate)/1000;

    const days=Math.floor(totalSeconds/3600/24);
    const hours= Math.floor(totalSeconds/3600)% 24;
    const minutes=Math.floor(totalSeconds/60)% 60;
    const seconds=Math.floor(totalSeconds)%60;

    console.log(days + " " +hours +" "+ minutes+ " "+seconds) ;
    
    daysEl.innerHTML=days;
    hoursEl.innerHTML=hours;
    minutesEl.innerHTML=minutes;
    secondsEl.innerHTML=seconds;
}

function setIntervalFun(){
    setInterval(countDown,1000);
}  

function deleteWarning(){
    const count=document.getElementById("input").childElementCount;
    if(count>4){
        for(var i=0; i<count-4;i++){
        document.getElementById("warning-signal").remove();
        }
    }
}    