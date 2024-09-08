import React from "react";
import {getStatus,getLogin} from '../../redux/profile-reducer'
import { connect } from "react-redux";
import Profile from "./Profile";

class ProfileConteiner extends React.Component {

  componentDidMount(){
    const userId = 31497;
    this.props.getStatus(userId)
  }

  render(){
    return <Profile {...this.props} />
  }
}

const mapStateToProps =(state) =>({
auth:state.auth,
})

export default connect(mapStateToProps,{getStatus})(ProfileConteiner)
