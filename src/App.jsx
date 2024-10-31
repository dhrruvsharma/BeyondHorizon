import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './Components/Landing/Landing'
import Dash from './Components/Dashboard/Dash'
import Explore from './Components/Explore/Explore'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/dashboard' element={<Dash />} />
          <Route path='/explore' element={<Explore />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
