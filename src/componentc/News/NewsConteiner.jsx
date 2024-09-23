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
import { getpageSize, getisFentching, get_Users, getcurrentPage, getfollowingInProgress } from '../../redux/user-selectors'

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

let mapStateToProps = (state) => ({
  users: get_Users(state),
  isFentching: getisFentching(state),
  pageSize: getpageSize(state),
  totalUsersCount: getcurrentPage(state),
  currentPage: getcurrentPage(state),
  followingInProgress: getfollowingInProgress(state),
})

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
