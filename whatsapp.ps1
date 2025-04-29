# Lista de números de WhatsApp
$numeros = @(
    '55859991881315',
    '5585991582021',
    '5511977777777'
)

# Índice atual
$indiceAtual = 0

# Função para obter o próximo número
function Get-ProximoNumero {
    $numero = $numeros[$indiceAtual]
    $script:indiceAtual = ($indiceAtual + 1) % $numeros.Length
    return $numero
}

# Loop principal
while ($true) {
    $numero = Get-ProximoNumero
    Write-Host "Abrindo WhatsApp para o número: $numero"
    Start-Process "https://wa.me/$numero"
    
    # Pergunta se quer continuar
    $resposta = Read-Host "Pressione Enter para continuar ou digite 'sair' para encerrar"
    if ($resposta -eq 'sair') {
        break
    }
} 