document.addEventListener("keydown", function(event) {
if(event.key === "F12"){
    if(window.location.pathname.endsWith("pickingFRC.html")){
        event.preventDefault();
        window.location.href = "case.html";
    } else if (window.location.pathname.endsWith("case.html")) {
            window.location.href = "../templates/index.html";
        } else {
            event.preventDefault();
            history.back();

        }}
    });