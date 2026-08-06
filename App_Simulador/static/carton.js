function atualizarHora(){

    const agora = new Date();

    const hora = String(agora.getHours()).padStart(2,"0");
    const minuto = String(agora.getMinutes()).padStart(2,"0");

    document.getElementById("hora").textContent = hora + ":" + minuto;

}

setInterval(atualizarHora,1000);
atualizarHora();


const carton = document.getElementById("carton");

const cartonCorreto = "00000203200764777551";

carton.addEventListener("keydown", function(event){

    if(event.key !== "Enter") return;

    if(carton.value.trim() === cartonCorreto){

        // próxima tela
        window.location.href = "conf.html";

    }else{

        carton.value = "";
        carton.focus();

    }

});