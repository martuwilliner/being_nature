const product = require ("../models/product")
const category = require ("../models/category")
const size = require ("../models/size")
const type = require ("../models/type")

const productsController = {
    showDetail: (req,res) => {
        return res.render('products/productDetail', 
        {product: //ES EL NOMBRE CON EL Q SE LLAMA A LA FUNCION
            product.oneWithExtra(req.params.id),
        styles: ["/css/mainAlmacenProductDetail.css", "/css/mainGourmetProductDetail.css", "/css/mainCosmeticaProductDetail.css"],
        products: product.allByCategory(req.params.category),
        title: product.one(req.params.id).name
          
    }
        );
    },
    category:(req, res) =>{
		res.render("products/category", {
			products: product.allByCategory(req.params.category),
            styles: ["/css/main-category.css"],
            title: product.one(req.params.id).category
		})
	},
    cart: (req,res) => {
        return res.render('products/productCart',{
        styles: ["/css/main-product.css"],
        products: null,
        title: "Tu Carrito de Compras"
        });
    },
    addCart: (req,res) => {
        return res.render('products/productCart',{
        styles: ["/css/main-product.css"],
        products: product.oneWithExtra(req.params.id)
        });
    },
    create: (req,res) => {
        return res.render('products/createProduct',{
            styles: ["/css/createProduct.css"],
            category: category.all(),
            size: size.all(),
            type: type.all(),
            title: "Crear nuevo producto"
        });    
    },
    save: (req,res) => {
/*          return res.send({
            data: req.body, 
            oferts: req.body.oferts == "true" ? true : false,
            files: req.files //porq esta ANY, si es SINGLE es file
        })  */
        let result = product.new(req.body,req.files) //porq esta ANY, si es SINGLE es file
        return result == true ? res.redirect("/") : res.send("Error al cargar la informacion") 
    },
    edit: (req,res) => {
        /*return res.send({
            product: product.oneWithExtra(req.params.id),
            category: category.all(),
            size: size.all(),
            types: type.all(),
            edit:true
        })*/  
        return res.render('products/editProduct',{
            styles: ["/css/editProduct.css"],
            product: product.oneWithExtra(req.params.id),
            category: category.all(),
            size: size.all(),
            types: type.all(),
            edit:true,
            title: "Editar producto"
        });
    },
    update: (req,res) => {
       /*return res.send({
            data: req.body, 
            oferts: req.body.oferts == "true" ? true : false,
            files: req.files //porq esta ANY, si es SINGLE es file
        }) */  
        let result = product.edit(req.body,req.files,req.params.id) //porq esta ANY, si es SINGLE es file
        return result == true ? res.redirect("/") : res.send("Error al cargar la informacion") 
    },
    delete: (req,res) => {
        let result = product.delete(req.params.id);
        return result == true ? res.redirect("/") : res.send("Error al cargar la informacion") 
    }
}

module.exports = productsController;