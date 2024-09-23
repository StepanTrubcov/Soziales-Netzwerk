import React from "react";
import Header from './Header'
import {connect} from 'react-redux'
import {setUserData,getLogin} from '../../redux/auth-reducer'
import {logout} from '../../redux/auth-reducer'

class HeaderConteiner extends React.Component {

    render(){

        return(
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return{
        isAuth:state.auth.isAuth,
        login:state.auth.login,
    }
}


export default connect(mapStateToProps,{setUserData,getLogin,logout})(HeaderConteiner)