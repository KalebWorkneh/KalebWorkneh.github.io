var flag = 0;

function decorator(){
    let mytext = document.getElementById("inputText");
    let currentSize = parseInt(window.getComputedStyle(mytext).getPropertyValue("font-size"));
    mytext.style.fontSize = (currentSize + 2) + "pt";
}

function decorateWithBtn(){
    if(!flag){
        clearInterval(myInterval);
    } else {
        myInterval();       
    }
}

function myInterval(){
    decorator();
    setInterval(decorator, 2000);
}

function decorateWithCB(){
    let mytext = document.getElementById("inputText");
    let myBox = document.getElementById("myCheckBox");
    if (myBox.checked){
        mytext.style.fontWeight = "bold";
        mytext.style.color = "green";
        mytext.style.textDecoration = "underline";
    }else{
        mytext.style.fontWeight = "normal";
        mytext.style.color = "";
        mytext.style.textDecoration = "";
    }
}