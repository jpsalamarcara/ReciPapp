import os
import logging

from flask import Flask, request, jsonify
from flask_cors import cross_origin, CORS
from .core.models import db, ma


basedir = os.path.abspath(os.environ['HOME'])
logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)
handler = logging.FileHandler(os.path.join(basedir, 'snw_attendant_monitor.log'))
handler.setLevel(logging.INFO)
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
handler.setFormatter(formatter)
logger.addHandler(handler)
logger.info('BASEDIR: {}'.format(basedir))

app = Flask(__name__)
#CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'crud.sqlite')
logger.info('SQLALCHEMY_DATABASE_URI: '+'sqlite:///' + os.path.join(basedir, 'crud.sqlite'))

db.init_app(app)
ma.init_app(app)
app.app_context().push()
db.create_all()

@app.errorhandler(Exception)
def handle_invalid_usage(error):
    output = {'message': 'Unespected error', 'internal_status': 'EXCEPTION'}
    response = jsonify(output)
    response.status_code = 500
    logger.exception(error)
    return response





@app.after_request
def after_request(response):
    header = response.headers
    # header['Access-Control-Allow-Origin'] = '*'
    # header['Access-Control-Allow-Headers'] = 'SecurityToken', 'IdPerson'
    return response


if __name__ == '__main__':
    app.run(host='0.0.0.0')
