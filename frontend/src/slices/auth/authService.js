import axios from 'axios'

const API_URL = '/api/users/'
// {
//   "_id": "6617f23449be7f2b5677ba75",
//   "name": "Hussain",
//   "email": "lohahussain0@gmail.com",
//   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MTdmMjM0NDliZTdmMmI1Njc3YmE3NSIsImlhdCI6MTcxMzA5NTYzNSwiZXhwIjoxNzE1Njg3NjM1fQ.iJ_-Oly0ftddKc7xk3PnbqVTD6c0yPid7Q5G_P4VcrE"
// }
// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData)
  console.log("Registered")
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}
 
// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login,
}

export default authService
