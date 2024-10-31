import { connect } from "react-redux";
import Login from "./Login";
import {login,logout} from '../../redux/auth-reducer'

const mapStateToProps =(state) => ({
    isAuth:state.auth.isAuth,
    captchaUrl:state.auth.captchaUrl
})

export default connect(mapStateToProps,{login})(Login)