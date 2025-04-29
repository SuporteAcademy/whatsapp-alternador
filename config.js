// Configuração dos números de WhatsApp
const config = {
    numeros: [
        '55859991881315',
        '5585991582021',
        '5511977777777'
    ],
    indiceAtual: 0
};

// Função para obter o próximo número
function getProximoNumero() {
    const numero = config.numeros[config.indiceAtual];
    config.indiceAtual = (config.indiceAtual + 1) % config.numeros.length;
    return numero;
} 