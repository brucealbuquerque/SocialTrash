module.exports = function(app) {
    app.get('/products', function(req, res) {
        console.log('prooducts')
        res.render("products/list");
    }
)};