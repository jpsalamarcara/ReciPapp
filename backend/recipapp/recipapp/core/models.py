from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

db = SQLAlchemy()
ma = Marshmallow()


class Unit(db.Model):
    __table_name__ = "unit"
    __table_args__ = {'schema': 'core'}
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)


class UnitSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name')


class Product(db.Model):
    __table_name__ = "product"
    __table_args__ = {'schema': 'core'}
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    unit_id = db.Column(db.Integer, db.ForeignKey("unit.id"))


class ProductSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'unit_id')


class UserCategory(db.Model):
    __table_name__ = 'user_category'
    __table_args__ = {'schema': 'core'}
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)


class UserCategorySchema(ma.Schema):
    class Meta:
        fields = ('id', 'name')


class User(db.Model):
    __table_name__ = 'user'
    __table_args__ = {'schema': 'core'}
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    category = db.Column(db.Integer, db.ForeignKey('user_category.id'))


class UserSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'category')


class Basket(db.Model):
    __table_name__ = 'basket'
    __table_args__ = {'schema': 'core'}
    id = db.Column(db.Integer, primary_key=True)
    user_owner = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    latitude = db.Column(db.Float, nullable=False)
    longitude = db.Column(db.Float, nullable=False)


class BasketSchema(ma.Schema):
    class Meta:
        fields = ('id', 'user_owner', 'latitude', 'longitude')


class ProductBasket(db.Model):
    __table_name__ = 'product_x_basket'
    __table_args__ = {'schema': 'core'}
    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'))
    basket_id = db.Column(db.Integer, db.ForeignKey('product.id'))


class ProductBasketSchema(ma.Schema):
    class Meta:
        fields = ('id', 'product_id', 'basket_id')


class Transaction(db.Model):
    __table_name__ = 'transaction'
    __table_args__ = {'schema': 'core'}
    id = db.Column(db.Integer, primary_key=True)
    product = db.Column(db.Integer, db.ForeignKey('product.id'), nullable=False)
    origin_user = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    end_user = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    date = db.Column(db.DateTime)
    price = db.Column(db.Float)


class TransactionSchema(ma.Schema):
    class Meta:
        fields = ('id', 'product', 'origin_user', 'end_user', 'date', 'price')