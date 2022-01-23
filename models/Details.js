const mongoose = require("mongoose");

const DetailsSchema = new mongoose.Schema(
  {
    category: { type: String, required: true },
    targetSales: { type: Number, required: true },
    currentSales: { type: Number, required: true },
    indicator: String,
    label: String,
    percentage: Number,
    parent: {
      type: mongoose.Schema.Types.ObjectId,
      default: null,
      ref: "Details",
    },
    ancestors: [
      {
        _id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Details",
          index: true,
        },
        category: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Details", DetailsSchema);
