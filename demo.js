var buttons=document.getElementsByClassName("button");
var display=document.getElementById("displaycontent");
var operand1=null;
var operator=null;
var operand2=null;
for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        var value=this.getAttribute('value');
        if(value=='+'){
            if(operand1==null || display.innerText!=null){
                operand1=parseFloat(display.textContent);
                operator='+';
                display.innerText=null;
            }
        }
        else if(value=='-'){
            if(operand1==null || display.innerText!=null){
                operand1=parseFloat(display.textContent);
                operator='-';
                display.innerText=null;
            }
        }
        else if(value=='*'){
            if(operand1==null || display.innerText!=null){
                operand1=parseFloat(display.textContent);
                operator='*';
                display.innerText=null;
            }
        }
        else if(value=='/'){
            if(operand1==null || display.innerText!=null){
                operand1=parseFloat(display.textContent);
                operator='/';
                display.innerText=null;
            }
        }
        else if(value=='='){
            if(operator!=null && operand1!=null){
                operand2=parseFloat(display.textContent);
                var result=eval(operand1+" "+operator+" "+operand2);
                display.innerText=result;
                operator=null;
                operand2=null;
                operand1=result;
            }
        }
        else if(value=='AC'){
            display.innerText=null;
                operator=null;
                operand2=null;
                operand1=null;
        }
        else{
            display.innerText+=value;
        }
    });
}


document.addEventListener('keydown',function(event){
    var value=event.key;
    console.log(value);
    if(value=='+'){
        if(operand1==null || display.innerText!=null){
            operand1=parseFloat(display.textContent);
            operator='+';
            display.innerText=null;
        }
    }
    else if(value=='-'){
        if(operand1==null || display.innerText!=null){
            operand1=parseFloat(display.textContent);
            operator='-';
            display.innerText=null;
        }
    }
    else if(value=='*'){
        if(operand1==null || display.innerText!=null){
            operand1=parseFloat(display.textContent);
            operator='*';
            display.innerText=null;
        }
    }
    else if(value=='/'){
        if(operand1==null || display.innerText!=null){
            operand1=parseFloat(display.textContent);
            operator='/';
            display.innerText=null;
        }
    }
    else if(value=='='){
        if(operator!=null && operand1!=null){
            operand2=parseFloat(display.textContent);
            var result=eval(operand1+" "+operator+" "+operand2);
            display.innerText=result;
            operator=null;
            operand2=null;
            operand1=result;
        }
    }
    else if(value=='AC'){
        display.innerText=null;
            operator=null;
            operand2=null;
            operand1=null;
    }
    else{
        display.innerText+=value;
    }
});