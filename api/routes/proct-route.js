const express = require('express');
const prodcutController = require('../contollers/product-cont');
const reviewContorller = require('../contollers/review-cont')
const router = express.Router();


router.post('/add-proudct',prodcutController.addProduct);
router.get('/get-products',prodcutController.getAllProduct)
router.get('/get-single/:productId',prodcutController.getSingleProduct)
router.put('/update/:productId',prodcutController.updateProduct)
router.delete('/delete/:productId',prodcutController.deleteProduct)


//review 
router.get('/product-reviews/:productId',reviewContorller.getProductReviews)


module.exports = router;
