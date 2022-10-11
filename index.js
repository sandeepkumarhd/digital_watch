

// let new_hours=get();
// let new_min = get.minmin;
// let new_second = get.second;
// console.log(new_hours + new_min + new_second);




function time(){
    let d =new Date();
let h = d.getHours();
let m = d.getMinutes();
let s = d.getSeconds();
let sesion = "AM";
h = h<10 ? "0"+h :h;
m = m<10 ? "0"+m :m;
s = s<10 ? "0"+s :s;
if(h>12){
    h = h - 12;
    sesion="PM";
}
if(h>=12){
    sesion = "PM";
}
let toTime = h + " : " + m + " : " + s + " "+ sesion;
document.getElementById("time").innerHTML = toTime;
setTimeout(time,1000);        
}