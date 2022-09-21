const { StatusCodes } = require("http-status-codes");

const upload = async (req, res) => {
    res.send("Upload product image")
}

module.exports = { upload }
