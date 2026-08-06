function atualizarHora(){

    const agora = new Date();

    const hora = String(agora.getHours()).padStart(2,"0");
    const minuto = String(agora.getMinutes()).padStart(2,"0");

    document.getElementById("hora").textContent = hora + ":" + minuto;

}

setInterval(atualizarHora,1000);
atualizarHora();

const stage = document.getElementById("stage");
const lc = document.getElementById("lc");

const stageCorreto = "STG0641";

stage.addEventListener("keydown", function(event){

    if(event.key !== "Enter") return;

    if(stage.value.trim().toUpperCase() === stageCorreto){

        lc.focus();

    }else{

        stage.value = "";
        stage.focus();

    }

});

lc.addEventListener("keydown", function(event){

    if(event.key !== "Enter") return;

    const valor = lc.value.trim().toUpperCase();

    if(/^[A-Z][0-9]$/.test(valor)){

        // próxima tela
        window.location.href = "pickingFRC.html";

    }else{

        lc.value = "";
        lc.focus();

    }

});