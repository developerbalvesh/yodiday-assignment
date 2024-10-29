import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import Project from './pages/Project'
import Saved from './pages/Saved'
import Shared from './pages/Shared'
import Achievement from './pages/Achievement'
import Portfolio from './pages/Portfolio'
import Inputs from './pages/Inputs'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/dashboard/project' element={<Project />} />
      <Route path='/dashboard/saved' element={<Saved />} />
      <Route path='/dashboard/shared' element={<Shared />} />
      <Route path='/dashboard/achievement' element={<Achievement />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/inputs' element={<Inputs />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App
