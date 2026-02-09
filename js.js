//Copyright © 2025 MochiMakesMatcha. Licensed under CC BY-SA found at https://creativecommons.org/licenses/by-sa/4.0/
terminalShowing=[];
function submitCommand(){
    input=document.getElementById("terminalInput").value;
    input2=input
    input = input.split(" ");
    command = input[0];
    input.shift();
    args=input;
    if(computer(command, args)=="CLS"){
      document.getElementById("terminalOutput").innerHTML="";
      terminalShowing=[];
      return;
    };
    if(terminalShowing.length >= 10){
        terminalShowing.shift();
        terminalShowing.shift();
    };
    terminalShowing.push("mochi@mochipc $ "+input2+"<br>");
    terminalShowing.push("> "+computer(command, args)+"<br>");
    document.getElementById("terminalOutput").innerHTML=terminalShowing.join(" ");
};

function burger(){
    if(document.getElementById("menu").hidden==false){
        document.getElementById("menu").hidden=true;
    } else if(document.getElementById("menu").hidden==true){
        document.getElementById("menu").hidden=false;
    };

};
