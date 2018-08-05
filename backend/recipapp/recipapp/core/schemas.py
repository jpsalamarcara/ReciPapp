from .models import ProductSchema, UnitSchema, UserCategorySchema, UserSchema, BasketSchema, ProductBasketSchema,\
    TransactionSchema

multiple_product_schema = ProductSchema(many=True)
product_schema = ProductSchema()

multiple_unit_schema = UnitSchema(many=True)
unit_schema = UnitSchema()

multiple_user_category = UserCategorySchema(many=True)
user_category = UserCategorySchema()

multiple_user_schema = UserSchema(many=True)
user_schema = UserSchema()

multiple_basket_schema = BasketSchema(many=True)
basket_schema = BasketSchema()

multiple_product_basket_schema = ProductBasketSchema(many=True)
product_basket_schema = ProductBasketSchema()

multiple_transaction_schema = TransactionSchema(many=True)
transaction_schema = TransactionSchema()