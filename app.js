var mint = 0;
var sec = 0;
var msec = 0;
var interval;
var mintHeading = document.getElementById("mint");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");


function timer(){
    msec++
    msecHeading.innerHTML = msec
    if(msec >= 100){
        sec++
        secHeading.innerHTML = sec
        msec = 0;
    }else if (sec >+ 60){
        mint++
        mintHeading.innerHTML = mint
        sec = 0;
    }

}

function start(){
    interval = setInterval(timer,10)
    var b = document.getElementById('disBtn')
    b.disabled = true



}
function stop(){
    clearInterval(interval);
    var b = document.getElementById('disBtn')
    b.disabled = false
}

function reset(){
    mint = 0;
    sec = 0;
    msec = 0;
    mintHeading.innerHTML = mint;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
    stop()
}

function save(){
    var list = document.getElementById("list")
    var li = document.createElement("li")
    list.appendChild(li)
 var saveName = prompt("Enter your name")
 li.setAttribute("class","li")

    

var nameNode = document.createTextNode(`${saveName}: `)
var mintSave = document.createTextNode(`${mint}:`)
var secSave = document.createTextNode(`${sec}:`)
var msecSave = document.createTextNode(`${msec}`)
console.log(nameNode)

li.appendChild(nameNode)
li.appendChild(mintSave)
li.appendChild(secSave)
li.appendChild(msecSave)
// list.innerHTML = li
}