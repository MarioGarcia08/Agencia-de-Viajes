import { Testimonial } from "../models/Testimoniales.js";

const guardarTestimonial = async (req, res) => {
    // validar formulario
    const {nombre, correo, mensaje} = req.body;
    const errores = []

    if(nombre.trim() === ''){
        errores.push({mensaje: 'Nombre vacio'})
    }
    if(correo.trim() === ''){
        errores.push({mensaje: 'Correo vacio'})
    }
    if(mensaje.trim() === ''){
        errores.push({mensaje: 'Mensaje vacio'})
    }

    if(errores.length > 0){
        // consultar testimonial existente
        const testimoniales = await Testimonial.findAll();
        //mostrar vista con errores
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        })
    }
    else{
        // almacenar en bbdd
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });
            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error)
        }
    }
    
}

export {
    guardarTestimonial
}