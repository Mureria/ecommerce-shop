const express = require('express');
const router = express.Router();

const Category = require('../models/categories');


// Create categories
router.post('/', async (req,res)=>{
    try {
        let category = new Category({
            name: req.body.name,
            icon: req.body.icon,
            color: req.body.color
        })
        category = await category.save();
    
        if(!category)
        return res.status(400).send('the category cannot be created!')
    
        res.send(category);
    } catch (error) {
        return res.status(500).json(error.message) 
    }
})


// Get all categories
router.get(`/all`, async (req, res) =>{
    try {
        const categoryList = await Category.find();

        if(!categoryList) {
            res.status(500).json('No categories added')
        } 

        res.status(200).send(categoryList);
    } catch (error) {
        res.status(500).json(error.message);
    }
})



// Get category by id
router.get('/:id', async(req,res)=>{
    try {
        const category = await Category.findById(req.params.id);

        if(!category) {
            res.status(500).json('The category with the given ID was not found.')
        } 

        res.status(200).send(category);
    } catch (error) {
        res.status(500).json(error.message);
    }
})




// Update category by id
router.put('/:id',async (req, res)=> {
    try {
        const category = await Category.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                icon: req.body.icon,
                color: req.body.color,
            },
            { new: true}
        )
    
        if(!category) {
            return res.status(400).send('the category cannot be created!')
        }
    
        res.send(category);
    } catch (error) {
        res.status(500).json(error.message);
    } 
})

router.delete('/:id', async(req, res)=>{
    try {
        const category = await Category.findByIdAndRemove(req.params.id);

        if(category) {
            return res.status(200).json('Category deleted! successfully!')
        } 

        return res.status(404).json("Category not found!");
    } catch (error) {
        return res.status(500).json(error.message)  
    }
});



module.exports =router;