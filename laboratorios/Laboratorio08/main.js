let carnet_field = document.querySelector("#carnet_field")
let schedule_dropdown = document.querySelector("#schedule_field")
let late_switch = document.querySelector("#late_switch")
let submit_btn = document.querySelector("#submit_btn")

let table_body = document.querySelector("#table_body")

//Esta expresion regular fue arreglada para recibir solo 8 caracteres numericos
let carnet_regex = new RegExp('^[0-9]{8}$')



let addStudent = (carnet, schedule, late) => {
    let new_row = document.createElement("tr")
    let datetime = new Date()

    new_row.className = "table_active"
    new_row.innerHTML =
    //Agregamos la nueva fila solamente que esta vez tendra dos campos mas, poner atencion en las clases que se le aplican 
    // porque esas utilizaremos para mandar a llamar y agregarles eventos y funciones
        `<th scope='row'>${carnet}</th>
        <td>${schedule}</td>
        <td>${datetime.toLocaleString()}</td>
        <td>${late}</td>
        <td><button type="button" class="btn btn-danger delete" disabled>Drop</button></td>
        <td><input class="form-control confirm" type="text" name="carnet"></td>
        `

    table_body.appendChild(new_row)

    //SOLUCIÓN PARTE 2

    //Primero obtenemos todos los campos necesarios, en este caso los text field, se nos retornara una lista 
    let confirm_field = document.querySelectorAll('.confirm')
    //Ahora recorreremos esta lista de text field para agregar una un funcion a cada uno 
    confirm_field.forEach(element => {
        // "element" se refiere a cada text field, es como el indice "i" que usualmente ocupamos
        //NOTA: si no se entiende como funciona el "for each" preguntar a san google o en el proximo labo :D
        element.addEventListener("keyup", (event) => {
            //Añadimos el listener en el teclado, ya que cada letra que se agrege el navegador debera confirmar si es o no igual 
            // al carnet de la fila

            //Guardamos en una variable el boton de "delete" de la respectiva fila.
            //Para llegar al boton sera necesario desplazarce en el DOM y para eso sirve las funciones usada aqui abajo
            //Dudas se resolveran en el otro labo o con san google
            let btn_drop = element.parentElement.previousElementSibling.firstChild

            //Ya teniendo el boton de la fila vamos a comprobar si en la casilla de confirmacion se esta escribiendo el carnet correcto
            //Se compara el texto del element (text field) con el carnet que este en la primera comlumna de la fila
            if(element.value == element.parentElement.parentElement.firstChild.firstChild.textContent){
                    //Si son iguales pues habilitamos el boton para comenzar
                    btn_drop.disabled = false
                    //Ahora añadimos el listener del click al boton de la fila
                    btn_drop.addEventListener("click", (event) => {
                        // una vez se de click se debera saber en que fila esta y para eso usamos parentElement que nos dara al papá
                        // pero el padre directo es un td por lo que llamamos al papá del td osea el tr que es la fila
                        row = element.parentElement.parentElement;
                        //Una vez teniendo la fila mandamos a llamar a su papá que en este caso es table_body una variable global
                        //y la removemos con removeChild() 
                        table_body.removeChild(row)
                        
                    })
                }else{
                    //Si no no hacemos nada :v
                    btn_drop.disabled = true
                }
        })
    })
    
    //SOLUCIÓN PARTE 1 
    // Seleccionamos todos los boton delete
    // let btn_delete = document.querySelectorAll('.delete')

    // Ahora los recoremos ya que es una lista
    // btn_delete.forEach(element => {

    //Agregamos un listener a cada boton
    //     element.addEventListener("click", (event) => {

    //Buscamos la fila a la que corresponde y eliminamos
    //         row = element.parentElement.parentElement;
    //         table_body.removeChild(row)       
    //     })
    // })
    // Esta funcion hace practicamente lo de arriba pero sin la confirmación asi que tenia hueva de explicarla a detalle :v 
    // Como dije cualquier duda la resuelvo en labo o con san google
    
    //OJO: ESTO NO ME DIJIERON QUE LO HISIERA PERO LO HAGO PARA QUE SE VEAN AFECTADOS PARA EL PARCIAL YA QUE ES EL SABADO
    // ASI QUE NO VAYAN A ANDAR REGANDO EL RUMOR XD 

    //POSDATA: PARA CONSULTAS ESTOY DISPONIBLE AHORA DE 1:30 a 3:30 MAÑANA LO MAS PROBABLE ES QUE NO VENGA :D

}

let parseLateSwitch = (value) => {
    if (value) {
        return "Tarde"
    }
    return "A tiempo"
}

submit_btn.addEventListener("click", () => {
    let carnet = carnet_field.value
    let schedule = schedule_dropdown.options[schedule_dropdown.selectedIndex].text
    let late = parseLateSwitch(late_switch.checked)

    if (carnet_regex.test(carnet)) {
        addStudent(carnet, schedule, late)
    } else {
        alert("Formato de carnet no valido")
    }
})

carnet_field.addEventListener("keyup", (event) => {
    let keyCode = event.keyCode
    let carnet = carnet_field.value

    if (keyCode == 13) {
        submit_btn.click()
    }

    if (carnet_regex.test(carnet)) {
        submit_btn.disabled = false;
    } else {
        submit_btn.disabled = true;
    }
})


