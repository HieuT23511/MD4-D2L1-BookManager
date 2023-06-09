const BaseModel = require('./base.model')


class BookModel extends BaseModel {
    constructor() {
        super();
    }

    async getAllBooks() {
        let sql = `select * from books`
        return await this.querySQL(sql);
    }

    async addNewBook(name, price, status, author) {
        let sql = `insert into books (name,price,status,author)
values ('${name}',${price},'${status}','${author}');`
        return await this.querySQL(sql);
    }

    async deleteBookByID(id) {
        let sql = `delete from books where id= ${id};`
        return await this.querySQL(sql)
    }

    async getUpdateBookPageByID(id) {
        let sql = `select * from books where id= ${id};`
        return await this.querySQL(sql)
    }

    async handleUpdateBook(id,name, price, status, author) {
        let sql = `update books 
            set name = '${name}',
            price = ${price},
            status = '${status}',
            author = '${author}' 
            where id = ${id};`
        return await this.querySQL(sql)
    }
}

module.exports = new BookModel();