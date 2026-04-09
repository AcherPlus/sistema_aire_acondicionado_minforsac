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
          .order('cliente_id', {ascending: false})
          //.limit(9);
     
     if (error) return res.status(400).json({error: error.message});

     res.json(data);
     console.log(data)
});

app.post('/clientes', async (req, res) => {
     const {nombre, direccion_principal, tipo_documento, numero_documento} = req.body;
     
     const { data, error } = await supabase
          .from('Clientes')
          .insert([
               {
                    nombre: nombre,
                    direccion_principal: direccion_principal,
                    tipo_documento: tipo_documento,
                    numero_documento: numero_documento
               }
          ])
          .select();
     
     if (error) {
          return res.status(400).json({ error: error.message });
     }

     console.log("Cliente creado: ", data);
     res.status(201).json(data);
})

app.listen(3001, () => console.log('Servidor corriendo en el puerto 3001'));