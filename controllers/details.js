const dotenv = require("dotenv");
const Details = require("../models/Details");
const { buildAncestors } = require("../config/buildAncestor");
dotenv.config();

// Creating Category And SubCategory with current and total target sales
const createLevel = async (req, res) => {
  let parent = req.body.parent ? req.body.parent : null;
  const category = new Details({
    category: req.body.category,
    targetSales: req.body.targetSales,
    currentSales: req.body.currentSales,
    parent,
  });
  let percentage = (category.currentSales / category.targetSales) * 100;
  category.percentage = percentage;

  if (percentage <= 33) {
    category.indicator = "red";
    category.label = "At Risk";
  } else if (percentage > 33 && percentage <= 66) {
    category.indicator = "yellow";
    category.label = "Off Track";
  } else {
    category.indicator = "green";
    category.label = "On Track";
  }
  try {
    let newCategory = await category.save();
    buildAncestors(newCategory._id, parent);
    res.status(201).send({ res: "Category Saved" });
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get the related parents for a category. Return empty if no parent is found.
const getAncestorLevel = async (req, res) => {
  try {
    const result = await Details.find({ category: req.query.category })
      .select({
        _id: false,
        category: true,
        "ancestors.category": true,
      })
      .exec();
    res.status(200).send({ status: "success", result: result });
  } catch (err) {
    res.status(500).send(err);
  }
};

// Retrieve the category details along with the n-th level child.
const getChildLevel = async (req, res) => {
  try {
    const result = await Details.find({
      "ancestors._id": req.query.category_id,
    })
      .select({ _id: false, category: true })
      .exec();
    res.status(201).send({ status: "success", result: result });
  } catch (err) {
    res.status(500).send(err);
  }
};

// To delete all the levels
const deleteLevel = async (req, res) => {
  err = await Category.findByIdAndRemove({
    category_id: req.query.category_id,
  });
  if (!err) result = await Details.deleteMany({ "ancestors._id": category_id });
};
module.exports = { createLevel, getAncestorLevel, getChildLevel, deleteLevel };
