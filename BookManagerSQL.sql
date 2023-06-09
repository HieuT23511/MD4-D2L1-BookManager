drop database bookManager;
create database bookManager;
use bookManager;

create table books (
	id int primary key auto_increment,
    name varchar (50),
    price int check (price >0),
    status varchar(50),
    author varchar(50)
);

insert into books (name,price,status,author)
values ('Harry Potter 1',350000,'new','J.K Rowling'),
('Harry Potter 2',450000,'new','J.K Rowling'),
('Harry Potter 3',490000,'old','J.K Rowling'),
('Harry Potter 4',550000,'new','J.K Rowling'),
('Harry Potter 5',620000,'old','J.K Rowling'),
('Harry Potter 6',720000,'new','J.K Rowling');

select * from books where id= 3;


