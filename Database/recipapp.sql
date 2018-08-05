drop table core.transaction;

drop table core.product_x_basket;
drop table core.basket;
drop table core.product;
drop table core.user;
drop table core.user_category;
drop table core.unit;

-- Basic objects

create table core.user_category(
	id serial primary key not null,
	name text not null
);

create table core.user(
	id serial primary key not null,
	name text not null,
	category int references core.user_category(id) not null
);

create table core.unit(
	id serial primary key not null,
	name text not null
);

create table core.product(
	id serial primary key not null,
	name text not null,
	unit_id int references core.unit(id) not null
);

create table core.basket(
	id serial primary key not null,
	user_owner int references core.user(id) not null,
	latitude numeric,
	longitude numeric
);

create table core.product_x_basket(
	id serial primary key not null,
	product_id int references core.product(id) not null,
	basket_id int references core.basket(id) not null
);

-- Basic Objects
-- Transaction Objects

create table core.transaction(
	id serial primary key not null,
	product int references core.product(id) not null,
	origin_user int references core.user(id) not null,
	end_user int references core.user(id) not null,
	date timestamp default current_date not null,
	total_price numeric not null,
	quantity int not null
);


