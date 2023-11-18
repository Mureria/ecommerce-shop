const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Product = require('../models/products');
const Category  = require('../models/categories');


//Create Product

router.post(`/`, async (req, res) =>{
    try {
        const {name, description, richDescription, brand, price, category, countInStock, rating, isFeatured, image, images, numReviews} = req.body;

        const existingProduct = await Product.findOne({ name, description });
        
        if(existingProduct) {
            return res.status(400).send('Product already exists!')
        }

        const cat = await Category.findById(req.body.category);
       
        if(!cat) {
            return res.status(400).send('Invalid Category')
        }
    
        let product = new Product({
            name,
            description,
            richDescription,
            brand,
            price,
            image,
            images,
            category,
            countInStock,
            rating,
            numReviews,
            isFeatured,
        })
    
        product = await product.save();
    
        if(!product) {
            return res.status(500).send('The product cannot be created')
        }
    
        res.status(200).send(product);
    } catch (error) {
        res.status(500).json(error.message)

    }
})



// Get product by id
router.get(`/:id`, async (req, res) =>{
    try {
        const product = await Product.findById(req.params.id)
        .populate('category');

        if(!product) {
          return  res.status(500).json('No product found!')
        } 
        res.send(product); 
    } catch (error) {
        res.status(500).json(error.message);
    }
    
})



router.get('/', async (req, res) =>{
    try {
        let filter = {};
        if(req.query.categories)
        {
             filter = {category: req.query.categories.split(',')}
        }
    
        const productList = await Product.find(filter).populate('category');
    
        if(!productList) {
            res.status(500).json({success: false})
        } 

        res.send(productList);
    } catch (error) {
        return res.status(500).json(error.message);
    }
   
})



// Update product 
router.put('/:id',async (req, res)=> {
   try {

    const productId = await Product.findById(req.params.id);
    
    if(!productId){
        return res.status(400).send('Invalid Product Id')
    }

    const category = await Category.findById(req.body.category);
    
    if(!category) return res.status(400).send('Invalid Category')

    const product = await Product.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            description: req.body.description,
            richDescription: req.body.richDescription,
            image: req.body.image,
            brand: req.body.brand,
            price: req.body.price,
            category: req.body.category,
            countInStock: req.body.countInStock,
            rating: req.body.rating,
            numReviews: req.body.numReviews,
            isFeatured: req.body.isFeatured,
        },
        { new: true}
    )

    if(!product){
    return res.status(500).send('the product cannot be updated!')
    }
    res.send(product);
   } catch (error) {
     res.status(500).json(error.message);
   }
})



// Delete product 
router.delete('/:id', async(req, res)=>{
    try {
       const product = await Product.findByIdAndDelete(req.params.id);

       if(!product) {
        return res.status(404).json('Product not found!')
    } 

    res.status(200).json('Product deleted successfully!')
    }catch(error){
        res.status(500).json(error.message);
    }
});
    
    
// Get number of products
router.get(`/get/count`, async (req, res) =>{
    try {
        const productCount = await Product.countDocuments();

        if(!productCount) {
            res.status(500).json('No products')
        } 
        
        res.status(200).send(`${productCount} products`); 
    } catch (error) {
        res.status(500).json(error.message);
    }
});



module.exports =router;