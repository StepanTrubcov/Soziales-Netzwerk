import React from "react";
import "./App.css";
import HeaderConteiner from "./componentc/Header/HeaderConteiner";
import NavbarConteiner from "./componentc/Navbar/NavbarConteiner";
import ProfileConteiner from "./componentc/Profile/ProfileConteiner";
import DialogsConteiner from "./componentc/Dialogs/DialogsConteiner";
import NewsConteiner from './componentc/News/NewsConteiner';
import Music from './componentc/Music/Music';
import Settings from './componentc/Settings/Settings';
import ProfileUsersConteiner from './componentc/ProfileUsers/ProfileUsersConteiner';
import LoginConteiner from './componentc/Login/LoginConteiner'
import { Route, Routes } from "react-router-dom";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <HeaderConteiner />
      <NavbarConteiner />
      <div className="app-wrapper-content">
        <Routes>
      <Route path="/profile/*"  element={<ProfileConteiner/>} />
      <Route path="/dialogs/*" element={<DialogsConteiner />} />
      <Route path="/news/*" element={<NewsConteiner />} />
      <Route path="/music/*" element={<Music />} />
      <Route path="/settings/*" element={<Settings />} />
      <Route path="/profileUsers/:userId" element={<ProfileUsersConteiner />} />
      <Route path="/login" element={<LoginConteiner />} />
      </Routes>
      </div>
    </div>
  );
};

export default App;
