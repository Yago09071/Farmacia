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
            total =  total + 25.90;
            AA = 25.90;
            break;
            case "Remedio2AA":
            total =  total + 24.90;
            AA = 24.90;
            break;
            case "Remedio3AA":
            total =  total + 31.90;
            AA = 31.90;
            break;
            case "Remedio4AA":
            total =  total + 24.90;
            AA = 24.90;
            break;
            case "Remedio5AA":
            total =  total + 31.90;
            AA = 31.90;
            break;

    }

    switch (selectC.value) {
        case "Remedio1C":
            total =  total + 6.90;
            C = 6.90;
            break;
            case "Remedio2C":
            total =  total + 8.90;
            C = 8.90;
            break;
            case "Remedio3C":
            total =  total + 6.90;
            C = 6.90;
            break;
            case "Remedio4C":
            total =  total + 8.90;
            C = 8.90;
            break;
            case "Remedio5C":
            total =  total + 6.90;
            C = 6.90;
            break;

    }

    switch (selectAI.value) {
        case "Remedio1AIt":
            total =  total + 19.90;
            AI = 19.90;
            break;
        case "Remedio2AI":
            total =  total + 7.90;
            AI = 7.90;
            break;
        case "Remedio3AI":
            total =  total + 15.90;
            AI = 15.90;
        break;
        case "Remedio4AI":
            total =  total + 7.90;
            AI = 7.90;
            break;
        case "Remedio5AI":
            total =  total + 15.90;
            AI = 15.90;
        break;

    }
    switch (selectD.value) {
        case "Remedio1D":
            total =  total + 19.90;
            D = 19.90;
            break;
        case "Remedio2D":
            total =  total + 7.90;
            D = 7.90;
            break;
        case "Remedio3D":
            total =  total + 15.90;
            AI = 15.90;
        break;
        case "Remedio4D":
            total =  total + 7.90;
            D = 7.90;
            break;
        case "Remedio5D":
            total =  total + 15.90;
            D = 15.90;
        break;

    }
    switch (selectI.value) {
        case "Remedio1I":
            total =  total + 19.90;
            I = 19.90;
            break;
        case "Remedio2I":
            total =  total + 7.90;
            I = 7.90;
            break;
        case "Remedio3I":
            total =  total + 15.90;
            I = 15.90;
        break;
        case "Remedio4I":
            total =  total + 7.90;
            I = 7.90;
            break;
        case "Remedio5I":
            total =  total + 15.90;
            I = 15.90;
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