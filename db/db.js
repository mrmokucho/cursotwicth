import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const conectarDB = async () => {
    try{
        /* Este bloque de codigo se conecta a la base datos */
        //seteo el modo stricto
        mongoose.set('strictQuery', false);
        //conecto a la base de datos
        mongoose.connect(process.env.MONGODB_URI, {
            autoCreate: true
        });
        console.log('Conectado a la base de datos....');
    } catch(error){
        console.error('Error al conectar a la base datos....');
        process.exit(1);
    }
}

export default conectarDB;