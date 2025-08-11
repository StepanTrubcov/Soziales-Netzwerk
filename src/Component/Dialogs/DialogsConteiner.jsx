import React from "react";
import Dialog from "./Dialogs";
import { connect } from "react-redux";
import { addNewMessage, setBand, getUsers, getBand } from "../../redux/Dialogs_reducer";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { bang } from "../../redux/Dialogs_reselect";
import { correntPage, pageSize } from "../../redux/users_reselect";

class DialogsConteiner extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.correntPage, this.props.pageSize)
    }

    onPageChanged = (e) => {
        this.props.getBand(e)
    }

    render() {
        return <Dialog bang={this.props.bang} onPageChanged={this.onPageChanged} dialogs={this.props.dialogs} addNewMessage={this.props.addNewMessage} profile={this.props.profile} message={this.props.message} />
    }
}

const mapStateToProps = (state) => ({
    bang: bang(state),
    profile: state.profile,
    message: state.message.message,
    dialogs: state.message.dialogs,
    pageSize: pageSize(state),
    correntPage: correntPage(state),
})

export default compose(
    connect(mapStateToProps, { getBand, getUsers, setBand, addNewMessage }),
    withAuthRedirect
)(DialogsConteiner)