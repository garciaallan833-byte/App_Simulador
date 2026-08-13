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

const dadosContainerSalvos =
    sessionStorage.getItem("dadosContainer");

const dadosContainer = dadosContainerSalvos
    ? JSON.parse(dadosContainerSalvos)
    : null;


// ===============================
// CAMPOS
// ===============================

const stage = document.getElementById("stage");
const lc = document.getElementById("lc");


// ===============================
// TIPO DA TAREFA
// ===============================

const tipoTarefa = sessionStorage.getItem("tipoTarefa");

const dadosTarefaSalvos =
    sessionStorage.getItem("dadosTarefa");

const dadosSalvos = dadosTarefaSalvos
    ? JSON.parse(dadosTarefaSalvos)
    : null;


// ===============================
// VERIFICAÇÃO
// ===============================

if (!stage || !lc) {

    console.error(
        "Erro: os campos #stage ou #lc não foram encontrados no HTML."
    );

} else if (!dadosContainer) {

    console.error(
        "Erro: dadosContainer não encontrado no sessionStorage."
    );

} else {

    // ===============================
    // RENDERIZAÇÃO DOS DADOS
    // ===============================

    function formatarPosicao(posicao) {

        if (!posicao) return "";

        const novaPosicao =
            posicao.slice(0, 2) + "-" +
            posicao.slice(2, 5) + "-" +
            posicao.slice(5, 7);

        return novaPosicao.toUpperCase();
    }


    const posicao = document.getElementById("location");
    const container = document.getElementById("container");


    // ===============================
    // MOSTRAR DADOS
    // ===============================

    if (posicao) {

        posicao.textContent =
            formatarPosicao(dadosContainer.stage);

    }


    if (container && dadosSalvos) {

        if (
            dadosSalvos.linhas &&
            dadosSalvos.linhas.length > 0
        ) {

            container.textContent =
                dadosSalvos.linhas[0].container;

        }

    }


    // ===============================
    // STAGE CORRETO
    // ===============================

    const stageCorreto =
        dadosContainer.stage.toUpperCase();


    // ===============================
    // STAGE
    // ===============================

    stage.addEventListener("input", function () {

        const valor =
            stage.value.trim().toUpperCase();


        if (valor.length === stageCorreto.length) {

            if (valor === stageCorreto) {

                // Stage correto
                // NÃO finaliza ainda
                lc.focus();

            } else {

                // Stage incorreto
                stage.value = "";
                stage.focus();

            }

        }

    });


    // ===============================
    // ENTER NO STAGE
    // ===============================

    stage.addEventListener("keydown", function (event) {

        if (event.key !== "Enter") return;

        const valor =
            stage.value.trim().toUpperCase();


        if (valor === stageCorreto) {

            lc.focus();

        } else {

            stage.value = "";
            stage.focus();

        }

    });


    // ===============================
    // LC
    // ===============================

    lc.addEventListener("input", function () {

        const valor =
            lc.value.trim().toUpperCase();


        if (valor.length === 2) {

            // Letra + número
            if (/^[A-Z][0-9]$/.test(valor)) {

                finalizarFluxo();

            } else {

                lc.value = "";
                lc.focus();

            }

        }
        });


    // ===============================
    // ENTER NO LC
    // ===============================

    lc.addEventListener("keydown", function (event) {

        if (event.key !== "Enter") return;

        const valor =
            lc.value.trim().toUpperCase();


        if (/^[A-Z][0-9]$/.test(valor)) {

            finalizarFluxo();

        } else {

            lc.value = "";
            lc.focus();

        }

});


// ===============================
// FINALIZAR
// ===============================

function finalizarFluxo() {

    if (tipoTarefa === "direta") {

            // DRT
            window.location.href = "pickingDRT.html";

        } else if (tipoTarefa === "fracionada") {

            // FRC
            window.location.href = "pickingFRC.html";

        } else if (tipoTarefa === "load") {

            // LOAD
            window.location.href = "case.html";

        } else {

            // Segurança
            window.location.href = "case.html";

        }

    }

}
