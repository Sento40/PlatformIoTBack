import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()

const mongo_uri = process.env.NODE_ENV === "test" ? `${process.env.TEST_DATABASE_URI}`: `${process.env.DATABASE_URI}`
console.log(mongo_uri)
/* mongoose.connect(mongo_uri, { useNewUrlParser: true })

const db = mongoose.connection;
db.on('error', () => console.log("Error al conectar a la BD"))
.once('open', () => console.log("Conectadop a la BD!!")) */
//mongoose.set('useFindAndModify', false);
mongoose.connect(
    mongo_uri,
    {
        useFindAndModify: false,
        useNewUrlParser: true,
        useCreateIndex: true
    },
    (err) => {
        return err
            ? console.log(`!!!Error al intentar conectar conectar con la BD!!!\n${err}`)
            : console.log('¡Conexión exitosa con mLab!');
    }
);

export default mongoose;