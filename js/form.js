const nombredelusuarioField = document.querySelector("[name=nombreUsuario]");
const apellidodelusuarioField = document.querySelector("[name=apellidoUsuario]");
const dnidelusuarioField = document.querySelector("[name=DNI]");
const emaildelusuarioField = document.querySelector("[name=email]");
const localidad_delusuarioField = document.querySelector("[name=LocalidadUsuario]");
const barriodelusuarioField = document.querySelector("[name=BarrioUsuario]");
const calle_delusuarioField = document.querySelector("[name=CalleUsuario]");
const mensaje_delusuarioField = document.querySelector("[name=mensaje]");

nombredelusuarioField.addEventListener("blur", function (e){
    const field = e.target;
    const fieldValue = e.target.value;
    //Si el nombre del campo es igual a 0, su longitud
    if (fieldValue.length == 0){
        //A este campo asignale esta clase invalid
        field.classList.add("invalid")
        //A este campo tomale el siguiente elemento hermano asignale la clase error
        field.nextElementSibling.classList.add("error");
        //A este campo tomale el siguiente elemento hermano y tirale el proximo texto
        field.nextElementSibling.innerText = "El nombre es requerido en este formulario";
    } else{
        //A esta clase borrale la clase invaled
        field.classList.remove("invalid")
        //A este campo tomale el siguiente elemento hermano y eliminale la clase
        field.nextElementSibling.classList.remove("error");
        //A este campo tomale el siguiente elemento hermano y eliminale el texto
        field.nextElementSibling.innerText = "";
    }

})

apellidodelusuarioField.addEventListener("blur", function (e){
    const field = e.target;
    const fieldValue = e.target.value;
    //Si el nombre del campo es igual a 0, su longitud
    if (fieldValue.length == 0){
        //A este campo asignale esta clase invalid
        field.classList.add("invalid")
        //A este campo tomale el siguiente elemento hermano asignale la clase error
        field.nextElementSibling.classList.add("error");
        //A este campo tomale el siguiente elemento hermano y tirale el proximo texto
        field.nextElementSibling.innerText = "El apellido es requerido en este formulario";
    } else{
        //A esta clase borrale la clase invaled
        field.classList.remove("invalid")
        //A este campo tomale el siguiente elemento hermano y eliminale la clase
        field.nextElementSibling.classList.remove("error");
        //A este campo tomale el siguiente elemento hermano y eliminale el texto
        field.nextElementSibling.innerText = "";
    }

})

dnidelusuarioField.addEventListener("blur", function (e){
    const field = e.target;
    const fieldValue = e.target.value;
    //Si el nombre del campo es igual a 0, su longitud
    if (fieldValue.length == 0){
        //A este campo asignale esta clase invalid
        field.classList.add("invalid")
        //A este campo tomale el siguiente elemento hermano asignale la clase error
        field.nextElementSibling.classList.add("error");
        //A este campo tomale el siguiente elemento hermano y tirale el proximo texto
        field.nextElementSibling.innerText = "El DNI es requerido en este formulario";
    } else{
        //A esta clase borrale la clase invaled
        field.classList.remove("invalid")
        //A este campo tomale el siguiente elemento hermano y eliminale la clase
        field.nextElementSibling.classList.remove("error");
        //A este campo tomale el siguiente elemento hermano y eliminale el texto
        field.nextElementSibling.innerText = "";
    }

})

emaildelusuarioField.addEventListener("blur", function (e){
    const field = e.target;
    const fieldValue = e.target.value;
    //Si el nombre del campo es igual a 0, su longitud
    if (fieldValue.length == 0){
        //A este campo asignale esta clase invalid
        field.classList.add("invalid")
        //A este campo tomale el siguiente elemento hermano asignale la clase error
        field.nextElementSibling.classList.add("error");
        //A este campo tomale el siguiente elemento hermano y tirale el proximo texto
        field.nextElementSibling.innerText = "El gmail es requerido en este formulario";
    } else{
        //A esta clase borrale la clase invaled
        field.classList.remove("invalid")
        //A este campo tomale el siguiente elemento hermano y eliminale la clase
        field.nextElementSibling.classList.remove("error");
        //A este campo tomale el siguiente elemento hermano y eliminale el texto
        field.nextElementSibling.innerText = "";
    }

})

