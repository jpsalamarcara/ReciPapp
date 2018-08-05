from recipapp.excep import GenericException
from recipapp.core.models import Transaction, db, Basket, ProductBasket


from recipapp.core.schemas import multiple_transaction_schema, transaction_schema
from sqlalchemy.exc import IntegrityError


def get_all():
    all_persons = Transaction.query.all()
    result = multiple_transaction_schema.dump(all_persons, update_fields=False)
    return result

def close(request):
    return {"result":"0", "message":"success"}

def insert(request):
    product = request.json['product']
    origin_user = request.json['origin_user']
    end_user = request.json['end_user']
    try:
        for p in product:
            new_transaction = Transaction(product=product, origin_user=origin_user, end_user=end_user)
            db.session.add(new_transaction)
            db.session.flush()
            basket = Basket.query.filter(Basket.user_owner == origin_user).one()
            basket_product = ProductBasket.query.filter((ProductBasket.basket_id == basket.id) &
                                                        (ProductBasket.product_id == p) &
                                                        (ProductBasket.product_status == 0)).one()
            basket_product.product_status = 2
            db.session.commit()
    except IntegrityError as e:
        db.session.rollback()
        raise GenericException('Unique constraint violated', 400, None, 'INTEGRITY_ERROR')
    return transaction_schema.dump(new_transaction)

