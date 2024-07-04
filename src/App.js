import React from "react";
import "./App.css";
import Header from "./componentc/Header/Header";
import NavbarConteiner from "./componentc/Navbar/NavbarConteiner";
import Profile from "./componentc/Profile/Profile";
import DialogsConteiner from "./componentc/Dialogs/DialogsConteiner";
import News from './componentc/News/News';
import Music from './componentc/Music/Music';
import Settings from './componentc/Settings/Settings';
import { Route, Routes } from "react-router-dom";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavbarConteiner />
      <div className="app-wrapper-content">
        <Routes>
      <Route path="/profile/*"  element={<Profile/>} />
      <Route path="/dialogs/*" element={<DialogsConteiner />} />
      <Route path="/news/*" element={<News />} />
      <Route path="/music/*" element={<Music />} />
      <Route path="/settings/*" element={<Settings />} />
      </Routes>
      </div>
    </div>
  );
};

export default App;
