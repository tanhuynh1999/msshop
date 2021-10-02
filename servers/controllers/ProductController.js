class ProductController {
    getProduct = (req, res) => {
        res.render('products')
    }
}

module.exports = new ProductController();