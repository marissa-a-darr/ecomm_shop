const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      //TODO
    });
  } catch (err) {
    //TODO
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
   try {
    const categoryData = await Category.findByPk(req.params.id, {
      //TODO
    })

  } catch(err) {
    //TODO
  }
});

router.post('/', async (req, res) => {
  // create a new category
   try {
    const categoryData = await Category.create({
      //TODO
    });
  } catch(err) {
    //TODO
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
   try {
    const categoryData = await Category.update(req.body, {
      //TODO
    });

  } catch(err) {
    //TODO
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      //TODO
    });

} catch(err) {
  //TODO
}
});

module.exports = router;
