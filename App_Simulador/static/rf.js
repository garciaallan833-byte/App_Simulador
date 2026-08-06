document.addEventListener("keydown", function(event) {
if(event.key === "F12"){
    if(window.location.pathname.endsWith("pickingFRC.html")){
        event.preventDefault();
        window.location.href = "case.html";
    } else if (window.location.pathname.endsWith("case.html")) {
            window.location.href = "/index.html";
        } else {
            event.preventDefault();
            history.back();

        }}
    });

// const input_texto = document.getElementById("entrada");

// // input_texto.addEventListener("input", (dado)=>{
// //     if(dado.value.length == 10) {
// //         window.location.href = 'position.html'
// //     }
// // })