import express from 'express';
import taskRoutes from './routes/taskRoutes.js';


import conectarDB from './db/db.js';
conectarDB();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/tasks', taskRoutes)

app.listen(PORT, () => {
    console.log(`Esta aplicación esta corriendo en http://localhost:${PORT}`);
});
