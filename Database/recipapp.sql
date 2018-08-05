drop table core.product_x_basket;
drop table core.basket;
drop table core.product
drop table core.user;
drop table core.user_category;
drop table core.unit;

create table core.user_category(
	id int primary key not null,
	name text not null
);

create table core.user(
	id int primary key not null,
	name text not null,
	category int references core.user_category(id)
);

create table core.unit(
	id int primary key not null,
	name text not null
);

create table core.product(
	id int primary key not null,
	name text not null,
	unit_id int references core.unit(id)
);

create table core.basket(
	id int primary key not null,
	user_owner int references core.user(id)
);

create table core.product_x_basket(
	id int primary key not null,
	product_id int references core.product(id),
	basket_id int references core.basket(id)
);