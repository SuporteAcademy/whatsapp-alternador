const express = require('express');
const app = express();
const path = require('path');

// Lista de números de WhatsApp
const numeros = [
    '55859991881315',
    '5585991582021',
    '5511977777777'
];

let indiceAtual = 0;

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname)));

// Rota para obter o próximo número
app.get('/get_numero', (req, res) => {
    const numero = numeros[indiceAtual];
    indiceAtual = (indiceAtual + 1) % numeros.length;
    res.json({ numero });
});

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
}); 