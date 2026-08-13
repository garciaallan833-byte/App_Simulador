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
// CAMPO DO CONTAINER
// ===============================

const entrada = document.getElementById("entrada");


// ===============================
// F12 → VOLTAR
// ===============================

document.addEventListener("keydown", function(event) {

    if (event.key === "F12") {

        event.preventDefault();

        window.location.href = "case.html";

    }

});


// ===============================
// MENSAGEM DE ERRO
// ===============================

function mostrarErro() {

    let erro = document.getElementById("erro-task");

    if (!erro) {

        erro = document.createElement("div");

        erro.id = "erro-task";
        erro.textContent = "Invld cont/tsk/trk#";

        erro.style.color = "white";
        erro.style.marginTop = "8px";

        entrada.parentElement.appendChild(erro);

    }

}


// ===============================
// LIMPAR MENSAGEM
// ===============================

function limparErro() {

    const erro = document.getElementById("erro-task");

    if (erro) {
        erro.remove();
    }

}


// ===============================
// VALIDAR CONTAINER / PLT
// ===============================

function validarContainer() {

    const valor = entrada.value.trim().toUpperCase();

    limparErro();


    // ===============================
    // PRECISA TER EXATAMENTE 20 CARACTERES
    // ===============================

    if (valor.length !== 20) {

        mostrarErro();

        entrada.value = "";
        entrada.focus();

        return;

    }


    // ===============================
    // PROCURA O CONTAINER
    // ===============================

    const container = containers[valor];


    // ===============================
    // CONTAINER CADASTRADO
    // ===============================

    if (container) {

        // Guarda o número do container
        sessionStorage.setItem("container", valor);

        // Guarda os dados encontrados
        sessionStorage.setItem(
            "dadosContainer",
            JSON.stringify(container)
        );

        // Guarda diretamente o Stage
        sessionStorage.setItem(
            "stage",
            container.stage
        );


        // ===============================
        // SEGUE PARA A TELA DE STAGE
        // ===============================

        window.location.href = "stage.html"

    }


    // ===============================
    // CONTAINER NÃO CADASTRADO
    // ===============================

    else {

        mostrarErro();

        entrada.value = "";
        entrada.focus();

        return;

    }

}


// ===============================
// ENTER
// ===============================

entrada.addEventListener("keydown", function(event) {

    if (event.key !== "Enter") return;

    validarContainer();

});


// ===============================
// BIP AUTOMÁTICO
// ===============================

entrada.addEventListener("input", function() {

    const valor = entrada.value.trim();

    // Ao completar 20 caracteres,
    // valida automaticamente

    if (valor.length === 20) {

        validarContainer();

    }

});