import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({
            success: true,
            data: products
        });

    } catch(error) {
        console.log(error);
        res.status(500).json({
            success: true,
            message: "Server Error"
        });
    }
}

export const getProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const products = await Product.find({_id: id});
        res.status(200).json({
            success: true,
            data: products
        });

    } catch(error) {
        console.log(error);
        res.status(500).json({
            success: true,
            message: "Server Error"
        });
    }
}

export const createProduct = async (req, res) => {
    const product = req.body; // user will send this data

    if(!product.name || !product.price || !product.image) {
        return res.status(400).json({
            success: false,
            message: "Please provide all fields"
        });
    }

    const newProduct = new Product(product);
    
    try {
        await newProduct.save();
        res.status(201).json({
            success: true,
            data: newProduct
        });
        
    } catch(error) {
        console.log("Error in Create product:", error.message);
        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
}

export const updateProduct = async (req, res) => {
    const {id} = req.params;

    const product = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
            success: false,
            message: "Invalid Product Id"
        });
    }
    
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new: true});
        // if we don't use {new: true}, findByIdAndUpdate method will return object before updation
        // if we use it, then the method will return newly updated object

        res.status(200).json({
            success: true,
            data: updatedProduct
        });
        
    } catch(error) {
        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }

}

export const deleteProduct = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
            success: false,
            message: "Invalid Product Id"
        });
    }

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: "Product deleted"
        });
        
    } catch(error) {
        console.log("Error in deleting product", error.message);
        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
}