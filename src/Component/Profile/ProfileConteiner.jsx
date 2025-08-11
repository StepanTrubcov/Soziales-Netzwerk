import React from "react";
import Profile from './Profile'
import { connect } from "react-redux";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import { getProfile } from '../../redux/profile_reducer'
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileConteiner extends React.Component {

    profileId = this.props.router.params.userId;

    componentDidMount() {

        if (!this.profileId) {
            this.profileId = this.props.userId.userId
        }

        this.props.getProfile(this.profileId)
    }

    render() {
        return <div>
            <Profile {...this.props} profile={this.props.profile} profileId={this.profileId} />
        </div>
    }
}

const mapStateToProps = (state) => ({
    profile: state.profile.profile,
    newPostWindow: state.profile.newPostWindow,
    userId: state.auth
})

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default compose(
    connect(mapStateToProps, { getProfile }),
    withRouter,
    withAuthRedirect,
)(ProfileConteiner)