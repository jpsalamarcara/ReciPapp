curl -X GET localhost:5000/PRODUCT
curl -X POST -H "Content-Type: application/json" -d '{"product_id": "1", "basket_id":"1"}' localhost:5000/PUBLISH
curl -X POST -H "Content-Type: application/json" -d '{"product": "1", "origin_user":"2", "end_user":"3", "quantity":"1"}' localhost:5000/TRANSACTION