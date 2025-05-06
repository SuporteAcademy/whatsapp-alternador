// Configuração dos números de WhatsApp
const config = {
    numeros: [
        '558584324206',
        '558581141843'
    ],
    indiceAtual: 0
};

// Função para obter o próximo número
function getProximoNumero() {
    const numero = config.numeros[config.indiceAtual];
    config.indiceAtual = (config.indiceAtual + 1) % config.numeros.length;
    return numero;
} 