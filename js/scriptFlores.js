c$(document).ready(function () {
    var nombre = localStorage.getItem("txtNombre");
    if (nombre) {
        let nombreFinal = nombre.trim();
        if(nombre.trim().toUpperCase() === 'KEILA' ||
            nombre.trim().toUpperCase() === 'KEI' ||
            nombre.trim().toUpperCase() === 'TERESA' ||
            nombre.trim().toUpperCase() === 'TERE' ||
            nombre.trim().toUpperCase() === 'CHOCHA' ||
            nombre.trim().toUpperCase() === 'CHOCHITA' ||
            nombre.trim().toUpperCase() === 'BELLA'){
            if(nombre.trim().toUpperCase() === 'BELLA'){
                    $("#divDedicador").text("De Yorks Mendoza");
                    nombreFinal = 'Mi Niña Hermosa';
            }else{
                    nombreFinal = 'Mi Chochita <3. TE AMO';
            }
               
            }
        $("#divNombre").text("Para " + nombreFinal + " !");
    } else {
        $("#divNombre").text("Nombre no encontrado.");
    }
});
