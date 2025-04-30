<?php
// Arquivo para armazenar o contador
$arquivo = 'contador.txt';

// Se o arquivo não existe, cria com valor 0
if (!file_exists($arquivo)) {
    file_put_contents($arquivo, '0');
}

// Lê o valor atual
$contador = intval(file_get_contents($arquivo));

// Incrementa o contador
$contador++;

// Salva o novo valor
file_put_contents($arquivo, $contador);

// Retorna o valor como JSON
header('Content-Type: application/json');
echo json_encode(['contador' => $contador]);
?> 