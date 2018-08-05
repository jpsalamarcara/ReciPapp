create table core.user_category(
	id int primary key not null,
	name text not null
);

create table core.user(
	id int primary key not null,
	name text not null,
	category int references core.user_category(id)
);

create table core.product(
	id int primary key not null,
	name text not null
);

create table core.cart(
	id int primary key not null,
	creation_date timestamp default current_timestamp,
	generator int references core.user(id),
	generator_date timestamp,
	collector int references core.user(id),
	collector_date timestamp,
	center int references core.user(id),
	center_date timestamp
);

create table core.product_x_cart(
	id int primary key not null,
	product_id int references core.product(id),
	cart_id int references core.cart(id)
);