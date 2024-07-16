import React from 'react'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Video from './Components/Video'
const App = () => {
  const [sidebar, setSidebar] = React.useState(true);
  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar}/>} />
        <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
      </Routes>
      </div>
  )
}

export default App