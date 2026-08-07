function atualizarHora() {

    const agora = new Date();

    const hora = String(agora.getHours()).padStart(2,"0");
    const minuto = String(agora.getMinutes()).padStart(2,"0");

    document.getElementById("hora").textContent = hora + ":" + minuto;

}

setInterval(atualizarHora,1000);
atualizarHora();


const entrada = document.getElementById("entrada");

// quantidade pedida
const quantidade = "1";

entrada.addEventListener("keydown", function(event){

    if(event.key !== "Enter") return;

    if(entrada.value.trim() === quantidade){

        window.location.href = "carton.html";

    }else{

        entrada.value = "";
        entrada.focus();

    }

});

entrada.addEventListener("focus", () => {
    entrada.blur();
    entrada.focus();
});

entrada.addEventListener("input", function() {

    const valor = entrada.value.trim();

    if(valor === "1"){
        window.location.href = "carton.html";
        
    }
});    