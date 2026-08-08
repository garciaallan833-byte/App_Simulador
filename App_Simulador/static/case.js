function atualizarHora() {

    const agora = new Date();

    const hora = String(agora.getHours()).padStart(2,"0");
    const minuto = String(agora.getMinutes()).padStart(2,"0");

    const relogio = document.getElementById("hora");

    if(relogio){
        relogio.textContent = hora + ":" + minuto;
    }

}

setInterval(atualizarHora,1000);
atualizarHora();

const entrada = document.getElementById("entrada");

entrada.addEventListener("keydown", function(event){

    if(event.key !== "Enter") return;

    const valor = entrada.value.trim();

    if (valor === "1") {
        
        sessionStorage.setItem("tipoTarefa", "fracionada");
        
        window.location.href = "pickingFRC.html";

    } else if (valor === "2") {

        sessionStorage.setItem("tipoTarefa", "direta");

        window.location.href = "pickingDRT.html";
    } else {
        entrada.value = "";
        entrada.focus();
    }

});

entrada.addEventListener("focus", () => {
    entrada.blur();
    entrada.focus();
});