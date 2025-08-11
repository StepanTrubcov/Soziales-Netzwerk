import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth,
})

const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth.IsFetching) {
                return <Navigate to="/login" />
            }
            return <Component {...this.props} />
        }
    }

    const AuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return AuthRedirectComponent;
}


export default withAuthRedirect;