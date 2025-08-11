import React from "react";
import ProfileInfo from './ProfileInfo'
import { connect } from "react-redux";
import { addInfoActionCreator, setEditProfileWindow, getStatus, NewStatus, NewPhoto } from "../../../redux/profile_reducer";
import { compose } from "redux";

class ProfileInfoConteiner extends React.Component {

    profileId = this.props.profileId

    componentDidMount() {
        if (!this.profileId) {
            this.profileId = 32372
        }
        this.props.getStatus(this.profileId)
    }

    render() {
        if (this.props.profile) {
            return <ProfileInfo NewPhoto={this.props.NewPhoto} updateStatus={this.props.NewStatus} profileId={this.props.profileId} profile={this.props.profile} addInfoActionCreator={this.props.addInfoActionCreator} info={this.props.info} />
        }
    }
}

const mapStateToProps = (state) => ({
    info: state.profile
})


export default compose(connect(mapStateToProps, { NewPhoto, NewStatus, getStatus, addInfoActionCreator, setEditProfileWindow }))(ProfileInfoConteiner)