import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import NavbarHeader from './components/navbar/Navbar';
import Home from './Pages/home/Home';
import Analyze from './Pages/analyze/Analyze';
import Bank from './Pages/bank/Bank';
import Country from './Pages/country/Country';
import Grouping from './Pages/grouping/Grouping';
import Groups from './Pages/groups/Groups';
import Countact from './Pages/countact/Countact';

function App() {
  return (
    <div className="App">
      <NavbarHeader />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/analyze' element={<Analyze />} />
        <Route path='/bank' element={<Bank />} />
        <Route path='/country' element={<Country />} />
        <Route path='/grouping' element={<Grouping />} />
        <Route path='/groups' element={<Groups />} />
        <Route path='/countact' element={<Countact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
