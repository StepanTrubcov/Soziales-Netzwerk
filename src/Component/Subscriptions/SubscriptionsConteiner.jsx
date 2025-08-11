import React from "react";
import { connect } from "react-redux";
import Subscriptions from "./Subscriptions";
import { getUserData } from "../../redux/subscriptions_reducer";

class SubscriptionsConteiner extends React.Component {

    componentDidMount() {
        this.props.getUserData(this.props.correntPage, this.props.pageSize)
    }

    render() {
        return <Subscriptions users={this.props.users} />
    }
}

const mapStateToProps = (state) => ({
    users: state.subscriptions.users,
    pageSize: state.users.pageSize,
    correntPage: state.users.correntPage,
})

export default connect(mapStateToProps, { getUserData })(SubscriptionsConteiner)