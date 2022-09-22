const path = require("path");
const fs = require("fs");
const cloudinary = require("cloudinary").v2
const { StatusCodes } = require("http-status-codes");

const uploadLocal= async (req, res) => {
    const productImage = req.files.image;

    const imagePath = path.join(__dirname, `../public/uploads/${productImage.name}`);

    await productImage.mv(imagePath)
    return res.status(StatusCodes.OK).json({
        image: { src: `/uploads/${productImage.name}` }
    })
}

const upload = async (req, res) => {
    const result = await cloudinary.uploader.upload(req.files.image.tempFilePath, {
        use_filename: true,
        folder: 'file-upload'
    })

    fs.unlinkSync(req.files.image.tempFilePath);

    res.status(StatusCodes.OK).json({
        image: {
            src: result.url
        }
    })
}

module.exports = { upload }
