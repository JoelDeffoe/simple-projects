function getHistory() {
    return document.getElementById("resuktascreen").value;
}

function printHiostory(num) {
    document.getElementById("resuktascreen").value = num;
}


function getOutput() {
    return document.getElementById("inputecreeen").value;
}

function printOutput(num) {
    if(num==""){
        document.getElementById("inputecreeen").value = num;
    }
    else
    {
        document.getElementById("inputecreeen").value = getFormattedNumber(num);
    }
}

function getFormattedNumber(num) {
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}

function revertNumberFormat(num){
    return Number(num.replace(/,/g,''));
}

var operator = document.getElementsByClassName("opt");
for(var i =0; i <operator.length;i++){
    operator[i].addEventListener('click',function(){});
}

var number = document.getElementsByClassName("keys");
for(var i =0; i < number.length; i++){
    number[i].addEventListener('click', function(){
        var output = revertNumberFormat(getOutput());
        if(output!=NaN){
            output=output+this+id;
            printOutput(output);
        }
    });
}