window.onload = loader;

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
    let wholeBody = document.getElementById("body1");
    if (myBox.checked){
        mytext.style.fontWeight = "bold";
        mytext.style.color = "green";
        mytext.style.textDecoration = "underline";
        wholeBody.style.backgroundImage = "url('Images/hundred-dollar-bill.jpg')";
    }else{
        mytext.style.fontWeight = "";
        mytext.style.color = "";
        mytext.style.textDecoration = "";
        wholeBody.style.backgroundImage = "";
    }
}

function pigLatin(){
    let myText = document.getElementById("inputText");
    var mySmallText = myText.value.toLowerCase();
    var vowels = "aeiou";
    var myNew = "";
    var addText = "ay";
    if(vowels.indexOf(mySmallText.charAt(0)) >= 0) {
        addText = "way";
    }
    for(var i = 0; i < mySmallText.length; i++){
        if(vowels.indexOf(mySmallText.charAt(i)) >= 0){
            myNew = myNew + mySmallText.substr(i, mySmallText.length) + mySmallText.substr(0, i) + addText;
            break;
        }
    }
    myText.value = myNew;
}

function loader(){
    document.getElementById("decoratorBtn").onclick = decorateWithBtn;
    document.getElementById("myCheckBox").onchange = decorateWithCB;
    document.getElementById("pigBtn").onclick = pigLatin;
}