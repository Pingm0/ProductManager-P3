const Product = require('../model/product.model');

module.exports = {
    findAllProducts: ((req,res) => {
        Product.find()
            .then((allProducts) => {
                console.log(allProducts);
                res.json(allProducts);
            } )
            .catch((err) => {
                console.log("Someting went wrong with Find all Products ")
                res.json({message:"Someting went wrong with Find all Products",error:err})
            })
    }),

    createNewproduct: ((req,res) => {
        Product.create(req.body)
            .then((newProduct) => {
                console.log(newProduct)
                res.json(newProduct)
            })
            .catch((err) => {
                console.log("Something went wrong with adding a new Product")
                res.status(400).json(err)
            })
    }),
    getOneProduct: ((req,res) => {
        Product.findOne({_id: req.params.id})
        .then((OneProduct) => {
            console.log(OneProduct)
            res.json(OneProduct)
        })
        .catch((err) => { console.log(err)})
    }),
    updateProduct:((req,res) => {
        Product.findOneAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
            .then((updateOneProduct) => {
                console.log(updateOneProduct)
                res.json(updateOneProduct)
            })
            .catch((err) => {
                console.log('something went wrong with update',err)
                res.json(err)
            })
    }),

    deleteProduct:((req,res) => {
        Product.deleteOne({_id:req.params.id})
            .then((deleteOneProduct) => {
                console.log("Delete Product")
                res.json(deleteOneProduct)
            })
            .catch((err => {
                console.log("Something went wrong when deleting a product")
                res.json(deleteOneProduct)
            }))
            
    })
}