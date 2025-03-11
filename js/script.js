document.addEventListener("DOMContentLoaded", function() {
    // Il codice qui dentro verrà eseguito quando la pagina è completamente caricata
    var acc = document.getElementsByClassName("accordion");
    var i;
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function(event) {
            // Controlla se l'elemento cliccato è un link o un elemento cliccabile
            if (event.target.tagName === 'A' || event.target.tagName === 'BUTTON') {
                return; // Segui il link e non attivare l'accordion
            }

            this.classList.toggle("active");

    });
  }
});
