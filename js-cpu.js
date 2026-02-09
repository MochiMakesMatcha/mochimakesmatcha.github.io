//Copyright © 2025 MochiMakesMatcha. Licensed under CC BY-SA found at https://creativecommons.org/licenses/by-sa/4.0/
var args=[];
var dir = "home"
function computer(command, args){
    if(command == "ls"){
        output=eval("Object.keys(fs."+dir+").join(\", \")");
        return(output);
    } else if (command == "cat" && args !=[]){
        file = args[0];
        return(eval("fs."+dir+"[file]"))
    } else if (command == "echo" && args !=[]){
        argsString=args.join(" ");
        return(argsString)
    } else if (command == "write" && args !=[]){
        file = args[0]+"_txt";
        args.shift();
        text=args.join(" ");
        eval("fs."+dir+"[file]=text");
        return(file+": "+text)
    } else if(command == "rm" && args !=[]){
        file = args[0];
        eval("delete fs."+dir+"[file]");
        return("deleted "+file);
    } else if(command == "mkdir" && args !=[]){
        folder=args[0]+"_dir";
        eval("fs."+dir+"[folder]={}");
        return(folder);
    } else if(command == "cd" && args !=[]){
        dir += "."+args[0];
        return(dir);
    } else if(command == "home"){
        dir = "home";
        return("home dir")
    }else if(command == "cls"){
        return("CLS")
    }else if(command == "help"){
        return("ls, cat, echo, write, rm, mkdir, cd, home, cls, help")
    }else{
        return("command not recognised")
    };
};


var fs = {
    home: {
        cat_txt: "meow",
        welcome_txt: "Welcome to mochi's pc",
        commands_txt: "Commands: ls cat echo write rm mkdir cd home"
    }

};
