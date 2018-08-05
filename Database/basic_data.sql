﻿-- Base categories
insert into core.user_category values (1, 'Generador');
insert into core.user_category values (2, 'Recolector');
insert into core.user_category values (3, 'Procesador');

-- Example units
insert into core.unit (name) values ('Kg');
insert into core.unit (name) values ('Lt');
insert into core.unit (name) values ('U');

select * from core.unit;

-- Example products
insert into core.product (name, unit_id) values ('Papel', '4');
insert into core.product (name, unit_id) values ('Plastico', '4');
insert into core.product (name, unit_id) values ('Vidirio', '4');

-- Example user
insert into core.user (name, category) values ('Pepe Pepino', '1');
insert into core.user (name, category) values ('Juanito Alimaña', '1');
insert into core.user (name, category) values ('Pedro Navaja', '2');
insert into core.user (name, category) values ('Bob Esponja', '2');
insert into core.user (name, category) values ('Centro de Acopio Donde Juan', '3');
insert into core.user (name, category) values ('T.U.J.A.L', '3');

-- Productos con unidad
select p.name as name, q.name as unit from core.product as p join core.unit as q on p.unit_id = q.id;
-- Usuarios con categor