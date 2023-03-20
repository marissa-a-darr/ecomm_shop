const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      attributes: ['id', 'category_name'],
      include: [{ model: Product, attributes: ['product_name'] }],
    });
    res.status(200).json(categoryData);
  } catch (err) {

    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findOne({
      where: { id: req.params.id },
      attributes: ['id', 'category_name'],
      include: [{ model: Product, attributes: ['product_name'] }],
    });

    if (categoryData) {
      res.status(200).json(categoryData);
    } else {
      res.status(404).json({ message: 'Sorry! No category found by id!' });
      return;
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (categoryData[0]) {
      res.status(200).json(categoryData);
    } else {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const deletedCategory = await Category.destroy({
      where: { id: req.params.id },
      attributes: ['id', 'category_name'],
      include: [{ model: Product, attributes: ['product_name'] }],
    });

    if (deletedCategory) {
      res.status(200).json(deletedCategory);
    } else {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
