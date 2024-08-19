import React from "react";
import { connect } from "react-redux";
import ProfileInfo from "./ProfileInfo";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";
import {getStatus,getUpdeteStatus} from '../../../redux/profile-reducer'

const mapStateToProps = (state) => {
  return {
    profileInfo: state.profilePage.profileInfo,
    auth:state.auth,
    status:state.profilePage.status,
  };
};

export default compose(connect(mapStateToProps,{getStatus,getUpdeteStatus}), withAuthRedirect)(ProfileInfo);
