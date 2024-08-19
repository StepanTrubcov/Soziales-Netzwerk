import React from "react";
import { connect } from "react-redux";
import {
  followSuccess,
  unfollowSuccess,
  setCurrentPage,
  toggleFollowingInProgress,
  getUsers,
  follow,
  unfollow,
} from "../../redux/Users-reducer";
import Users from "./Users";
import Spinner from "../common/Preloader/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFentching ? <Spinner /> : null}
        <Users {...this.props} onPageChanged={this.onPageChanged} />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    isFentching: state.usersPage.isFentching,
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default compose(
  connect(mapStateToProps, {
    followSuccess,
    unfollowSuccess,
    setCurrentPage,
    toggleFollowingInProgress,
    getUsers,
    follow,
    unfollow,
  }),
  withAuthRedirect
)(UsersAPIComponent);
