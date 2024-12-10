const db = require('../models');
const REVIEW = db.reviews;
const PRODUCT = db.procucts;




exports.addReview = async (req,res)=>{
    try{ 
         
        const { productId } = req.params;
        const { rating , description }= req.body;

         // Check if the product exists
         const product = await db.PRODUCT.findByPk(productId);
         if (!product) {
             return res.status(404).json({ message: 'Product not found' });
         }
 
        const review = await REVIEW.create({
            rating,
            description,
            product_id:   productId
        })
        return res.status(200).json({ message:'Review added succesfully'})


    }catch(error){
        console.log(error.message)
    }
}


exports.getProductReviews = async (req,res)=>{
    try{

        const { productId } = req.params;

          // Fetch the product and include its reviews
          const product = await db.PRODUCT.findByPk(productId, {
            include: [
                {
                    model: db.reviews,
                    as: 'reviews'
                }
            ]
        });

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

     return res.status(200).json(product.reviews);

    }catch(error){
        console.log(error.message)
    }
}