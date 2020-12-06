const express = require("express") //import module / atau file js
const router = express.Router();
const product = require('./Routes/product')
const category =  require('./Routes/category')

router.use("/product", product)
router.use("/category", category)



module.exports = router