import React from "react";
import { connect } from "react-redux";
import Subscriptions from "./Subscriptions";

const mapStateToProps = (state) => ({
    users: state.users
})

export default connect(mapStateToProps)(Subscriptions)