import React from 'react';
import { connect } from 'react-redux';
import ProfileInfo from './ProfileInfo';


const mapStateToProps = (state) =>{
    console.log({
        profileInfo:state.profilePage.profileInfo
    })
    return({
        profileInfo:state.profilePage.profileInfo
    })
}

const ProfileInfoConteiner = connect(mapStateToProps) (ProfileInfo)

export default ProfileInfoConteiner;