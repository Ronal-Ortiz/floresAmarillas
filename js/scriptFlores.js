$(document).ready(function () {
    var nombre = localStorage.getItem("txtNombre");
    if (nombre) {
        let nombreFinal = nombre.trim();
        if(nombre.trim().toUpperCase() === 'KEILA' ||
            nombre.trim().toUpperCase() === 'KEI' ||
            nombre.trim().toUpperCase() === 'TERESA' ||
            nombre.trim().toUpperCase() === 'TERE' ||
            nombre.trim().toUpperCase() === 'CHOCHA' ||
            nombre.trim().toUpperCase() === 'CHOCHITA'){
               nombreFinal = 'Mi Chochita <3. TE AMO';
            }
        $("#divNombre").text("Para " + nombreFinal + " !");
    } else {
        $("#divNombre").text("Nombre no encontrado.");
    }
});