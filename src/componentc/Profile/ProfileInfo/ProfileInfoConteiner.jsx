import React from "react";
import { connect } from "react-redux";
import ProfileInfo from "./ProfileInfo";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";
import {getStatus,getUpdeteStatus,savePhoto,saveProfile} from '../../../redux/profile-reducer'

const mapStateToProps = (state) => {
  return {
    profile:state.profilePage.profile,
    owner:state.profilePage,
    img: state.profilePage.img,
    auth:state.auth,
    status:state.profilePage.status,
  };
};

export default compose(connect(mapStateToProps,{getStatus,getUpdeteStatus,savePhoto,saveProfile}), withAuthRedirect)(ProfileInfo);
