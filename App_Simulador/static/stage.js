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
// DADOS DO LOAD
// ===============================

const dadosContainer = JSON.parse(
    sessionStorage.getItem("dadosContainer")
);

// ===============================
// CAMPOS
// ===============================

const stage = document.getElementById("stage");
const lc = document.getElementById("lc");


// ===============================
// TIPO DA TAREFA
// ===============================

const tipoTarefa = sessionStorage.getItem("tipoTarefa");
const dadosSalvos = JSON.parse(sessionStorage.getItem("dadosTarefa"));


// ===============================
// RENDERIZAÇÃO DOS DADOS
// ===============================
function formatarPosicao(posicao) {
    const novaPosicao = posicao.slice(0, 2) + "-" + posicao.slice(2, 5) + "-" + posicao.slice(5, 7);
    return novaPosicao.toUpperCase();
}

const posicao = document.getElementById("location");
const container = document.getElementById("container");

if (dadosSalvos) {
    posicao.textContent = formatarPosicao(dadosContainer['stage']);
    container.textContent = dadosSalvos.linhas[0].container;
}


// ===============================
// STAGE CORRETO
// ===============================

const stageCorreto = dadosContainer['stage'];   

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
            } else if (tipoTarefa === "load"){

                window.location.href = "case.html"
            }
        } else {


        lc.value = "";
        lc.focus();

    }
    }
});