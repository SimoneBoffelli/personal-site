function handleScroll() {
    var scrolledIndicator = document.getElementById("scrolled-indicator");
    if (window.pageYOffset > 300) {
        scrolledIndicator.style.display = "flex";
    } else {
        scrolledIndicator.style.display = "none";
    }
}

// Esegui la funzione handleScroll() all'avvio della pagina
handleScroll();

// Aggiungi un ascoltatore dell'evento scroll alla finestra
window.addEventListener("scroll", handleScroll);