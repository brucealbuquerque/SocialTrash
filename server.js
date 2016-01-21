var app = require('./config/express')(); 
var produtRoutes = require('./app/routes/products')(app); 


app.listen(3000, function() {
  console.log('Server is running');
});