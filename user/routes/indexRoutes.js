const express = require("express");
const  { route }  = require("express/lib/application");

const productController = require("../controller/productController");
const routes = express.Router();

routes.get("/", productController.home);
routes.post("/products/register", productController.register);
routes.put("/update?:id", productController.update);
routes.delete("/delete", productController.delete);
routes.get("/products/listAllProducts/", productController.listAllProducts );



module.exports = routes;