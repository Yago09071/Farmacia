var totalGlobal;

function comecar() {
    var nome = document.getElementById("exampleFormControlInput1").value;
    show(nome)
}

function show(nome) {
    document.getElementById("nomePrint").textContent = nome;
    var div = document.getElementById("selects-div");
    var zap = document.getElementById("zap");
    if (nome && nome.trim() !== "") {
        div.style.display = "flex";
        zap.style.display = "flex";
        document.getElementById("exampleFormControlInput1").style.background = "nome";
    } else {
        document.getElementById("error").style.display = "flex";
    }
}


function fechar() {
    document.getElementById("error").style.display = "none";
    document.getElementById("exampleFormControlInput1").style.background = "none";
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
        case "Fluconozema":
            total =  total + 119.90;
            AA = 119.90;
            break;
            case "Gastrote":
            total =  total + 29.90;
            AA = 29.90;
            break;
            case "Colflex":
            total =  total + 59.90;
            AA = 59.90;
            break;
            case "CaldêMDK":
            total =  total + 226.90;
            AA = 226.90;
            break;
            case "Colageno equaliv":
            total =  total + 69.90;
            AA = 69.90;
            break;

    }

    switch (selectC.value) {
        case "Magnesio complex":
            total =  total + 9.90;
            C = 9.90;
            break;
            case "Coenzima":
            total =  total + 19.90;
            C = 19.90;
            break;
            case "Andractiv":
            total =  total + 169.59;
            C = 169.59;
            break;
            case "DermUP":
            total =  total + 5.50;
            C = 5.50;
            break;
            case "20 bi":
            total =  total + 39.49;
            C = 39.49;
            break;

    }

    switch (selectAI.value) {
        case "Frauldapumpers":
            total =  total + 139.99;
            AI = 139.99;
            break;
        case "Enterogermina":
            total =  total + 59.90;
            AI = 59.90;
            break;
        case "Cicatricure":
            total =  total + 75.90;
            AI = 75.90;
        break;
        case "Agua micelar":
            total =  total + 19.90;
            AI = 19.90;
            break;
        case "Loreal Paris":
            total =  total + 49.90;
            AI = 49.90;
        break;

    }
    switch (selectD.value) {
        case "Doralgina":
            total =  total + 48.90;
            D = 48.90;
            break;
        case "Lavitan":
            total =  total + 34.90;
            D = 34.90;
            break;
        case "Atroveran":
            total =  total + 35.90;
            D = 35.90;
        break;
        case "Medley Dipirona":
            total =  total + 7000.90;
            D = 7000.90;
            break;
        case "Prati paracetamol":
            total =  total + 1.90;
            D = 1.90;
        break;

    }
    switch (selectI.value) {
        case "Deltametril":
            total =  total + 62.90;
            I = 62.90;
            break;
        case "Suprabio":
            total =  total +29.90;
            I = 29.90;
            break;
        case "Nevralgex":
            total =  total + 47.48;
            I = 47.48;
        break;
        case "Sanasar":
            total =  total + 116.80;
            I = 116.80;
            break;
        case "vitaminas neo química":
            total =  total + 9.56;
            I = 9.56;
        break;

    }
    document.getElementById("pedido-pronto").style.display = "block" 
    document.getElementById("RemedioAI-pronto").textContent = selectAI.value + " R$ " + AI.toFixed(2); 
    document.getElementById("RemedioC-pronto").textContent = selectC.value + " R$ " + C.toFixed(2); 
    document.getElementById("RemedioAA-pronto").textContent = selectAA.value + " R$ " + AA.toFixed(2);
    document.getElementById("RemedioD-pronto").textContent = selectD.value + " R$ " + D.toFixed(2); 
    document.getElementById("RemedioI-pronto").textContent = selectI.value + " R$ " + I.toFixed(2);  
    resultadoSpan.textContent = "R$" + total.toFixed(2);
    totalGlobal = "R$" + total.toFixed(2);
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

const DataAtual = new Date();

const dia = DataAtual.getDate();
const mes = DataAtual.getMonth() + 1;
const ano = DataAtual.getFullYear();
const data = dia + "/" + mes + "/" + ano

function enviar(){
    if (totalGlobal != ""){

        var numeroTelefone = "5541991760161";

        var linkWhatsApp = "https://wa.me/" + numeroTelefone + "?text=Total da Compra: " + totalGlobal + " - " + "Dia da Compra: " + data

        window.open(linkWhatsApp, "_blank")
    }
}