import datetime

from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

db = SQLAlchemy()
ma = Marshmallow()


class Unit(db.Model):
    __table_name__ = 'unit'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)


class UnitSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name')


class Product(db.Model):
    __table_name__ = 'product'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)


class ProductSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name')


class UserCategory(db.Model):
    __table_name__ = 'user_category'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)


class UserCategorySchema(ma.Schema):
    class Meta:
        fields = ('id', 'name')


class User(db.Model):
    __table_name__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    category = db.Column(db.Integer, db.ForeignKey('user_category.id'))


class UserSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'category')


class Cart(db.Model):
    __table_name__ = 'cart'
    id = db.Column(db.Integer, primary_key=True)
    creation_date = db.Column(db.DateTime())
    generator = db.Column(db.Integer, db.ForeignKey('user.id'))
    generator_date = db.Column(db.DateTime)
    collector = db.Column(db.Integer, db.ForeignKey('user.id'))


