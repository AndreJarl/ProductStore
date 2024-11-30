import mongoose from "mongoose";
import Product from "../models/products.models.js";


export const  getProducts =  async(req,res) =>{
    try{
        const products = await Product.find({});
        res.status(200).json({sucesss:true, data: products});
    }catch(error){
        console.log("error in fetching products");
        res.status(500).json({success: false, message: "Error fetching"});
    }
};

export const createProduct = async(req,res)=>{
    const {name, price, image} = req.body;

    if(!name || !price || !image){
           res.status(400).json({success: false, message:"Please provide all fields"});
    }
     const product = {name, price, image};
    const newProduct = new Product(product);

    try{
         await newProduct.save();
         res.status(201).json({success: true, data:newProduct});
    }catch(error){
          console.log("Error in creating product", error.message);
          res.status(500).json({sucesss: false, message:"Server Error"});
    }
};

export const updateProducts =  async(req, res)=>{
    const {id} = req.params;

    const product = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
           return res.status(404).json({sucess:false, messsage:"Invalid id"});
    }

    try{
           const updatedProduct = await Product.findByIdAndUpdate(id, product,{new: true});
           res.status(201).json({sucesss:true,data:updatedProduct});
    }catch(error){
           res.status(500).json({sucess:false, messsage: "server error"});
    }

};

export const deleteProduct =  async(req,res)=>{
    
    const {id} = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)){
         res.status(404).json({sucess:false, messsage: "invalid id"});
    }

    try{
         await Product.findByIdAndDelete(id);
         res.status(200).json({sucess:true, messsage:"Product deleted"});
    }catch(error){
        res.status(500).json({sucess:false, messsage:"server error"});
    }

};