import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Header from './Component/Header/HeaderConteiner';
import { Route, Routes } from 'react-router-dom';
import Profile from './Component/Profile/ProfileConteiner';
import Dialog from './Component/Dialogs/DialogsConteiner';
import FindUsers from './Component/FindUsers/FindUsersConteiner';
import Login from './Component/Login/Login';
import { connect } from 'react-redux';
import React from 'react';
import { initialize } from './redux/app_reducer'
import Prelouder from './Component/common/prelouder';

class App extends React.Component {

  componentDidMount() {
    this.props.initialize()
  }


  render() {
    if (!this.props.initialized) {
      return <Prelouder />
    } else {

      if (!this.props.IsFetching) {
        return (
          <div className="col">
            <Routes>
              <Route path="*" element={<Login />} />
            </Routes>
          </div>
        );
      }

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
                <Route path="/profile/:userId?" element={<Profile />} />
                <Route path="/dialog/:userId?" element={<Dialog />} />
                <Route path="/findUsers" element={<FindUsers />} />
              </Routes>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  IsFetching: state.auth.IsFetching,
  initialized: state.app.initialized
})

export default connect(mapStateToProps, { initialize })(App);
