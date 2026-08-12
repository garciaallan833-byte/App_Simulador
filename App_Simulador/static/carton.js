function atualizarHora(){

    const agora = new Date();

    const hora = String(agora.getHours()).padStart(2,"0");
    const minuto = String(agora.getMinutes()).padStart(2,"0");

    document.getElementById("hora").textContent = hora + ":" + minuto;

}

setInterval(atualizarHora,1000);
atualizarHora();


const carton = document.getElementById("carton");

const dadosSalvos = window.sessionStorage.getItem('dadosTarefa')

const cartonCorreto = JSON.parse(dadosSalvos)['linhas'][0].cartons[0];

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

entrada.addEventListener("focus", () => {
    entrada.blue();
    entrada.focus();
});

carton.addEventListener("input", function() {

    const valor = carton.value.trim();
    if(valor.length === cartonCorreto.length){
        if(valor === cartonCorreto){
            // próxima tela
            window.location.href = "conf.html";
        }else{
            carton.value = "";
            carton.focus();
        }
    }
});