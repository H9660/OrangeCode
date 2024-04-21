const asyncHandler = require("express-async-handler");

const Problem = require("../models/problemModel");
// @desc    Get problems
// @route   GET /api/problems
// @access  Private
const getProblem = asyncHandler(async (req, res) => {
  const problem = await Problem.find({ title: req.params.title });
  if (!problem) {
    res.status(400);
    throw new Error("Problem not found");
  }
  res.status(200).json(problem);
});

const getProblems = asyncHandler(async (req, res) => {
  const problems = await Problem.find();
  res.status(200).json(problems);
});

// @desc    Set problem
// @route   POST /api/problems
// @access  Private
const setProblem = asyncHandler(async (req, res) => {
  if (!req.body.title || !req.body.statement) {
    res.status(400);
    throw new Error("Please add all the required fields");
  }

  const problem = await Problem.create({
    title: req.body.title,
    statement: req.body.statement,
    testcases: req.body.testcases,
  });

  res.status(200).json(problem);
});

// // @desc    Update problem
// // @route   PUT /api/problems/:id
// // @access  Private
const updateProblem = asyncHandler(async (req, res) => {
  try {
    const updatedProblem = await Problem.findOneAndUpdate(
      { title: req.params.title },
      req.body,
      { new: true }
    );

    if (!updatedProblem) {
      res.status(404).send("Problem not found");
      return;
    }
    res.status(200).send(updatedProblem);
  } catch (err) {
    console.error("Error updating problem:", err);
    res.status(500).send("Cannot update the problem");
  }
});

// // @desc    Delete problem
// // @route   DELETE /api/problems/:id
// // @access  Private
const deleteProblem = asyncHandler(async (req, res) => {
  try {
    const deletedProblem = await Problem.findOneAndDelete({
      title: req.params.title,
    });

    if (!deletedProblem) {
      res.status(404).send("Problem not found");
      return;
    }
    res.status(200).send(deletedProblem);
  } catch (err) {
    console.error("Error deleting problem:", err);
    res.status(500).send("Cannot delete the problem");
  }
});

module.exports = {
  getProblem,
  getProblems,
  setProblem,
  updateProblem,
  deleteProblem,
};
