const ProductController =require('../controller/product.controller')

module.exports = (app) => {
    app.get('/api/products',ProductController.findAllProducts)
    app.post('/api/products',ProductController.createNewproduct)
    app.get('/api/products/:id',ProductController.getOneProduct)


}