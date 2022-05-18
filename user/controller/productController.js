const products = require("../model/indexProducts");


const functionOfControllersToRotes = {

    home : (req, res) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end("Online server");
    },

    register : async (req, res) => {    

        const {codigo, nameProduct, descriptionProduct, idMarca} = req.body

        const newProduct = await products.create({
            codigo,
            nameProduct,
            descriptionProduct,
            idMarca
        });

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(newProduct);
    },

    update : (req, res) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end("updated product");
    },

    delete : (req, res) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end("deleted product");
    },

    listAllProducts : async (req, res) => {

        const productListed = products.findAll();

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.send(productListed);
    }

};



module.exports = functionOfControllersToRotes ;