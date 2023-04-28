const { Categories } = require('../db.js');

// obtenemos todos los generos de la base de datos

const getCategories = async (req, res) => {
    try {
        const categories = await Categories.findAll();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


// obtenemos generos por id

const getCategoriesById = async (req, res) => {
    try {
        const { id } = req.params;
        const categories = await Categories.findByPk(id);
        if (!categories) {
            return res.status(404).json({ error: 'Category not found' });
        }
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// post en la base de datos

const postCategories = async (req, res) => {

    try {
        const { category_name } = req.body;
        const newCategory = await Categories.create({
            category_name
        });
        res.status(201).json(newCategory);

    } catch (error) {
        res.status(500).json({ error: error.message });

    }
}

//put en la base de datos

const putCategories = async (req, res) => {
    try {
        const { id } = req.params;
        const { category_name} = req.body;
        const category = await Categories.findByPk(id);
        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }
        const updatedCategory = await category.update({
            category_name
        });
        res.status(200).json(updatedCategory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//delete en la base de datos

const deleteCategories = async (req, res) => {

    try {
        const { id } = req.params;
        const category = await Categories.findByPk(id);
        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }
        await category.destroy();
        res.status(200).json({ message: 'Category deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { getCategories, postCategories, putCategories, getCategoriesById, deleteCategories };