const bookModel = require('../models/book.model')

class HomeControllers {
    static async getHomePage(req, res) {
        let listBooks = await bookModel.getAllBooks();
        console.log(listBooks)
        res.render('list', {books: listBooks})
    }

    static getAddNewBookPage(req, res) {
        res.render('create');
    }

    static async handleAddBook(req, res) {
        let {name, price, status, author} = req.body
        // console.log(req.body)
        await bookModel.addNewBook(name, +price, status, author).catch(err => {
            console.log(err.message)
        });
        res.redirect(301, '/books')
    }

    static async deleteBook(req, res) {
        let idNeedToDelete = req.query.id;
        await bookModel.deleteBookByID(idNeedToDelete).catch(err => {
            console.log(err.message)
        });
        res.redirect(301, '/books');
    }
    static async getUpdateBookPage(req,res){
        let idNeedToUpdate = req.query.id;
        let infoBook = await bookModel.getUpdateBookPageByID(idNeedToUpdate).catch(err => {
            console.log(err.message)
        });
        if(infoBook[0]) {
            res.render('update',{book: infoBook[0]})
        } else {
            res.end('404 Not Found')
        }
    }
    static async handleUpdateBook(req,res){
        let {name, price, status, author} = req.body
        let id = req.query.id;
        await bookModel.handleUpdateBook(id,name, +price, status, author).catch(err => {
            console.log(err.message);
        });
        res.redirect(301, '/books');
    }
}
module.exports = HomeControllers;