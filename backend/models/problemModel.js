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
        input: { type: Object },
        output: { type: Object },
      },
      default: [],
    },

    constraints: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Problem", problemSchema);


// Okay now I want to give my testcases which are present in the testcases array with each element consists of two array inputs and "output"