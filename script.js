let display = document.getElementById("display");
function addToDisplay(value){
    if(display.value ==='0' && value !=='.'){
        display.value = '';
    }
    display.value += value;
    if(!isNaN(value) || ['+','-','*','/'].includes(value) ){
        calculate();
        
        }
    }
    
    if (value === '='){
        calculate();
    }

function clearDisplay(){
    display.value = '0';
}
function clearAll(){
    display.value = '0';
}
function calculate(){
    try{
        let result = eval (display.value);
        if(isNaN(result) || !isFinite(result)){
            display.value = 'Error';
        }else{
            display.value = result;
        }
        
    }catch (error){
        display.value = "Error";
    }
}

