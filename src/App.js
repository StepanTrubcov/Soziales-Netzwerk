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
import ProfileSacha from './componentc/ProfileSacha/ProfileSacha'
import ProfileVasay from "./componentc/ProfileVasay/ProfileVasay";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Nav FriendsData={props.state.FriendsPage.FriendsData} />
      <div className="app-wrapper-content">
        <Routes>
      <Route path="/profile/*"  element={<Profile postData={props.state.profilePage} dispatch={props.dispatch} newPost={props.state.profilePage}/>} />
      <Route path="/dialogs/*" element={<Dialogs dialogsData={props.state.messagesPage.dialogsData} messagesData={props.state.messagesPage.messagesData} dispatch={props.dispatch} newMessageText={props.state.messagesPage.newMessageText}/>} />
      <Route path="/news/*" element={<News />} />
      <Route path="/music/*" element={<Music />} />
      <Route path="/settings/*" element={<Settings />} />
      <Route path="/profileDimych/*"  element={<ProfileDimych postDataDimych={props.state.profilePageDimych} />} />
      <Route path="/profileSveta/*"  element={<ProfileSveta postDataSveta={props.state.profilePageSveta} />} />
      <Route path="/profileSacha/*"  element={<ProfileSacha postDataSacha={props.state.profilePageSacha} />} />
      <Route path="/profileVasay/*"  element={<ProfileVasay postDataVasay={props.state.profilePageVasay} />} />
      </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
};

export default App;
