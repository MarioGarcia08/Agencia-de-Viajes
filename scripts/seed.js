import db from '../config/db.js';
import { Testimonial } from '../models/Testimoniales.js';
import { Viaje } from '../models/Viaje.js';

const viajes = [
    {
        titulo: 'Río de Janeiro: playas y samba',
        precio: '$1,250',
        fecha_ida: '2027-06-15',
        fecha_vuelta: '2027-06-22',
        imagen: 'rio',
        descripcion: 'Descubre las playas de Copacabana e Ipanema, el Cristo Redentor y el ambiente único de Río de Janeiro.',
        disponibles: '12',
        slug: 'rio-de-janeiro-playas-y-samba'
    },
    {
        titulo: 'París romántico',
        precio: '$1,480',
        fecha_ida: '2027-07-08',
        fecha_vuelta: '2027-07-15',
        imagen: 'paris',
        descripcion: 'Una semana para conocer la Torre Eiffel, el Louvre, Montmartre y disfrutar de la gastronomía parisina.',
        disponibles: '8',
        slug: 'paris-romantico'
    },
    {
        titulo: 'Aventura en Londres',
        precio: '$1,390',
        fecha_ida: '2027-08-03',
        fecha_vuelta: '2027-08-10',
        imagen: 'londres',
        descripcion: 'Visita el Big Ben, el Tower Bridge, los parques reales y los barrios más emblemáticos de Londres.',
        disponibles: '10',
        slug: 'aventura-en-londres'
    },
    {
        titulo: 'Grecia: islas y cultura',
        precio: '$1,850',
        fecha_ida: '2027-09-12',
        fecha_vuelta: '2027-09-21',
        imagen: 'grecia',
        descripcion: 'Explora Atenas y las islas griegas, conoce su historia milenaria y relájate junto al mar Egeo.',
        disponibles: '6',
        slug: 'grecia-islas-y-cultura'
    },
    {
        titulo: 'Roma eterna',
        precio: '$1,320',
        fecha_ida: '2027-10-05',
        fecha_vuelta: '2027-10-12',
        imagen: 'roma',
        descripcion: 'Recorre el Coliseo, el Foro Romano y el Vaticano en un viaje lleno de historia, arte y buena comida.',
        disponibles: '9',
        slug: 'roma-eterna'
    },
    {
        titulo: 'Naturaleza en Canadá',
        precio: '$2,100',
        fecha_ida: '2027-11-02',
        fecha_vuelta: '2027-11-11',
        imagen: 'canada',
        descripcion: 'Admira lagos, bosques y montañas de Canadá, con tiempo para conocer Vancouver y sus paisajes naturales.',
        disponibles: '7',
        slug: 'naturaleza-en-canada'
    }
];

const testimoniales = [
    {
        nombre: 'Ana García',
        correo: 'ana.garcia@example.com',
        mensaje: 'El viaje a París estuvo muy bien organizado. Disfrutamos cada visita y el equipo nos ayudó en todo momento.'
    },
    {
        nombre: 'Carlos López',
        correo: 'carlos.lopez@example.com',
        mensaje: 'Nuestro recorrido por Roma fue inolvidable. Los horarios y recomendaciones hicieron muy fácil aprovechar el viaje.'
    },
    {
        nombre: 'Lucía Martín',
        correo: 'lucia.martin@example.com',
        mensaje: 'Río de Janeiro superó nuestras expectativas. Una experiencia estupenda desde la reserva hasta el regreso.'
    }
];

try {
    await db.authenticate();

    for (const viaje of viajes) {
        await Viaje.findOrCreate({
            where: { slug: viaje.slug },
            defaults: viaje
        });
    }

    for (const testimonial of testimoniales) {
        await Testimonial.findOrCreate({
            where: { correo: testimonial.correo },
            defaults: testimonial
        });
    }

    console.log(`Datos de ejemplo listos: ${viajes.length} viajes y ${testimoniales.length} testimonios.`);
} catch (error) {
    console.error('No se pudieron cargar los datos de ejemplo.', error);
    process.exitCode = 1;
} finally {
    await db.close();
}
