import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './components/Layout'
import About from './components/About'
import Therapy from './components/Therapy'
import Home from './components/Home'
import Contact from './components/Contact'
import Admin from './components/Admin'


function App() {

  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="therapy" element={<Therapy />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="admin" element={<Admin />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
