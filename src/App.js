import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './Components/Header';
import './App.css';
import Itteratie1 from './Pages/Itteratie1';
import Itteratie2 from './Pages/Itteratie2';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<Itteratie1/>}/>
          <Route path='/2' element={<Itteratie2/>}/>
        </Routes>  
      </div>
    </Router>
  );
}
  

export default App;
