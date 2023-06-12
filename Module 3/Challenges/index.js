
let numEl=  parseInt(document.getElementById("num1-el").value)
let numEl2=  parseInt(document.getElementById("num2-el").value)
let resultEl= document.getElementById("result-el")


function add(){
    let result= numEl+numEl2
    resultEl.textContent="SUM : "+result
    
    }
    function sub(){
    result= numEl-numEl2
    resultEl.textContent= "SUB : "+result
    }
    function mult(){
    let result= numEl*numEl2
    resultEl.textContent="MUL : "+result
    }
    function div(){
    let result= numEl/numEl2
    resultEl.textContent="Div : "+result
    }

    