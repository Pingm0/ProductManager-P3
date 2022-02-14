const express= require('express');
const app = express();
const cors = require('cors');
const port = 8000;

require('./config/mongoose.config')
app.use(cors({origin:"http://localhost:3000"}));
app.use(express.json());                           /* This is new and allows JSON Objects to be posted */
app.use(express.urlencoded({ extended: true }));
require('./routes/product.routes')(app);

app.listen(port, () => console.log(`Listing on port: ${port}`));

