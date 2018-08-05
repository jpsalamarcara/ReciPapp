from recipapp.excep import GenericException
from recipapp.core.models import db, ProductBasket, Basket
import flask_sqlalchemy


from recipapp.core.schemas import product_basket_schema, multiple_basket_schema
from sqlalchemy.exc import IntegrityError


def insert(request):
    product_id = request.json['idProduct']
    user_id = request.json['id']
    product_status = 0
    pick_date = request.json['collectionDate']
    pick_hour = request.json['rangeHours']
    quantity = request.json['quantity']
    latitude = request.json['latitude']
    longitude = request.json['longitude']

    try:
        if not has_basket(user_id):
            new_basket = Basket(user_owner=user_id,
                                latitude=latitude,
                                longitude=longitude)
            db.session.add(new_basket)
            db.session.flush()
        else:
            new_basket = Basket.query.filter(Basket.user_owner == user_id).one()
            new_basket.latitude = latitude
            new_basket.longitude = longitude
        publish_product = ProductBasket(product_id=product_id,
                                        basket_id=new_basket.id,
                                        product_status=product_status,
                                        pick_date=pick_date,
                                        pick_hour=pick_hour,
                                        quantity=quantity
                                        )
        db.session.add(publish_product)
        db.session.commit()
    except IntegrityError as e:
        db.session.rollback()
        raise GenericException('Unique constraint violated', 400, None, 'INTEGRITY_ERROR')
    return product_basket_schema.dump(publish_product)


def has_basket(user_id):
    try:
        all_persons = Basket.query.filter(Basket.user_owner == user_id).all()
    except flask_sqlalchemy.orm.exc.NoResultFound as e:
        all_persons = []
    return len(all_persons) > 0
