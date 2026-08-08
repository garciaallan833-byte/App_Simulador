// ===============================
// RELÓGIO
// ===============================

function atualizarHora() {

    const agora = new Date();

    const hora = String(agora.getHours()).padStart(2, "0");
    const minuto = String(agora.getMinutes()).padStart(2, "0");

    const relogio = document.getElementById("hora");

    if (relogio) {
        relogio.textContent = hora + ":" + minuto;
    }
    
}

setInterval(atualizarHora, 1000);
atualizarHora();


// ===============================
// TASK
// ===============================

const task = sessionStorage.getItem("task");

const elementoTask = document.getElementById("task");

if (task && elementoTask) {
    elementoTask.textContent = task;
}


// ===============================
// CAMPOS
// ===============================

const sku = document.getElementById("sku");
const lot = document.getElementById("lot");


// ===============================
// VALORES CORRETOS
// ===============================

const skuCorreto = "H2253608";
const lotCorreto = "58YD3K";


// ===============================
// SKU
// ===============================

sku.addEventListener("input", function () {

    const valor = sku.value.trim().toUpperCase();

    // Quando completar os 8 caracteres
    if (valor.length === skuCorreto.length) {

        if (valor === skuCorreto) {

            // SKU correto → vai para o lote
            lot.focus();

        } else {

            // SKU incorreto
            sku.value = "";
            sku.focus();

        }
    }
});


// ===============================
// LOT
// ===============================

lot.addEventListener("input", function () {

    const valor = lot.value.trim().toUpperCase();

    // Quando completar os 6 caracteres
    if (valor.length === lotCorreto.length) {

        if (valor === lotCorreto) {

            // SKU + LOT corretos
            window.location.href = "stage.html";

        } else {

            // Lote incorreto
            lot.value = "";
            lot.focus();

        }
    }

});