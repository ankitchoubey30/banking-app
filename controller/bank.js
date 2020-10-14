const Product = require('../models/product');
const OrderItem = require('../models/order-item');

const getIndex = (req, res, next) => {
Product
.findAll()
.then(products => {
    res.render('bank/index',{
        prods: products,
        pageTitle: 'Bank',
        path:'/customer'
    });
})
.catch(error => {
    console.error()
})

}

const getProducts = (req, res, next) => {}

const getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    console.log(prodId);
    Product.findByPk(prodId)
    .then(product =>{
        res.render('bank/product-details', {
            product: product,
            pageTitle: product.title,
            path: '/products'
        })
    })
    
    .catch(error => {console.log(error)})
}

const createOrder = (req, res, next) => {
    const prodId = req.params.productId;
     console.log(prodId);
     Product.findByPk(prodId)
    .then(product =>{
        const title = product.title
        console.log(title);
        console.log(product.price);
        console.log(product.description);
        OrderItem.create({
            productId: prodId,
            orderId: 'ORD' + prodId 

        })
        .then(
            result => {
                console.log('order placed !!!!');
                res.redirect('/customer/orders')
            }
        )
       })
   
    .catch(error => {console.log(error)})

}

const getOrder = (req, res, next) => {}

module.exports = {getIndex, getProducts, getProduct, createOrder, getOrder}