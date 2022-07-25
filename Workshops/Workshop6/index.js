var contador = 0;
function guardar() {
    const persona = {
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        telefono: document.getElementById("telefono").value
    }
    contador = contador + 1;
    var item = 'persona' + contador;
    window.localStorage.setItem(item, JSON.stringify(persona));//guarda en el storage, lo mete de tipo persona

    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("telefono").value = "";
};

function imprimir() {
    for (let i = 1; i <= contador; i++) {
        console.log(JSON.parse(window.localStorage.getItem('persona' + i)));
        i++;//martillazo
    }
    window.localStorage.clear();
}
