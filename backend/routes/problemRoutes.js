const express = require('express')
const router = express.Router()
const {
  getProblem,
  getProblems,
  setProblem,
  deleteProblem,
  updateProblem
} = require('../controllers/problemController')

router.route('/').get(getProblems).post(setProblem)
router.route('/:title').get(getProblem).delete(deleteProblem).put(updateProblem)

module.exports = router
