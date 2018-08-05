from recipapp.excep import GenericException
from recipapp.core.models import Transaction, db, Basket, ProductBasket
from recipapp.core.schemas import basket_schema

from sqlalchemy.orm.exc import NoResultFound

from recipapp.core.schemas import multiple_transaction_schema, transaction_schema
from sqlalchemy.exc import IntegrityError


def get_all():
    all_persons = Transaction.query.all()
    result = multiple_transaction_schema.dump(all_persons, update_fields=False)
    return result


def get_all_from_User(user_id):
    all_transactions = Transaction.query.filter(Transaction.origin_user == user_id)
    result = multiple_transaction_schema.dump(all_transactions, update_fields=False)
    return result


def get_all_to_User(user_id):
    all_transactions = Transaction.query.filter(Transaction.end_user == user_id)
    result = multiple_transaction_schema.dump(all_transactions, update_fields=False)
    return result


def close(request):
    return {"result":"0", "message":"success"}


def insert(request):
    product = request.json['product']
    origin_user = request.json['origin']
    end_user = request.json['destiny']
    try:
        for p in product:
            db.session.flush()
            new_transaction = Transaction(product=p.get('idProd'),
                                          origin_user=origin_user,
                                          end_user=end_user,
                                          quantity=p.get('cantProd'),
                                          status=2,
                                          total_price=p.get('priceProd'))
            db.session.add(new_transaction)
            db.session.commit()
    except IntegrityError as e:
        db.session.rollback()
        raise GenericException('Unique constraint violated', 400, None, 'INTEGRITY_ERROR')
    return transaction_schema.dump(new_transaction)

