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
// DADOS DA TASK
// ===============================

const dadosSalvos = sessionStorage.getItem("dadosTarefa");


// ===============================
// SE NÃO EXISTIR TASK
// ===============================


// ===============================
// SE EXISTIR TASK - SUBSTITUIR HTML
// ===============================

const elementoTask = document.getElementById("tarefa");
const elementoPosicao = document.getElementById("posicao");
const elementoSku = document.getElementById("sku");

if (dadosSalvos) {
    elementoTask.textContent = JSON.parse(dadosSalvos).linhas[0].tarefa;
    elementoSku.textContent = JSON.parse(dadosSalvos).linhas[0].sku;
    elementoPosicao.textContent = formatarPosicao(JSON.parse(dadosSalvos).linhas[0].posicao);
}

function formatarPosicao(posicao) {
    const novaPosicao = posicao.slice(0, 2) + "-" + posicao.slice(2, 5) + "-" + posicao.slice(5, 7);
    return novaPosicao.toUpperCase();
}

if (!dadosSalvos) {

    document.querySelector(".conteudo").innerHTML = `
        <div class="linha">
            <span class="texto-branco">Invalid Task</span>
        </div>
    `;

} else {

    const dadosTarefa = JSON.parse(dadosSalvos);

    // Primeira posição da tarefa
    const linhaAtual = dadosTarefa.linhas[0];

    const posicaoCorreta = linhaAtual.posicao;

    // ===============================
    // CAMPOS
    // ===============================

    const entradaGrande = document.querySelector(".qty-grande");
    const entradaPequena = document.querySelector(".qty-pequeno");


    // ===============================
    // POSIÇÃO
    // ===============================

    entradaGrande.addEventListener("input", function () {

        const valor = entradaGrande.value
            .trim()
            .toUpperCase();

        const posicaoSemHifen = posicaoCorreta
            .replace(/-/g, "")
            .toUpperCase();


        if (valor.length === posicaoSemHifen.length) {

            if (valor === posicaoSemHifen) {

                entradaPequena.focus();

            } else {

                entradaGrande.value = "";
                entradaGrande.focus();

            }

        }

    });


    // ===============================
    // LC
    // ===============================

    entradaPequena.addEventListener("input", function () {

        const valor = entradaPequena.value
            .trim()
            .toUpperCase();


        if (valor.length === 2) {

            if (/^[A-Z][0-9]$/.test(valor)) {

                window.location.href = "quant.html";

            } else {

                entradaPequena.value = "";
                entradaPequena.focus();

            }

        }

    });

}