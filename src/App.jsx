import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Landing from './pages/main/mainPage'
import ApiList from './pages/list/apiList'

function App() {

  return (
   <>
    <Router>
      <Routes>
        <Route exact path='/' element={<Landing/>}/>
        <Route exact path='/list' element={<ApiList/>}/>
      </Routes>
    </Router>
   </>
   
  )
}

export default App
