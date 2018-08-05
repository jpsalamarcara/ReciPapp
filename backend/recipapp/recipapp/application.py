import os
import logging

from flask import Flask, request, jsonify
from flask_cors import cross_origin, CORS
from recipapp.core.models import db, ma

import recipapp.biz.product
import recipapp.biz.unit
import recipapp.biz.transaction
import recipapp.biz.publish
import recipapp.biz.basket

basedir = os.path.abspath(os.environ['PWD'])
logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)
handler = logging.FileHandler(os.path.join(basedir, 'process_monitor.log'))
handler.setLevel(logging.INFO)
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
handler.setFormatter(formatter)
logger.addHandler(handler)
logger.info('BASEDIR: {}'.format(basedir))

app = Flask(__name__)
CORS(app)

# app.config['DEBUG'] = True
#app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'crud.sqlite')
app.config['SQLALCHEMY_DATABASE_URI'] = "postgres://admin:RCKWZWMXJTLIDKKY@sl-us-south-1-portal.31.dblayer.com:52550/recipapp"
#logger.info('SQLALCHEMY_DATABASE_URI: '+'sqlite:///' + os.path.join(basedir, 'crud.sqlite'))

db.init_app(app)
ma.init_app(app)
app.app_context().push()
# db.create_all()


@app.errorhandler(Exception)
def handle_invalid_usage(error):
    output = {'message': 'Unespected error', 'internal_status': 'EXCEPTION'}
    response = jsonify(output)
    response.status_code = 500
    logger.exception(error)
    return response


@app.route("/PRODUCT", methods=['GET'])
def get_all_products():
    return jsonify(recipapp.biz.product.get_all())


@app.route("/UNIT", methods=['GET'])
def get_all_units():
    return jsonify(recipapp.biz.unit.get_all())


@app.route("/TRANSACTION", methods=['POST'])
def create_transaction():
    # TODO: añadir product_status=1 en tabla product_basket
    return jsonify(recipapp.biz.transaction.insert(request))


@app.route("/PUBLISH", methods=['POST'])
def publish():
    return jsonify(recipapp.biz.publish.insert(request))

@app.route("/BASKET/<user_id>", methods=['GET'])
def get_user_basket(user_id):
    return jsonify(recipapp.biz.basket.get_allByUser(user_id))

@app.after_request
def after_request(response):
    header = response.headers
    # header['Access-Control-Allow-Origin'] = '*'
    # header['Access-Control-Allow-Headers'] = 'SecurityToken', 'IdPerson'
    return response


if __name__ == '__main__':
    app.run(host='0.0.0.0')
