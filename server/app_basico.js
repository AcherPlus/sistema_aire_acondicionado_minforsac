// Importar express
import express from "express"

// Crear instancia de aplicación
const app = express()

// Middleware (antes de las peticiones)
app.use(express.json())

const clientes = [
          {
               id: 1,
               nombre: "Cliente 1",
               empresa: "Empresa 1"
          },
          {
               id: 2,
               nombre: "Cliente 2",
               empresa: "Empresa 2"
          }
     ]

// Método GET para mostrar en la pantalla
app.get("/", (req, res) => {
     res.send(`
          <h1>Hola mundo </h1>
          <button>Soy un botón</button>
          `)
});

// Método GET para mostrar todos los clientes
app.get("/clientes", (req, res) => {
     res.json(clientes)
});

// Método GET para mostrar el cliente con id concreto
app.get("/clientes/:id", (req, res) => {
     const clienteId = parseInt(req.params.id)
     const cliente = clientes.find(client => client.id === clienteId)
     res.json(cliente)
});

// Método POST
app.post("/clientes", (req, res) => {
     const nuevoCliente = {
          ...req.body,
          id: clientes.length + 1
     }
     clientes.push(nuevoCliente)
});

// Método PUT
app.put("/clientes/:id", (req, res) => {
     const clientId = parseInt(req.params.id)
     const clienteIndex = clientes.findIndex(client => client.id === clientId)
     clientes[clienteIndex] = {
          ...clientes[clienteIndex],
          ...req.body
     }

     if (clienteIndex === -1) {
          res.status(404).json({error: "Cliente no encontrado"})
     }

     res.json(clientes[clienteIndex])
})

// Método DELETE
app.delete("/clientes/:id", (req, res) => {
     const clientId = parseInt(req.params.id)
     const clienteIndex = clientes.findIndex(client => client.id === clientId)

     if (clienteIndex === -1) {
          res.status(404).json({error: "Cliente no encontrado"})
     }

     clientes.splice(clienteIndex, 1)
     res.status(204)
})

// Hacer que la aplicación escuche
const PORT = 3001
app.listen(PORT, () => {
     console.log("Escuchando en http://localhost:3001")
})