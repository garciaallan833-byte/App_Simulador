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
// CAMPOS
// ===============================

const stage = document.getElementById("stage");
const lc = document.getElementById("lc");


// ===============================
// TIPO DA TAREFA
// ===============================

const tipoTarefa = sessionStorage.getItem("tipoTarefa");


// ===============================
// STAGE CORRETO
// ===============================

const stageCorreto = "STG0641";


// ===============================
// STAGE
// ===============================

stage.addEventListener("input", function () {

    const valor = stage.value.trim().toUpperCase();

    // STG0641 = 7 caracteres
    if (valor.length === stageCorreto.length) {

        if (valor === stageCorreto) {

            // Stage correto → vai para LC
            lc.focus();

        } else {

            // Stage incorreto
            stage.value = "";
            stage.focus();

        }
    }

});


// ===============================
// LC
// ===============================

lc.addEventListener("input", function () {

    const valor = lc.value.trim().toUpperCase();

    // H7 = 2 caracteres
    if (valor.length === 2) {

        // Sempre letra + número
        if (/^[A-Z][0-9]$/.test(valor)) {

            // ===============================
            // FINALIZA A TAREFA
            // ===============================

            if (tipoTarefa === "direta") {

                // Tarefa DRT
                window.location.href = "pickingDRT.html";

            } else if (tipoTarefa === "fracionada") {

                // Tarefa FRC
                window.location.href = "pickingFRC.html";

    }else{

        lc.value = "";
        lc.focus();

    }

});

entrada.addEventListener("focus", () => {
    entrada.blue();
    entrada.focus();
});

stage.addEventListener("input", function() {
    if(stage.value.trim().length === 7){
        lc.focus();
    }
});

lc.addEventListener("input", function() {
    if(lc.value.trim().length === 2){
        
        if(/^[A-Z][0-9]$/.test(lc.value.trim().toUpperCase())){
            // próxima tela
            window.location.href = "pickingFRC.html";
        }else{
            lc.value = "";
            lc.focus();

        }
    }

});