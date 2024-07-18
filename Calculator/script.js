let output = document.getElementById("out");
function display(n){
    output.value += n;
}

function Clear(){
    output.value = "";
}

function delet(){
    output.value = output.value.slice(0,-1);
}

function equal(){
    try{
        output.value = eval(output.value);
    }
    catch{
        alert("Invalid");
    }
}