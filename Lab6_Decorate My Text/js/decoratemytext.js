let flag = 0;
let x;

function decorateWithBtn(){
    if(flag == 0){
        decorate();
        x = setInterval(decorate, 2000);
        flag = 1;
    }else{
        clearInterval(x);
        flag = 0;
    }
    
}

function decorate(){
    let mytext = document.getElementById("inputText");
    let currentSize = parseInt(window.getComputedStyle(mytext).getPropertyValue("font-size"));
    mytext.style.fontSize = (currentSize + 2) + "pt";
}

function decorateWithCB(){
    let mytext = document.getElementById("inputText");
    let myBox = document.getElementById("myCheckBox");
    if (myBox.checked){
        mytext.style.fontWeight = "bold";
        mytext.style.color = "green";
        mytext.style.textDecoration = "underline";
    }else{
        mytext.style.fontWeight = "";
        mytext.style.color = "";
        mytext.style.textDecoration = "";
    }
}