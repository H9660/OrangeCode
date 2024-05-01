import axios from "axios";

const API_URL = "/api/problems/";

// Create new problem
const createProblem = async (problemData) => {
  const response = await axios.post(API_URL, problemData);
  return response.data;
};

const getProblem = async (title) => {
  try {
    const response = await axios.get(API_URL + `${title}`);
    if (response.data) return response.data;
  } catch (error) {
    console.error("Error occurred:", error);
  }
};
// Get problems
const getProblems = async () => {
  try {
    const response = await axios.get(API_URL);
    if (response.data) return response.data;
  } catch (err) {
    console.log(err);
  }
};

// Delete problem
const deleteProblem = async (title) => {
  // const config = {
  // headers: {
  // Authorization: `Bearer ${token}`,
  //},
  //}

  const response = await axios.delete(API_URL + title);
  return response.data;
};

const updateProblem = async (title) => {
  // const config = {
  // headers: {
  // Authorization: `Bearer ${token}`,
  //},
  //}

  const response = await axios.put(API_URL + title);
  return response.data;
};

const submitCode = async (submitData) => {
  try {
    const response = await axios.post(API_URL + '/submit', submitData);
    return response.data;
  } catch (error) {
    console.log("Error occured: ", error);
  }
};

const problemService = {
  createProblem,
  getProblem,
  getProblems,
  updateProblem,
  deleteProblem,
  submitCode,
};

export default problemService;
