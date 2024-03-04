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
    var resultadoSpan = document.getElementById("resultado");

    var total = 0;
    var AA = 0;
    var C = 0;
    var AI = 0;

    switch (selectAA.value) {
        case "Pf":
            total =  total + 25.90;
            AA = 25.90;
            break;
            case "Strogonoff":
            total =  total + 24.90;
            AA = 24.90;
            break;
            case "Lasanha":
            total =  total + 31.90;
            AA = 31.90;
            break;

    }

    switch (selectC.value) {
        case "Suco":
            total =  total + 6.90;
            C = 6.90;
            break;
            case "Refrigerante":
            total =  total + 8.90;
            C = 8.90;
            break;
            case "Agua":
            total =  total + 6.90;
            C = 6.90;
            break;

    }

    switch (selectAI.value) {
        case "Bananasplit":
            total =  total + 19.90;
            AI = 19.90;
            break;
        case "Sorbet":
            total =  total + 7.90;
            AI = 7.90;
            break;
        case "Petit":
            total =  total + 15.90;
            AI = 15.90;
        break;

    }
    document.getElementById("pedido-pronto").style.display = "block" 
    document.getElementById("sobremesa-pronto").textContent = selectAI.value + " R$ " + AI.toFixed(2); 
    document.getElementById("bebida-pronto").textContent = selectC.value + " R$ " + C.toFixed(2); 
    document.getElementById("prato-pronto").textContent = selectAA.value + " R$ " + AA.toFixed(2); 
    resultadoSpan.textContent = "R$" + total.toFixed(2);
}

function limpar(){
    document.getElementById("pedido-pronto").style.display = "none";
    document.getElementById("selects-div").style.display = "none";
    document.getElementById("exampleFormControlInput1").value = "";
    document.getElementById("resultado").value = "";
    document.getElementById("selectBebida").value = "Selecione sua bebida";
    document.getElementById("selectPrato").value = "Selecione seu Prato";
    document.getElementById("selectSobremesa").value = "Selecione sua sobremesa";
}