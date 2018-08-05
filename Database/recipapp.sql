create table core.user_category(
	id int primary key not null,
	name text not null
);

create table core.user(
	id int primary key not null,
	name text not null,
	category references core.user_category(id)
);

create table core.product(
	id int primary key not null,
	name text not null
);

create table core.cart(
	id int primary key not null,
	creation_date timestamp default current_timestamp,
	generator references core.user(id),
	generator_date timestamp,
	collector references core.user(id),
	collector_date timestamp,
	center references core.user(id),
	center_date timestamp
);

create table core.product_x_cart(
	id int primary key not null,
	product_id references core.product(id),
	cart_id references core.cart(id),
);