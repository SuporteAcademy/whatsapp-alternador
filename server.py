from flask import Flask, jsonify
import random

app = Flask(__name__)

# Lista de números de WhatsApp
numeros = [
    '55859991881315',
    '5585991582021',
    '5511977777777'
]

@app.route('/get_numero')
def get_numero():
    # Escolhe um número aleatório da lista
    numero = random.choice(numeros)
    return jsonify({'numero': numero})

if __name__ == '__main__':
    app.run(port=5000) 