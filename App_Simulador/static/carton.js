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
// DADOS DA TAREFA
// ===============================

const dadosSalvos =
    sessionStorage.getItem("dadosTarefa");

if (!dadosSalvos) {

    window.location.href = "case.html";

}

const tarefa = JSON.parse(dadosSalvos);


// ===============================
// CARTONS
// ===============================

const cartons = tarefa['linhas'][0].cartons;

const entrada =
    document.getElementById("carton");

const cartoInfo = document.getElementById('carton-info')
const skuInfo = document.getElementById('sku')
const qtdInfo = document.getElementById('quantidade')
const qtdInfo2 = document.getElementById('entrada')

skuInfo.textContent = tarefa['linhas'][0]['sku']
qtdInfo.textContent = tarefa['linhas'][0]['quantidade']
qtdInfo2.value = tarefa['linhas'][0]['quantidade']
qtdInfo2.style = "text-align: right;"


// ===============================
// CARTON ATUAL
// ===============================

let cartonAtual = Number(
    sessionStorage.getItem("cartonAtual")
);

if (isNaN(cartonAtual)) {
    cartonAtual = 0;
}

cartoInfo.textContent = cartons[cartonAtual]

// ===============================
// VALIDAR CARTON
// ===============================


function validarCarton() {

    const valor =
        entrada.value.trim().toUpperCase();


    // Carton atual esperado
    const cartonCorreto =
        cartons[cartonAtual].toUpperCase(); 


    // ===============================
    // VERIFICA
    // ===============================

    if (valor === cartonCorreto) {

        cartonAtual++;

        sessionStorage.setItem(
            "cartonAtual",
            cartonAtual
        );

        cartoInfo.textContent = cartons[cartonAtual]


        // ===============================
        // TERMINOU TODOS?
        // ===============================

        if (cartonAtual >= cartons.length) {

            // Todos os cartons foram bipados
            sessionStorage.removeItem("cartonAtual");

            window.location.href = "conf.html";

            return;
        }


        // ===============================
        // PRÓXIMO CARTON
        // ===============================

        entrada.value = "";
        entrada.focus();

    } else {

        // Carton errado
        entrada.value = "";
        entrada.focus();

    }

}


// ===============================
// BIP AUTOMÁTICO
// ===============================

entrada.addEventListener("input", function () {

    const valor = entrada.value.trim();

    const cartonCorreto =
        cartons[cartonAtual];

    if (valor.length === cartonCorreto.length) {

        validarCarton();

    }

});


// ===============================
// ENTER
// ===============================

entrada.addEventListener("keydown", function (event) {

    if (event.key !== "Enter") return;

    validarCarton();

});