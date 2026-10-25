import 'dotenv/config';
import Sequelize from 'sequelize';

const requiredEnv = (name) => {
    const value = process.env[name];

    if (!value) {
        throw new Error(`Falta la variable de entorno ${name}. Configúrala en el archivo .env.`);
    }

    return value;
};

const db = new Sequelize(
    requiredEnv('DB_NAME'),
    requiredEnv('DB_USER'),
    process.env.DB_PASSWORD ?? '',
    {
        host: process.env.DB_HOST || '127.0.0.1',
        port: Number(process.env.DB_PORT || 3306),
        dialect: 'mysql',
        define: {
            timestamps: false
        },
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        operatorAliases: false
    }
);

export default db;