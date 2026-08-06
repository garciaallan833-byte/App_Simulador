function atualizarHora() {

    const agora = new Date();

    const hora = String(agora.getHours()).padStart(2, "0");
    const minuto = String(agora.getMinutes()).padStart(2, "0");

    const relogio = document.getElementById("hora");

    if (relogio) {
        relogio.textContent = hora + ":" + minuto;
    }
}

setInterval(atualizarHora,1000);
atualizarHora();


const entrada = document.getElementById("entrada");
const digito = document.getElementById("digito");

const local = "CK-047-01";
const localSemHifen = local.replace(/-/g, "");

function validar() {

    const codigo = entrada.value.trim().toUpperCase();
    const sufixo = digito.value.trim().toUpperCase();

    if (
        codigo === localSemHifen &&
        /^[A-Z][0-9]$/.test(sufixo)
    ) {
        window.location.href = "quant.html";
    } else {
        entrada.value = "";
        digito.value = "";
        entrada.focus();
    }
}

entrada.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        digito.focus();
    }
});

digito.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        validar();
    }
});