$(document).ready(function () {
    //---code
    var nombre = localStorage.getItem("txtNombre");
    let dedicador = "De Ronal Ortiz";
    if (nombre) {
        let nombreFinal = nombre.trim();
        if(nombre.trim().toUpperCase() === 'KEILA' ||
            nombre.trim().toUpperCase() === 'KEI' ||
            nombre.trim().toUpperCase() === 'TERESA' ||
            nombre.trim().toUpperCase() === 'TERE' ||
            nombre.trim().toUpperCase() === 'CHOCHA' ||
            nombre.trim().toUpperCase() === 'CHOCHITA' ||
            nombre.trim().toUpperCase() === 'JHOANA'){
            if(nombre.trim().toUpperCase() === 'JHOANA'){
                    dedicador = "De Yorsk Mendoza"
                    nombreFinal = 'Mi Niña Hermosa';
            }else{
                    nombreFinal = 'Mi Chochita <3. TE AMO';
            }
               
            }
        $("#divNombre").text("Para " + nombreFinal + " !");
    } else {
        $("#divNombre").text("Nombre no encontrado.");
    }
    $("#divDedicador").text(dedicador);
});
