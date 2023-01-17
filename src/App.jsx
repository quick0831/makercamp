import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ContactInfo from './ContactInfo';
import Navbar from './Navbar';
import SelfIntro from './SelfIntro';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<SelfIntro />} />
          <Route path='/contact' element={<ContactInfo />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
