const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/productDB',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connection is Established to the Product DB"))
    .catch((err) => console.log("Something went wrong when connecting to the database",err))
