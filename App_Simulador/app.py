"""
===============================================================================
              APLICATIVO DE SIMULAÇÃO DO WMS MANHATTAN (PARA RFs)
===============================================================================
-------------------------------------------------------------------------------
  >>> EXPLICAÇÃO GERAL
-------------------------------------------------------------------------------

-------------------------------------------------------------------------------
  >>> TECNOLOGIAS UTILIZADAS
-------------------------------------------------------------------------------
- Flask ................ Servidor web e controle de rotas

-------------------------------------------------------------------------------
  >>> ESTRUTURA DO PROJETO
-------------------------------------------------------------------------------
app.py .................... Código principal do servidor Flask
templates/ ................. Páginas HTML ()
static/ .................... Arquivos estáticos (CSS, JS, imagens)

-------------------------------------------------------------------------------
  >>> FUNCIONAMENTO
-------------------------------------------------------------------------------

-------------------------------------------------------------------------------
  >>> BANCO DE DADOS
-------------------------------------------------------------------------------
Banco de Dados não utilizado nessa versão (v.1.0)

-------------------------------------------------------------------------------
  >>> EVENTOS SOCKETIO
-------------------------------------------------------------------------------

-------------------------------------------------------------------------------
  >>> THREAD DE ATUALIZAÇÃO
-------------------------------------------------------------------------------
Executa continuamente a cada 1s, enviando para cada usuário autenticado
o número atual de SKUs pendentes de validação.

-------------------------------------------------------------------------------
  >>> LOGS
-------------------------------------------------------------------------------
Logs podem ser registrados via:
    import logging
    logging.basicConfig(filename="app_simulacao.log", level=logging.INFO, filemode="a")

-------------------------------------------------------------------------------
  >>> RECOMENDAÇÕES
-------------------------------------------------------------------------------

-------------------------------------------------------------------------------
  >>> RESUMO TÉCNICO
-------------------------------------------------------------------------------
Linguagem ........... Python 3.10+
Framework ........... Flask + SocketIO
Ambiente ............ Rede local
Versão .............. 1.0.0 (Agosto/2026)
===============================================================================
"""
# ---------------------------
# Importação de Bibliotecas
# ---------------------------
from datetime import timedelta, datetime
import os
import sys
import logging
from flask import Flask, render_template, request, redirect, url_for
from flask_socketio import SocketIO
import subprocess as sb

# -----------------------
# logging.py / Logging setup
# -----------------------
os.makedirs('log', exist_ok=True)
logging.basicConfig(
    filename = "log/app_simulacao.log",
    level = logging.DEBUG,
    format = "%(asctime)s [%(levelname)s] %(message)s"
)
logging.getLogger().addHandler(logging.StreamHandler())

def registrar(msg):
    now = datetime.now().strftime('%d/%m/%Y %H:%M:%S')
    logging.info(f"{now} {msg}")

# -----------------------
# errors.py / Exception handling
# -----------------------
def tracebacks_catcher(exc_type, exc_value, exc_traceback):
    if issubclass(exc_type, KeyboardInterrupt):
        sys.__excepthook__(exc_type, exc_value, exc_traceback)
        return
    logging.critical("Erro crítico detectado", exc_info=(exc_type, exc_value, exc_traceback))

sys.excepthook = tracebacks_catcher

# -----------------------
# app.py / Application factory
# -----------------------
def create_app():
    app = Flask(__name__, instance_relative_config=True)
    return app

app = create_app()

# -----------------------
# SocketIO
# -----------------------
socketio = SocketIO(cors_allowed_origins="*", manage_session=False, async_mode='threading')
socketio.init_app(app)


# -----------------------
# routes.py / HTTP routes
# -----------------------
@app.route("/index.html", methods=["GET"])
def index():
    return render_template('index.html')

@app.route("/case.html", methods=["GET"])
def case():
    return render_template('case.html')

@app.route("/conf.html", methods=["GET"])
def conf():
    return render_template('conf.html')

@app.route("/carton.html", methods=["GET"])
def carton():
    return render_template('carton.html')
    
@app.route("/pickingFRC.html", methods=["GET"])
def pickingFRC():
    return render_template('pickingFRC.html')

@app.route("/position.html", methods=["GET"])
def position():
    return render_template('position.html')

@app.route("/quant.html", methods=["GET"])
def quant():
    return render_template('quant.html')

@app.route("/stage.html", methods=["GET"])
def stage():
    return render_template('stage.html')


# -----------------------
# main.py / Application runner
# -----------------------
if __name__ == "__main__":
    logging.info("\033[032mApp Simulação Inicializado\033[m")
    sb.run(['cls'], shell=True)
    sb.run(['title', 'App', 'Simulacao'], shell=True)
    sb.run(['color', '3'], shell=True)
    socketio.run(app, host="0.0.0.0", port=3000, debug=True, use_reloader=False)