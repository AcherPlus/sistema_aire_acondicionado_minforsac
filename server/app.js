import express from 'express';
import supabase from './supabaseClient.js';
import cors from 'cors';

const app = express();
app.use(cors())
app.use(express.json())  // Middleware

// Obtener datos
app.get('/clientes', async (req, res) => {
     const { data, error } = await supabase
          .from('Clientes')
          .select('*')
          // .neq('direccion_principal', 'Desconocido')
          .order('nombre', {ascending: true})
          //.limit(9);
     
     if (error) return res.status(400).json({error: error.message});

     res.json(data);
     console.log(data)
});

app.listen(3001, () => console.log('Servidor corriendo en el puerto 3001'));