import axios from 'axios'

const API_URL = '/api/problems/'

// Create new problem
const createProblem = async (problemData) => {
  const response = await axios.post(API_URL, problemData)
  return response.data
}

// Get problems
const getProblems = async () => {
    const response = await axios.get(API_URL)
    return response.data
}

// Delete problem
const deleteProblem = async (title) => {
 // const config = {
   // headers: {
     // Authorization: `Bearer ${token}`,
    //},
  //}

  const response = await axios.delete(API_URL + title)
  return response.data
}

const updateProblem = async (title) => {
 // const config = {
   // headers: {
     // Authorization: `Bearer ${token}`,
    //},
  //}

  const response = await axios.put(API_URL + title)
  return response.data
}

const problemService = {
  createProblem,
  getProblems,
  updateProblem,
  deleteProblem,
}

export default problemService
