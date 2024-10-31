from flask import Flask, render_template

app = Flask(__name__, static_folder='static')
app.secret_key = 'katecode'

@app.route('/')  # Rota para a página principal
def index():
    return render_template('index.html')  # Renderiza o index.html diretamente

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)