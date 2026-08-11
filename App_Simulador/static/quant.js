function atualizarHora() {

    const agora = new Date();

    const hora = String(agora.getHours()).padStart(2,"0");
    const minuto = String(agora.getMinutes()).padStart(2,"0");

    document.getElementById("hora").textContent = hora + ":" + minuto;

}

setInterval(atualizarHora,1000);
atualizarHora();


const entrada = document.getElementById("entrada");

const dadosSalvos = sessionStorage.getItem("dadosTarefa");


// quantidade pedida
const quantidade = JSON.parse(dadosSalvos).linhas[0]?.quantidade || "";

entrada.addEventListener("keydown", function(event){

    if(event.key !== "Enter") return;

    if(entrada.value.trim() === quantidade){

        window.location.href = "carton.html";

    }else{

        entrada.value = "";
        entrada.focus();

    }

});

function formatarPosicao(posicao) {
    const novaPosicao = posicao.slice(0, 2) + "-" + posicao.slice(2, 5) + "-" + posicao.slice(5, 7);
    return novaPosicao.toUpperCase();
}

const posicao = document.getElementById("posicao");
const tarefa = document.getElementById("tarefa");
const sku = document.getElementById("sku");
const total = document.getElementById("total");
const tbp = document.getElementById("tbp");

total.textContent = quantidade;
tbp.textContent = quantidade;
posicao.textContent = formatarPosicao(JSON.parse(dadosSalvos).linhas[0]?.posicao || "");
tarefa.textContent = JSON.parse(dadosSalvos).linhas[0]?.tarefa || "";
sku.textContent = JSON.parse(dadosSalvos).linhas[0]?.sku || "";

const tipoTarefa = sessionStorage.getItem("tipoTarefa");

entrada.addEventListener("input", function() {

    const valor = entrada.value.trim();

    if (valor === quantidade) {

        if (tipoTarefa === "fracionada") {

            window.location.href = "carton.html";

        } else if (tipoTarefa === "direta") {

            window.location.href = "conf.html";
        }
    }
});