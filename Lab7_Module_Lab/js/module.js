(function(){

    "use strict"

    window.onload = function(){
        document.getElementById("createBtn").onclick = createAccount;
    };

    var accoutInfoList = new Array();

    function Account(name, deposit){
        this.name = name;
        this.deposit = deposit;
    }

    function createAccount(){
        var inputName = document.getElementById("accountName").value;
        var depAmnt = document.getElementById("depositAmount").value;
        var newAccount = new Account(inputName, depAmnt);
        accoutInfoList.push(newAccount);
        var myDisplay = "";
        for(let i = 0; i < accoutInfoList.length; i++){
            myDisplay += "Account Name: " + accoutInfoList[i].name + "\tBalance: " + accoutInfoList[i].deposit + "\n";
        }
        document.getElementById("accounts").value = myDisplay;
    }

}());
