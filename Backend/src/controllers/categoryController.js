const Category = require('../schema/categoriesSchema');

const createCategory = async (req, res) => {
  if (req.body) {
    const category = new Category(req.body);
    await category.save()
        .then(data => {
          res.status(200).send({ data: data });
        })
        .catch(error => {
          res.status(500).send({ error: error.message });
        });
  }
}

const getAllCategories = async (req, res) => {
  await Category.find({}).populate('vehicles', 'name code model type amount')
      .then(data => {
        res.status(200).send({ data: data });
      })
      .catch(error => {
        res.status(500).send({ error: error.message });
      });
}

const getVehiclesForCategory = async (req, res) => {
  if (req.params && req.params.id) {
    await Category.findById(req.params.id)
        .populate('vehicles', '_id name code model type amount')
        .then(response => {
          res.status(200).send({ data: response });
        })
        .catch(error => {
          res.status(500).send({ error: error.message });
        });
  }
}



module.exports = {
  createCategory,
  getAllCategories,
  getVehiclesForCategory,
};