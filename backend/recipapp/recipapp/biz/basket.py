from recipapp.core.models import Basket, ProductBasket, db
from recipapp.core.schemas import multiple_product_schema, basket_schema

from recipapp.core.schemas import multiple_transaction_schema, transaction_schema
from sqlalchemy.exc import IntegrityError

def get_allByUser(user_id):
    basket = Basket.query.filter(Basket.user_owner == user_id).one()
    basket_result = basket_schema.dump(basket, update_fields=False)
    productBasket = ProductBasket.query.filter(ProductBasket.basket_id == basket_result.id)
    return basket_result