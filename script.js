function apri(id) {

    document.querySelectorAll(".pagina").forEach(p => {
        p.style.display = "none";
    });

    let sezione = document.getElementById(id);
    sezione.style.display = "block";

    sezione.scrollIntoView({
        behavior: "smooth"
    });
}

// consiglio casuale
function consiglio() {
    let frasi = [
        "Usa password complesse",
        "Proteggi i tuoi dati personali",
        "Non fidarti dei link sospetti",
        "Controlla sempre le fonti",
        "Attiva la verifica a due fattori"
    ];

    document.getElementById("consiglio").innerText =
        frasi[Math.floor(Math.random() * frasi.length)];
}
``