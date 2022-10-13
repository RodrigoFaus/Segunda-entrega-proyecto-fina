

//Array donde se almacenaran los prodructos cargados
const arrayPrincipal = []


//Constructor para generar los productos y su metodo
class Principal {
    constructor(principal, descripción, precio) {
        this.principal = principal
        this.descrip = descripción
        this.precio = parseFloat(precio)
    }

    muestroMenuObjeto(){
        return (`${this.principal} - ${this.descrip} - ${this.precio}`)
    }

}


//Función que carga al producto al array y luego pregunta si se quiere ver el menú
function cargoProductoPrincipal() {

    let prodPrincipal = ingresoProductoPrincipal();
    if (prodPrincipal) {
        arrayPrincipal.push(prodPrincipal)
        preguntoDeNuevo()
        modoCliente()  
    } 
}


//Función que pregunta, al usuario, si desea cargar otro producto
function preguntoDeNuevo() {
    let check = true

    while (check) {
        let pregunta = confirm("Desea cargar otro producto ?")

        if (pregunta) {
            cargoProductoPrincipal()
        }
        else {
            check = false
        }

        return false
    }
}


//Función de la carga de los datos del producto
function ingresoProductoPrincipal() {
    let checkeo = true

    while (checkeo) {

        let msj = ""

        let principal = prompt("Ingrese principal")
        let descripcion = prompt("Ingrese descripción")
        let precio = parseFloat(prompt("Ingrese un precio"))

        if (principal == null || principal == "" ) {
            msj += `\n- El campo de Principal no puede quedar vacío, por favor, ingrese un producto principal`
        }

      
        if (descripcion == null || descripcion == "" ) {
            msj += ` \n- El campo de descripcion no puede quedar vacío, por favor, ingrese una descripción`
        }

        if (isNaN(precio) || precio == "") {
            msj += ` \n- Debe ingresar un valor númerico al poner el precio`
        }

        if (msj != "") {
            alert(msj)
            checkeo = confirm("Desea cargar nuevamente los datos ?")

        } else {
            return new Principal(principal, descripcion, precio)
        }



    }

    return false

    
}

cargoProductoPrincipal()




// Función para ver el menú desde el lado del cliente
function modoCliente() {
    let preguntoCliente = confirm("Bienvenido al modo cliente\nDesea ver el menú ?")
    
    if(preguntoCliente){
        mostrarMenu()
    }
    else(alert("Vuelva prontos"))

}


//Función que muestra el menú
function mostrarMenu() {

    let msj = "El menu es:"

    arrayPrincipal.forEach((item) => {
        msj += "\n" + item.muestroMenuObjeto();
    })
    
    alert(msj)
}