const express = require('express')
const router = express.Router()
const {
  getProblem,
  getProblems,
  setProblem,
  deleteProblem,
  deleteAllProblems,
  updateProblem
} = require('../controllers/problemController')

router.route('/').get(getProblems).post(setProblem).delete(deleteAllProblems)
router.route('/:title').get(getProblem).delete(deleteProblem).put(updateProblem)

module.exports = router
