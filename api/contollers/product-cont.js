const db = require('../models');
const PRODUCT = db.procucts;
const REVIEW = db.reviews;





exports.addProduct =async (req,res)=>{
    try{

        const { title,price, description,published } = req.body;

        const prouct = await PRODUCT.create({
            title,
            price,
            description,
            published
        });

        return res.status(200).json({message:"Product added successfully", prouct })

    }catch(error){
        console.log(error.message)
    }

}


//get all product 

exports.getAllProduct = async(req,res)=>{
    try{

        let products = await PRODUCT.findAll({  //attribute - you can mention only this filed i want like title,price otherwise use findAll({})
            attributes:[
                'title',              
                'price'
            ]
        });
        return res.status(200).json({ products })

    }catch(error){
        console.log(error.message)
    }

}

exports.getSingleProduct = async(req,res)=>{
    try{
         
        let  { productId } = req.params

        let product = await PRODUCT.findOne({where: { id:productId }});
        return res.status(200).json({ product })

    }catch(error){
        console.log(error.message)
    }

}


exports.updateProduct = async(req,res)=>{
    try{
         
        let  { productId } = req.params
        const prouct = await PRODUCT.update(req.body,{where:{ id:productId}})
        return res.status(200).json({ message:'product updated'})

        

    }catch(error){
        console.log(error.message)
    }

}

exports.deleteProduct = async(req,res)=>{
    try{
         
        let  { productId } = req.params
        await PRODUCT.destroy({ where:{ id:productId}})
        return res.status(200).json({ message:'product deleted'})

        

    }catch(error){
        console.log(error.message)
    }

}