localidad_delusuarioField.addEventListener("blur", function (e){
    const field = e.target;
    const fieldValue = e.target.value;
    //Si el nombre del campo es igual a 0, su longitud
    if (fieldValue.length == 0){
        //A este campo asignale esta clase invalid
        field.classList.add("invalid")
        //A este campo tomale el siguiente elemento hermano asignale la clase error
        field.nextElementSibling.classList.add("error");
        //A este campo tomale el siguiente elemento hermano y tirale el proximo texto
        field.nextElementSibling.innerText = "La localidad es requerido en este formulario";
    } else{
        //A esta clase borrale la clase invaled
        field.classList.remove("invalid")
        //A este campo tomale el siguiente elemento hermano y eliminale la clase
        field.nextElementSibling.classList.remove("error");
        //A este campo tomale el siguiente elemento hermano y eliminale el texto
        field.nextElementSibling.innerText = "";
    }

})


barriodelusuarioField.addEventListener("blur", function (e){
    const field = e.target;
    const fieldValue = e.target.value;
    //Si el nombre del campo es igual a 0, su longitud
    if (fieldValue.length == 0){
        //A este campo asignale esta clase invalid
        field.classList.add("invalid")
        //A este campo tomale el siguiente elemento hermano asignale la clase error
        field.nextElementSibling.classList.add("error");
        //A este campo tomale el siguiente elemento hermano y tirale el proximo texto
        field.nextElementSibling.innerText = "El barrio es requerido en este formulario";
    } else{
        //A esta clase borrale la clase invaled
        field.classList.remove("invalid")
        //A este campo tomale el siguiente elemento hermano y eliminale la clase
        field.nextElementSibling.classList.remove("error");
        //A este campo tomale el siguiente elemento hermano y eliminale el texto
        field.nextElementSibling.innerText = "";
    }

})



calle_delusuarioField.addEventListener("blur", function (e){
    const field = e.target;
    const fieldValue = e.target.value;
    //Si el nombre del campo es igual a 0, su longitud
    if (fieldValue.length == 0){
        //A este campo asignale esta clase invalid
        field.classList.add("invalid")
        //A este campo tomale el siguiente elemento hermano asignale la clase error
        field.nextElementSibling.classList.add("error");
        //A este campo tomale el siguiente elemento hermano y tirale el proximo texto
        field.nextElementSibling.innerText = "La calle es requerido en este formulario";
    } else{
        //A esta clase borrale la clase invaled
        field.classList.remove("invalid")
        //A este campo tomale el siguiente elemento hermano y eliminale la clase
        field.nextElementSibling.classList.remove("error");
        //A este campo tomale el siguiente elemento hermano y eliminale el texto
        field.nextElementSibling.innerText = "";
    }

})



mensaje_delusuarioField.addEventListener("blur", function (e){
    const field = e.target;
    const fieldValue = e.target.value;
    //Si el nombre del campo es igual a 0, su longitud
    if (fieldValue.length == 0){
        //A este campo asignale esta clase invalid
        field.classList.add("verdadero")
        //A este campo tomale el siguiente elemento hermano asignale la clase error
        field.nextElementSibling.classList.add("true");
        //A este campo tomale el siguiente elemento hermano y tirale el proximo texto
        field.nextElementSibling.innerText = "El mensaje es opcional en este formulario";
    } else{
        //A esta clase borrale la clase invaled
        field.classList.remove("verdadero")
        //A este campo tomale el siguiente elemento hermano y eliminale la clase
        field.nextElementSibling.classList.remove("true");
        //A este campo tomale el siguiente elemento hermano y eliminale el texto
        field.nextElementSibling.innerText = "";
    }

})
