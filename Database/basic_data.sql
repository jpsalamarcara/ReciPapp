-- Base categories
insert into core.user_category values (1, 'Generador');
insert into core.user_category values (2, 'Recolector');
insert into core.user_category values (3, 'Procesador');

-- Example units
insert into core.unit (name) values ('Kg');
insert into core.unit (name) values ('Lt');
insert into core.unit (name) values ('U');

select * from core.unit;

-- Example products
insert into core.product (name, unit_id) values ('Papel', '1');
insert into core.product (name, unit_id) values ('Plastico', '1');
insert into core.product (name, unit_id) values ('Vidirio', '1');

-- Example user
insert into core.user (name, category) values ('Pepe Pepino', '1');
insert into core.user (name, category) values ('Juanito Alimaña', '1');
insert into core.user (name, category) values ('Pedro Navaja', '2');
insert into core.user (name, category) values ('Bob Esponja', '2');
insert into core.user (name, category) values ('Centro de Acopio Donde Juan', '3');
insert into core.user (name, category) values ('T.U.J.A.L', '3');

-- Example basket
insert into core.basket (user_owner, latitude, longitude) values (1, 4.687216, -74.048675);
insert into core.product_x_basket (product_id, basket_id, product_status) values (1, 1, 0);

commit;