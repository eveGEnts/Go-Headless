import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';


//import './App.css';

/*
function App() {
  return (
    <div>
      <button type="button" className="btn btn-outline-primary">Primary</button>
      <button type="button" className="btn btn-outline-success">Success</button>
    </div>
  );
}
  */

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/home' element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
