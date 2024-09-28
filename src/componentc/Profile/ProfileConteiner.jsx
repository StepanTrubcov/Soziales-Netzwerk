import React from "react";
import {getUsers
} from "../../redux/dialogs-reducer";
import {getStatus,newImg,getProfileUsers} from '../../redux/profile-reducer'
import { connect } from "react-redux";
import Profile from "./Profile";

class ProfileConteiner extends React.Component {

  componentDidMount(){
    const userId = 31497;
    this.props.getStatus(userId)
      this.props.getUsers(this.props.currentPage, this.props.pageSize);
      this.props.newImg(userId)
      this.props.getProfileUsers(userId)
  }

  render(){
    if(this.props.profile != null ){
    return <Profile {...this.props} />
  }}
}

const mapStateToProps =(state) =>({
auth:state.auth,
profile:state.profilePage.profile,
})

export default connect(mapStateToProps,{getStatus,getUsers,newImg,getProfileUsers})(ProfileConteiner)
