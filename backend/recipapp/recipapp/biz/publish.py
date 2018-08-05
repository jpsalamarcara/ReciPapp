from recipapp.excep import GenericException
from recipapp.core.models import db, ProductBasket


from recipapp.core.schemas import product_basket_schema, multiple_basket_schema
from sqlalchemy.exc import IntegrityError


def insert(request):
    product_id = request.json['product_id']
    basket_id = request.json['basket_id']
    try:
        publish_product = ProductBasket(product_id=product_id, basket_id=basket_id)
        db.session.add(publish_product)
        db.session.commit()
    except IntegrityError as e:
        db.session.rollback()
        raise GenericException('Unique constraint violated', 400, None, 'INTEGRITY_ERROR')
    return product_basket_schema.dump(publish_product)
