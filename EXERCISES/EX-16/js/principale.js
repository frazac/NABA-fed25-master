document.addEventListener('DOMContentLoaded', function() {
    // Il codice qui dentro verrà eseguito quando la pagina è completamente caricata
    // The code inside here will run when the page is fully loaded

    var block = document.getElementById('pippo');

    block.addEventListener('click', function() {
        console.log(block);
    if (block.getAttribute('class') == 'red') {
        block.setAttribute('class', 'blue');
    } else {
        block.setAttribute('class', 'red');
    }



    });

});

