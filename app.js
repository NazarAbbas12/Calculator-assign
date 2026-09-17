const input = document.getElementById('inp');
function appendNumber(value){
    if(input.value == 'Error'){
        input.value = '';
    }
    input.value += value;
}
function appendOperation(operation){
    if(input.value == 'Error'){
        input.value = '';
    }
    input.value += operation;
}

function calculate(){
    if(input.value == ''){
        return;
    }
    try {
        input.value = eval(input.value);
    } catch (error) {
        input.value = 'Error';
    }
}

function clearInput(){
    input.value = '';
}