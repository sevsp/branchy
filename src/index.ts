import express from 'express'

const app = express()

//Routing 

app.get('/', (req, res) => {
    res.send('Hola mundo en Express en typescript')
})

app.get('/ecommerce', (req, res) => {
    res.send('Este es el ecommerce')
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('Servidor Funcionando en el puerto ',port)
})