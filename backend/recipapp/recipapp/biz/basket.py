from recipapp.core.models import Basket, ProductBasket, db
from recipapp.core.schemas import multiple_product_schema, basket_schema

from recipapp.core.schemas import multiple_transaction_schema, transaction_schema
from sqlalchemy.exc import IntegrityError

def get_allByUser(user_id):
    basket = db.session.query(ProductBasket, Basket).join(Basket).filter(Basket.user_owner == user_id) #.one()
    #result = basket_schema.dump(basket, update_fields=False)
    print(basket)
    result = basket_schema.dump(basket.one(), update_fields=False)
    return result