import React from "react";
import ProfileInfo from './ProfileInfo'
import { connect } from "react-redux";
import { addInfoActionCreator } from "../../../redux/profile_reducer";

const ProfileInfoConteiner = (props) =>{
    return <ProfileInfo addInfoActionCreator={props.addInfoActionCreator} info={props.info} />
}

const mapStateToProps = (state) =>({
info:state.profile
})

export default connect(mapStateToProps,{addInfoActionCreator})(ProfileInfoConteiner)