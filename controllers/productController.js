const Product = require('../models/productModel');

exports.createProduct = async (req, res) => {
    const { name, description, price } = req.body;
    try {
        const product = await Product.create({ name, description, price });
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ error: 'Error creating product' });
    }
};

exports.getProducts = async (req, res) => {
    const products = await Product.findAll();
    res.json(products);
};

exports.getProductById = async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
};

exports.updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, description, price } = req.body;
    try {
        const product = await Product.update({ name, description, price }, { where: { id } });
        res.json(product);
    } catch (error) {
        res.status(400).json({ error: 'Error updating product' });
    }
};

exports.deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        await Product.destroy({ where: { id } });
        res.status(204).json();
    } catch (error) {
        res.status(400).json({ error: 'Error deleting product' });
    }
};
