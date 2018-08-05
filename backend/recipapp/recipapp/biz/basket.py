from recipapp.core.models import Basket, ProductBasket, db, Product
from recipapp.core.schemas import basket_schema, multiple_product_basket_schema, product_schema

def get_allByUser(user_id):
    basket = Basket.query.filter(Basket.user_owner == user_id).one()
    basket_result = basket_schema.dump(basket, update_fields=False)
    productBasket = ProductBasket.query.filter(ProductBasket.basket_id == basket.id).all()
    #productbasket_result = multiple_product_basket_schema.dump(productBasket, update_fields=False)
    r = []
    for i in productBasket:
        product = Product.query.filter(Product.id == i.product_id).one()
        product_result = product_schema.dump(product, update_fields=False)
        r.append(product_result)
    dic = {'basket':basket_result, 'productbasket':r}
    return dic