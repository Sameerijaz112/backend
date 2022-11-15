const ProductModel = require('../model/productmodel')

const ProductData = async (req, res) => {
    try {
        const {  productName, productQuantityy, productPrice,   description, logoMaterial, size, category, color, productMaterial } =req.body;
        let ImageDetaisl = [];
        let Size = size.split(',');
        req.files.forEach(arrayObject => {
            const { filename, originalname, mimetype } = arrayObject;
            ImageDetaisl.push({
                ImageUrl:`assets/Product/${productName}/${filename}`, 
                ImageName:originalname, 
                ImageMimeType:mimetype
            });
        })
        const docToCreate = new ProductModel({
            productName, productQuantityy, productPrice,   description, logoMaterial, size, category, color, productMaterial , 
            imageDetaisl:ImageDetaisl
        })

        const docToSave = await docToCreate.save();
        res.json({
            Message:'Data Saved Successfuly',
            Body:docToSave,
            Data:true
        })
    } catch (error) {
        res.json({
            Message: error.mesage,
            Result: null,
            Data: false
        })
    }
}

const GetProductData = async (req, res) => {
    try {
        // const DocToGet = await ProductModel.findOne(
        //     { Status: 0 }, //Condition
        //     { ProductPrice: 0 } //Projecttion
        //     //Options
        // );
        const docToGet = await ProductModel.find();
        res.json({
            Message: 'All Documents Found',
            Data: true,
            Result: docToGet
        })
    } catch (error) {
        res.json({
            Message: error.mesage,
            Result: null,
            Data: false
        })
    }
}
module.exports = {
    ProductData,
    GetProductData,
   
}