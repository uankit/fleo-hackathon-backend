const Details = require("../models/Details");

 const buildAncestors = async (id, parent_id) => {
    let ancest = [];
    try {
        let parent_category = await Details.findOne({ "_id": parent_id },{ "category": 1, "ancestors": 1 }).exec();
        if( parent_category ) {
           const { _id, category } = parent_category;
           const ancest = [...parent_category.ancestors];
           ancest.unshift({ _id, category })
           const categories = await Details.findByIdAndUpdate(id, { $set: { "ancestors": ancest } });
         }
      } catch (err) {
          console.log(err.message)
       }
 }

 module.exports = { buildAncestors };
