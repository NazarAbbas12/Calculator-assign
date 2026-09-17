function appendNumber(value){
    document.getElementById('inp').value += value;
}
function appendOperation(operation){
    document.getElementById('inp').value += operation;
}

function calculate(){

    const input = document.getElementById('inp').value;
    console.log(input);
    if (input === '') {
        return;
    }
    document.getElementById('inp').value = eval(input);
}

function clearInput(){
    document.getElementById('inp').value = '';
}