function comecar(){
    var nome = document.getElementById("exampleFormControlInput1").value;
    show(nome);
}

function show(nome){
    document.getElementById("nomePrint").textContent = nome;
    var div = document.getElementById("selects-div")
    if(nome && nome.trim !==""){
        div.style.display = "flex"
        document.getElementById("exampleFormControlInput1").style.background = "none"
    }else{
        document.getElementById("error").style.display = "block"
    }
   
}

function fechar(){
    document.getElementById("error").style.display ="none"
    document.getElementById("exampleFormControlInput1").style.display = "lightpink";
}

function calcularTotal(){
    var selectAA = document.getElementById("select-anti-alergico");
    var selectC = document.getElementById("select-cardiologico");
    var selectAI = document.getElementById("select-anti-inflamatorio");
    var selectD = document.getElementById("select-Dores");
    var selectI = document.getElementById("select-Inchaco");
    var resultadoSpan = document.getElementById("resultado");

    var total = 0;
    var AA = 0;
    var C = 0;
    var AI = 0;
    var D = 0;
    var I = 0;
    
    switch (selectAA.value) {
        case "Remedio1AA":
            total =  total + 119,90;
            AA = 119,90;
            break;
            case "Remedio2AA":
            total =  total + 29,90;
            AA = 29,90;
            break;
            case "Remedio3AA":
            total =  total + 59,90;
            AA = 59,90;
            break;
            case "Remedio4AA":
            total =  total + 226,90;
            AA = 226,90;
            break;
            case "Remedio5AA":
            total =  total + 69,90;
            AA = 69,90;
            break;

    }

    switch (selectC.value) {
        case "Remedio1C":
            total =  total + 9,90;
            C = 9,90;
            break;
            case "Remedio2C":
            total =  total + 19,90;
            C = 19,90;
            break;
            case "Remedio3C":
            total =  total + 169,59;
            C = 169,59;
            break;
            case "Remedio4C":
            total =  total + 5,50;
            C = 5,50;
            break;
            case "Remedio5C":
            total =  total + 39,49;
            C = 39,49;
            break;

    }

    switch (selectAI.value) {
        case "Remedio1AI":
            total =  total + 139,99;
            AI = 139,99;
            break;
        case "Remedio2AI":
            total =  total + 59,90;
            AI = 59,90;
            break;
        case "Remedio3AI":
            total =  total + 75,90;
            AI = 75,90;
        break;
        case "Remedio4AI":
            total =  total + 19,90;
            AI = 19,90;
            break;
        case "Remedio5AI":
            total =  total + 49,90;
            AI = 49,90;
        break;

    }
    switch (selectD.value) {
        case "Remedio1D":
            total =  total + 48,90;
            D = 48,90;
            break;
        case "Remedio2D":
            total =  total + 34,90;
            D = 34,90;
            break;
        case "Remedio3D":
            total =  total + 35,90;
            D = 35,90;
        break;
        case "Remedio4D":
            total =  total + 7000,90;
            D = 7000,90;
            break;
        case "Remedio5D":
            total =  total + 1,90;
            D = 1,90;
        break;

    }
    switch (selectI.value) {
        case "Remedio1I":
            total =  total + 62,90;
            I = 62,90;
            break;
        case "Remedio2I":
            total =  total +29,90;
            I = 29,90;
            break;
        case "Remedio3I":
            total =  total + 47,48;
            I = 47,48;
        break;
        case "Remedio4I":
            total =  total + 116,80;
            I = 116,80;
            break;
        case "Remedio5I":
            total =  total + 9,56;
            I = 9,56;
        break;

    }
    document.getElementById("pedido-pronto").style.display = "block" 
    document.getElementById("RemedioAI-pronto").textContent = selectAI.value + " R$ " + AI.toFixed(2); 
    document.getElementById("RemedioC-pronto").textContent = selectC.value + " R$ " + C.toFixed(2); 
    document.getElementById("RemedioAA-pronto").textContent = selectAA.value + " R$ " + AA.toFixed(2);
    document.getElementById("RemedioD-pronto").textContent = selectD.value + " R$ " + D.toFixed(2); 
    document.getElementById("RemedioI-pronto").textContent = selectI.value + " R$ " + I.toFixed(2);  
    resultadoSpan.textContent = "R$" + total.toFixed(2);
}

function limpar(){
    document.getElementById("pedido-pronto").style.display = "none";
    document.getElementById("selects-div").style.display = "none";
    document.getElementById("exampleFormControlInput1").value = "";
    document.getElementById("resultado").value = "";
    document.getElementById("select-cardiologico").value = "Selecione seu medicamento";
    document.getElementById("select-anti-alergico").value = "Selecione seu medicamento";
    document.getElementById("select-anti-inflamatorio").value = "Selecione seu medicamento";
    document.getElementById("select-Dores").value = "Selecione seu medicamento";
    document.getElementById("select-Inchaco").value = "Selecione seu medicamento";
}