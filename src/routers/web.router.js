const express = require ('express');
const router = express.Router();
const homeController = require ('../controllers/home.controllers')

router.get('/books',homeController.getHomePage);
router.get('/books/create',homeController.getAddNewBookPage)
router.post('/books/create',homeController.handleAddBook)
router.get('/books/delete',homeController.deleteBook)
router.get('/books/update',homeController.getUpdateBookPage)
router.post('/books/update',homeController.handleUpdateBook)
module.exports = router;