import React from "react";
import ProfileUsers from './ProfileUsers'
import { connect } from "react-redux";
import {setUserProfile,getProfileUsers,getStatus} from '../../redux/profile-reducer'
import { useParams } from 'react-router-dom';

export function withRouter(Children){
    return(props)=>{
       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
  } 
  
  class ProfileUsersConteiner extends React.Component {
  
    componentDidMount(){
      this.props.getProfileUsers(this.props.match.params.userId)
      this.props.getStatus(this.props.match.params.userId)
    }
  
    render() {
      console.log(this.props)
      return <ProfileUsers {...this.props} profile={this.props.profile} />
    }
  }
  
  const mapStateToProps =(state)=>({
    profile:state.profilePage.profile,
    users:state.usersPage.usersReducer,
    status:state.profilePage.status,
  })
  
  let withUrlDataConteinerConnect = withRouter(ProfileUsersConteiner)
 
  export default connect(mapStateToProps,{setUserProfile,getStatus,getProfileUsers})(withUrlDataConteinerConnect);