const mongoose = require("mongoose");

const problemSchema = mongoose.Schema(
  {
    
    title: {
      type: String,
      required: [true, "Please add a title to the problem"],
      unique: true,
    },

    statement: {
      type: String,
      requried: [true, "Please add a problem statement"],
    },

    testcases: {
      type: Array,
      of: {
        input: { type: Array },
        output: { type: Object },
      },
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Problem", problemSchema);