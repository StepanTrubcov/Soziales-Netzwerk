import React from "react";
import { connect } from "react-redux";
import Header from './Header'
import { getUserData, deleteLogin } from '../../redux/auth_reducer'
import { Navigate } from "react-router-dom";

class HeaderConteiner extends React.Component {

    componentDidMount() {
        this.props.getUserData()
    }

    deleteLogin() {
        this.props.deleteLogin()
    }

    render() {
        return <Header deleteLogin={this.deleteLogin} {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    userInfo: state.auth
})

export default connect(mapStateToProps, { getUserData, deleteLogin })(HeaderConteiner);