import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import PasswordReset from './pages/PasswordReset'
import ProblemForm from './pages/ProblemForm'

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/problems' element={<Dashboard/>} />
            <Route path='/:user' element={<Profile/>} />
            <Route path='/resetpassword' element={<PasswordReset/>} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
