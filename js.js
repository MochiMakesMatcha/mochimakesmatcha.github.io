//Copyright © 2025 MochiMakesMatcha. Licensed under CC BY-SA found at https://creativecommons.org/licenses/by-sa/4.0/
function submitCommand(){
    input=document.getElementById("terminalInput").value;
    input2=input
    input = input.split(" ");
    command = input[0];
    input.shift();
    args=input;
    document.getElementById("terminalOutput").innerHTML+="mochi@mochipc $ "+input2+"<br>";
    document.getElementById("terminalOutput").innerHTML+="> "+computer(command, args)+"<br>";
};

function burger(){
    if(document.getElementById("menu").hidden==false){
        document.getElementById("menu").hidden=true;
    } else if(document.getElementById("menu").hidden==true){
        document.getElementById("menu").hidden=false;
    };

};
