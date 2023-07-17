import patientsRouter from './routes/patients';
import express from 'express';
import mongoose from 'mongoose';


const bodyParser = require("body-parser");
const app = express();
const port = 4000;
const db = mongoose.connection;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "100mb" }));

app.use('/patients', patientsRouter);

app.use((req, res, next) => {
    console.log('Middleware ejecutado');
    next();
  });

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/bdpatients', //{
  //useNewUrlParser: true,
  //useUnifiedTopology: true
//}
);


db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conexión exitosa a MongoDB');
});


app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});