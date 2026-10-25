import express from 'express'
import router from './routes/index.js'
import db from './config/db.js'

const app = express();

// definir puerto
const port = process.env.PORT || 4000;

// habilitar PUG
app.set('view engine', 'pug')

// obtener año actual
app.use((req, res, next) => {
    const year = new Date();
    res.locals.ActualYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de Viajes'
    return next();
})

// agregar body parser para leer datos formulario
app.use(express.urlencoded({extended: true}));

// definir carpeta Public
app.use(express.static('public'))

// agregar router
app.use('/', router);

const startServer = async () => {
    try {
        await db.authenticate();
        console.log('Base de datos conectada');

        app.listen(port, () => {
            console.log(`Servidor funcionando en el puerto ${port}`);
        });
    } catch (error) {
        console.error('No se pudo conectar a la base de datos; el servidor no se ha iniciado.', error);
        process.exitCode = 1;
    }
};

startServer();