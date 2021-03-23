
// Sfruttando quando visto questa mattina a lezione, riprodurre
// la dropdown (menu in alto) che trovate al sito di Revolut.


function dropdownRevolut() {

    $('.dropdown-item').hover( function () {
            $('.dropdown-menu', this).slideDown();},

        function () {
            $('.dropdown-menu', this).slideUp();
        }
    );
};



function init() {

    dropdownRevolut();
}
$(document).ready(init);