let result = document.getElementById('affichage');

function display(input) {
    result.value += input;
}

function Clear() {
    result.value = '';
}

function Delete() {
    if (result.value == "Error" || result.value == "NaN" || result.value == "Infinity") {
        result.value = '';
    }else{
        result.value = result.value.substring(0, result.value.length - 1);
    }
}

function calculate() {
    try{
        result.value = eval(result.value);
    }catch(e){
        result.value = "Error";
    }  
}