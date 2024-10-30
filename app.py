# configurar o servidor flask

from flask import Flask, render_template, redirect, request, flash
# from flask_mail import Mail, Message
import dotenv
import os

dotenv.load_dotenv(dotenv.find_dotenv())

app = Flask(__name__)
app.secret_key = 'katecode'

# mail_settings = {
#     "MAIL_SERVER": "smtp.gmail.com",
#     "MAIL_PORT": 465,
#     "MAIL_USE_SSL": True,
#     "MAIL_USE_TLS": False,
#     "MAIL_USERNAME": os.getenv("USERNAME"),
#     "MAIL_PASSWORD": os.getenv("PASSWORD")
# }

# app.config.update(mail_settings)
# mail = Mail(app)

# class Contact:
#     def __init__(self, name, email, message):
#         self.name = name
#         self.email = email
#         self.message = message

@app.route('/') # uma página só 
def index():
    return render_template('index.html') 

# @app.route('/send/email', methods=['GET', 'POST'])
# def send():
#     if request.method == 'POST':
#         formContact = Contact(
#             request.form['name'],
#             request.form['email'],
#             request.form['message']
#         )

#         msg = Message(
#             subject= f'{formContact.name} te enviou uma mensagem pelo site-portifólio',
#             sender=app.config.get("MAIL_USERNAME"),
#             recipients=[app.config.get("MAIL_USERNAME")],
#             body = f'''

#             {formContact.name} com o email {formContact.email}, te enviou a seguinte mensagem:

#             {formContact.message}


#             '''
#         )
#         mail.send(msg)
#         flash('Message sent successfully! Thank you for contacting me!')
#     return redirect('/')

if __name__ == '__main__':
    app.run(debug=True) # para conseguir dar F5 