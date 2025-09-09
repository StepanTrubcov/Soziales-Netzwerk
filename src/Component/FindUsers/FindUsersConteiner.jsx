import React from "react";
import { connect } from "react-redux";
import { getUnFollowed, getFollowed, getUsersCreator, UnFollowAC, followAC } from "../../redux/users_reducer";
import Users from "./Users/Users";
import Prelouder from "../common/prelouder";
import { compose } from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { correntPage, followingInProgress, IsFetching, pageSize, totalCount, users } from "../../redux/users_reselect";

class FindUsersAPI extends React.Component {

    componentDidMount() {
        this.props.getUsersCreator(this.props.correntPage, this.props.pageSize)
    }

    onPageChanged = (e) => {
        this.props.getUsersCreator(e, this.props.pageSize, e)
    }

    render() {
        const pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize)

        const pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>
            {this.props.IsFetching ? <Prelouder /> : ''}
            <Users
                totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                followAC={this.props.followAC}
                UnFollowAC={this.props.UnFollowAC}
                correntPage={this.props.correntPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                followingInProgress={this.props.followingInProgress}
                getFollowed={this.props.getFollowed}
                getUnFollowed={this.props.getUnFollowed}
            />
        </div>
    }
}

const mapStateToProps = (state) => ({
    users: users(state),
    totalCount: totalCount(state),
    pageSize: pageSize(state),
    correntPage: correntPage(state),
    IsFetching: IsFetching(state),
    followingInProgress: followingInProgress(state),
})

export default compose(
    connect(mapStateToProps, { getUnFollowed, getFollowed, getUsersCreator, UnFollowAC, followAC }),
    withAuthRedirect
)(FindUsersAPI)