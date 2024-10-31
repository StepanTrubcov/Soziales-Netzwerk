import React from "react";
import "./App.css";
import store from "./redux/redux-store";
import HeaderConteiner from "./componentc/Header/HeaderConteiner";
import NavbarConteiner from "./componentc/Navbar/NavbarConteiner";
import NewsConteiner from "./componentc/News/NewsConteiner";
import Music from "./componentc/Music/Music";
import Settings from "./componentc/Settings/Settings";
import ProfileUsersConteiner, { withRouter } from "./componentc/ProfileUsers/ProfileUsersConteiner";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import {Provider} from 'react-redux'
import Preloader from './componentc/common/Preloader/Preloader'
import {initialize} from './redux/app-reduser'
import { Suspense } from 'react';
import { withAuthRedirect } from "./hoc/withAuthRedirect";

const ProfileConteiner = React.lazy(() => import('./componentc/Profile/ProfileConteiner'));
const DialogsConteiner = React.lazy(() => import('./componentc/Dialogs/DialogsConteiner'));
const LoginConteiner = React.lazy(() => import('./componentc/Login/LoginConteiner'));

class App extends React.Component {
  componentDidMount(){
    this.props.initialize()
}
  render(){
    if(!this.props.initialized){
    return <Preloader/>
    }
    return (
      <div className="app-wrapper">
        <HeaderConteiner />
        <NavbarConteiner />
        <div className="app-wrapper-content">
        <Suspense fallback={<Preloader/>}>
          <Routes>
          <Route exed path="/" element={withAuthRedirect(<ProfileConteiner />)} />
            <Route path="/profile/*" element={<ProfileConteiner />} />
            <Route path="/dialogs/*" element={<DialogsConteiner />} />
            <Route path="/news/*" element={<NewsConteiner />} />
            <Route path="/music/*" element={<Music />} />
            <Route path="/settings/*" element={<Settings />} />
            <Route path="*" element={<h1>404</h1>} />
            <Route
              path="/profileUsers/:userId"
              element={<ProfileUsersConteiner />}
            />
            <Route path="/login" element={<LoginConteiner />} />
          </Routes>
          </Suspense>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>({
  initialized:state.app.initialized
})

let AppConteiner = compose( withRouter, connect(mapStateToProps,{initialize}))(App);


let SamuraiJSApp = (props) =>{
  return <BrowserRouter>
  <Provider store={store}>
      <AppConteiner/>
  </Provider>
  </BrowserRouter>
}

export default SamuraiJSApp;