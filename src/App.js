import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Header from './Component/Header/Header';
import { Route, Router, Routes } from 'react-router-dom';
import Profile from './Component/Profile/Profile';
import Dialog from './Component/Dialogs/DialogsConteiner';
import FindUsers from './Component/FindUsers/FindUsersConteiner';

function App() {
  return (
    <div className='col' >
      <div className="App">
        <div className='header' >
          <Header />
        </div>
        <div className='navbar'>
          <Navbar />
        </div>
        <div className='content'>
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/dialog/*" element={<Dialog />} />
            <Route path="/findUsers" element={<FindUsers />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
