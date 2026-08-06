function atualizarHora(){

    const agora = new Date();

    const hora = String(agora.getHours()).padStart(2,"0");
    const minuto = String(agora.getMinutes()).padStart(2,"0");

    document.getElementById("hora").textContent = hora + ":" + minuto;

}

setInterval(atualizarHora,1000);
atualizarHora();

const task = sessionStorage.getItem("task");

if(task){
    document.getElementById("task").textContent = task;
}

const sku = document.getElementById("sku");
const lot = document.getElementById("lot");

const skuCorreto = "H2253608";
const lotCorreto = "58YD3K";

// ENTER no SKU
sku.addEventListener("keydown", function(event){

    if(event.key !== "Enter") return;

    if(sku.value.trim().toUpperCase() === skuCorreto){

        lot.focus();

    }else{

        sku.value = "";
        sku.focus();

    }

});

// ENTER no LOT
lot.addEventListener("keydown", function(event){

    if(event.key !== "Enter") return;

    
    if(lot.value.trim().toUpperCase() === lotCorreto){

        // próxima tela
        window.location.href = "stage.html";

    }else{

        sku.value = "";
        lot.focus();

    }

});