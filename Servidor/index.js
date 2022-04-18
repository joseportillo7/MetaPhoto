const express = require('express')

const app = express()
const PORT = 3000

app.use('/', (req, res) => {
    res.json({
        message: 'Hello MetaPhoto application'
    })
})

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto en http://localhost:${PORT}`);
})