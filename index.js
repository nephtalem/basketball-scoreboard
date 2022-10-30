let homeNum = document.getElementById("homeNum")
let guestNum = document.getElementById("guestNum")
let homeFoul= document.getElementById("homeFoul")
let guestFoul = document.getElementById("guestFoul")
let period = document.getElementById("period")
let timer= document.getElementById("timer")
let homemsg = document.getElementById("homemsg")
let guestmsg = document.getElementById("guestmsg")


let count = 0
function homeInc1(){
    count+= 1
    homeNum.textContent = count
    shadow()
}

function homeInc2(){
    count += 2
    homeNum.textContent = count
    shadow()
}


function homeInc3(){
    count += 3
    homeNum.textContent = count
    shadow()
}




let countg = 0
function guestInc1(){
    countg+= 1
    guestNum.textContent = countg
    shadow()
}

function guestInc2(){
    countg += 2
    guestNum.textContent = countg
    shadow()
}


function guestInc3(){
    countg += 3
    guestNum.textContent = countg
    shadow()
}




let homeFoulNum = 0

function homeFoulInc() {
    homeFoulNum += 1
    homeFoul.textContent = homeFoulNum
}



let guestFoulNum = 0

function guestFoulInc() {
    guestFoulNum += 1
    guestFoul.textContent = guestFoulNum
}

let periodNum = 0
function periodInc(){
    periodNum += 1 
    period.textContent = periodNum
}


function shadow(){
    if(count > countg){
        homemsg.classList.add("active")
        guestmsg.classList.remove("active")
    }
    
    else{ 
        guestmsg.classList.add("active")
        homemsg.classList.remove("active")
    }
    
}
