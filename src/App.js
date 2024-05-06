import React from "react";
import "./App.css";
import Header from "./componentc/Header/Header";
import Nav from "./componentc/Navbar/Navbar";
import Profile from "./componentc/Profile/Profile";
import Dialogs from "./componentc/Dialogs/Dialogs";
import News from './componentc/News/News';
import Music from './componentc/Music/Music';
import ProfileDimych from './componentc/ProfileDimych/ProfileDimych'
import ProfileSveta from './componentc/ProfileSveta/ProfileSveta'
import Settings from './componentc/Settings/Settings';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="app-wrapper-content">
        <Routes>
      <Route path="/profile/*"  element={<Profile postData={props.state.profilePage.postData} />} />
      <Route path="/dialogs/*" element={<Dialogs dialogsData={props.state.profilePage.dialogsData} messagesData={props.state.messagesPage.messagesData} />} />
      <Route path="/news/*" element={<News />} />
      <Route path="/music/*" element={<Music />} />
      <Route path="/settings/*" element={<Settings />} />
      <Route path="/profileDimych/*"  element={<ProfileDimych postDataDimych={props.state.profilePage.postDataDimych} />} />
      <Route path="/profileSveta/*"  element={<ProfileSveta postDataSveta={props.state.profilePage.postDataSveta} />} />
      </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
};

export default App;
