import React from "react";
import { connect } from "react-redux";
import Login from "./Login";

const mapStateToProps =(state) => ({
    isAuth:state.auth.isAuth,
})

export default connect(mapStateToProps)(Login)