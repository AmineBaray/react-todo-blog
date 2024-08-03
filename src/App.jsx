import './App.css'
import './index.css'
import Navbar from './Navbar'
import Home from './Home'
import NewBlog from './NewBlog'
// in react-router-dom "V6" the Switch not exect is change by Routes and Route the component in side hem with par element
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {

  return (
    <Router>
      <div className=''>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/NewBlog' element={<NewBlog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
