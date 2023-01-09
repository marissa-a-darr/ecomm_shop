const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      //TODO
    });
    res.status(200).json(tagData)
  } catch(err) {
    //TODO
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      //TODO
    });

  } catch(err) {
    //TODO
  }
});

router.post('/', async (req, res) => {
  // create a new tag
   try {
    const tagData = await Tag.create({
      //TODO
    });
  } catch(err) {
    //TODO
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
   try {
    const tagData = await Tag.update(req.body, {
      //TODO
    });

  } catch(err) {
    //TODO
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData = await Tag.destroy({
      //TODO
    });

} catch(err) {
  //TODO
}
});

module.exports = router;
