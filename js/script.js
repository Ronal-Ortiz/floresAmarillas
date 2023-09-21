$(document).ready(function () {
    $("#btnIngresar").click(function (evento) {
        evento.preventDefault();
        let txtNombre = $('#txtNombre').val();   
        if (txtNombre.trim() === ''){
                alerta('error','Ingresa un nombre o apódo','Oops...',5000, true)
        }else{
            let fraseFinal;
            let listFrases = [];
            listFrases.push("Cuando se abre una flor, es primavera en todo el mundo.");
            listFrases.push("Siempre hay flores para aquellos que desean verlas.");
            listFrases.push("Las flores son los ojos con que mirar la naturaleza.");
            listFrases.push("La vida es una flor para la cual el amor es la miel.");
            listFrases.push("Donde florecen las flores, hay esperanza.");
            listFrases.push("Sé como una flor que da su fragancia incluso a la mano que la aplastó.");
            listFrases.push("Una flor florece para su propia alegría.");
            listFrases.push('Esta flor amarilla es como la luz en tu vida: brillantes, cálidas y llenas de amor.');
            
            if(txtNombre.trim().toUpperCase() === 'KEILA' ||
            txtNombre.trim().toUpperCase() === 'KEI' ||
            txtNombre.trim().toUpperCase() === 'TERESA' ||
            txtNombre.trim().toUpperCase() === 'TERE' ||
            txtNombre.trim().toUpperCase() === 'CHOCHA' ||
            txtNombre.trim().toUpperCase() === 'CHOCHITA'){
                fraseFinal = "Amore <3 en cada pétalo de esta flor amarilla, hay un pedacito de mi amor por ti."
            }else{
                let numeroAleatorio = Math.floor(Math.random() * listFrases.length) + 1;
                fraseFinal = listFrases[numeroAleatorio];
            }
            
            Swal.fire({
                title: fraseFinal,
                allowOutsideClick: false,
                closeOnClickOutside: false,
                width: 600,
                padding: '3em',
                color: '#716add',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("/images/nyan-cat.gif")
                  left top
                  no-repeat
                `
              }).then((result) => {
                if (result.isConfirmed) {
                alerta('success',txtNombre.trim(),'Bienvenido...',4000,false) 
                localStorage.setItem('txtNombre', txtNombre);
                setTimeout(() => {
                    window.location.href = "floresAmarillas.html";
                }, 4000);
                }
              })

        }

      });
  });

  function alerta(icon, mensaje, titulo, tiempo, buttonOkVisible){
    Swal.fire({
        icon: icon,
        title: titulo,
        text: mensaje,
        timer: tiempo,
        showConfirmButton: buttonOkVisible,
        allowOutsideClick: false,
        closeOnClickOutside: false,
      })
  }