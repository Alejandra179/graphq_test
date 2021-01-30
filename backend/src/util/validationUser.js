module.exports.validacionRegistro= (
    name,
    username,
    email,
    password,
    confirmPassword,
    role
) =>{
    const errors = {};
    
    if(name.trim()===""){
        errors.name = 'El nombre no puede ser vacio'
    }
    else{
        let nameRegex=/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g
        if(!name.match(nameRegex)){
            errors.name='Ingrese un nombre válido'
        }
    }
    if(username.trim()===""){
        errors.username = 'El nombre de usuario no puede ser vacio'
    }
    if(password.length<6){
            errors.password = 'La contraseña debe contener al menos 6 caracteres'
    }
    else{
        if(password != confirmPassword){
                errors.password = 'Las contraseñas no coinciden'
            }
    }
    if(email.trim()===""){
        errors.email = 'Debe ingresar un correo electrónico'
    }
    else{
        let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
        if(!email.match(emailRegex)){
            errors.email = 'El correo es inválido'
        }

    }

    return{
        errors,
        valid: Object.keys(errors).length < 1
    }
}

module.exports.validacionLogin = (email,password)=>{
    const errors = {};
    if(email.trim() ===""){
        errors.email = 'Ingrese un correo electrónico';
    }
    if(password.trim() ===""){
        errors.password ='Ingrese una contraseña';
    }
    return{
        errors,
        valid: Object.keys(errors).length < 1
    }
}