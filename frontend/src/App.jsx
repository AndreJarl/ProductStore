
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import UpdateProducts from './routes/UpdateProducts'
import CreateProducts from './routes/CreateProduct'
function App() {
  return(
  <>
    <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/" element={<CreateProducts/>} />
       <Route path="/" element={<UpdateProducts/>} />
    </Routes>
  </>
  )
  
}

export default App
