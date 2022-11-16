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
const GetProductById = async (req, res) => {
    try {
        const Id = req.params._id;
        const docToFind = await ProductModel.findOne(
            { _id:Id },
            // { status:1 } Projection
        )
        res.json({
            Message:'Data Found Successfuly',
            Data:true,
            Result:docToFind
        })
    } catch (error) {
        res.json({
            Message: error.mesage,
            Result: null,
            Data: false
        })
    }
}
const DeleteProductById = async (req, res) => {
    try {
        const Id = req.params._id;
        const DocToDelete = await ProductModel.updateOne(
            { _id:Id },
            { $set:{softDeleteStatus:1} }
            );
            // const docToDelete = await ProductModel.deleteOne(
            //     { _id:Id }
            // )
        res.json({
            Message: 'Document Deleted Successfuly',
            Data: true,
            Result: DocToDelete
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
    GetProductById,
    DeleteProductById,
}