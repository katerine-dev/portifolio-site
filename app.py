# configurar o servidor flask

from flask import Flask, render_template, redirect

app = Flask(__name__) # desse arquivo principal

@app.route('/') # uma página só 

def index():
    return render_template('index.html') 

if __name__ == '__main__':
    app.run(debug=True) # para conseguir dar F5 