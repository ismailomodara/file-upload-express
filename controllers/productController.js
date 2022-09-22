const Product = require("../models/Product");
const { StatusCodes } = require("http-status-codes");

const index = async (req, res) => {
    const products = await Product.find({})

    res.status(StatusCodes.OK).json({
        success: true,
        products
    })
}

const store = async (req, res) => {
    const { name, price, image } = req.body;
    const product = await Product.create({ name, price, image })

    if(!product) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            success: false,
            data: null
        })
    }

    res.status(StatusCodes.OK).json({
        success: true,
        data: product
    })
}

module.exports = { index, store }
