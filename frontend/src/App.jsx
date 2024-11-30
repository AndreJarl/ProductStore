
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import UpdateProducts from './routes/UpdateProducts'
import CreateProducts from './routes/CreateProduct'
function App() {
  return(
  <>
    <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/create" element={<CreateProducts/>} />
       <Route path="/update" element={<UpdateProducts/>} />
    </Routes>
  </>
  )
  
}

export default App
