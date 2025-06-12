document.addEventListener('DOMContentLoaded', function() {
    // Il codice qui dentro verrà eseguito quando la pagina è completamente caricata
    // The code inside here will run when the page is fully loaded

    var block = document.getElementById('pippo');

    block.addEventListener('click', function() {
        console.log("block clicked");
        if (block.getAttribute('class') == 'red') {
            block.setAttribute('class', 'blue');
        } else {
            block.setAttribute('class', 'red');
        }

        // document.getElementsByClassName('un-buon-partito')[0].setAttribute('class', 'un-partito-migliore');

        // Esegui un'operazione su tutti gli elementi con la classe 'un-buon-partito'
        var elements = document.getElementsByClassName('un-buon-partito');
        Array.from(elements).forEach(function(el) {
            el.setAttribute('class', 'un-buon-partito un-partito-migliore');
        });


    });

});

