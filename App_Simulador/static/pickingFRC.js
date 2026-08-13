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
// CAMPO DA TASK
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
// MENSAGEM
// ===============================

function mostrarErro(mensagem){
    
    let erro = document.getElementById("erro-task");

    if (!erro) {

        erro = document.createElement("div");

        erro.id = "erro-task"

        erro.style.color = "white"
        erro.style.marginTop = "8px";

        entrada.parentElement.appendChild(erro);
    }

    erro.textContent = mensagem;

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
// VALIDAR TASK
// ===============================

function validarTask() {

    const valor = entrada.value.trim();

    limparErro();

    // Precisa ter exatamente 10 números
    if (!/^\d{10}$/.test(valor)) {

        mostrarErro("Invalid Task");

        entrada.value = "";
        entrada.focus();

        return;

    }


    // ===============================
    // PROCURA NO DICIONÁRIO
    // ===============================

    const tarefa = tarefas[valor];

    // ===============================
    // TASK CADASTRADA
    // ===============================

    if (!tarefa) {

        sessionStorage.setItem("task", valor);

        sessionStorage.removeItem("dadosTarefa");
        
        mostrarErro("Task Not Found");

        entrada.value = "";
        entrada.focus();

        return;
    }

    if (tarefa.tipo !== "fracionada") {

        sessionStorage.setItem("task", valor);

        sessionStorage.removeItem("dadosTarefa");

        mostrarErro("Invalid Task Type");

        entrada.value = "";
        entrada.focus();

        return;
    }

    sessionStorage.setItem("task", valor);

    sessionStorage.setItem(
        "dadosTarefa",
        JSON.stringify(tarefa)
    );

    // ===============================
    // SEGUE PARA POSITION
    // ===============================
    window.location.href = "position.html";
}

// ===============================
// ENTER
// ===============================

entrada.addEventListener("keydown", function(event) {

    if (event.key !== "Enter") return;

    validarTask();

});


// ===============================
// BIP AUTOMÁTICO
// ===============================

entrada.addEventListener("input", function() {

    const valor = entrada.value.trim();

    if (valor.length === 10) {

        validarTask();

    }

});