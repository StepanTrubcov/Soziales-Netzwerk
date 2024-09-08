import React from "react";
import { connect } from "react-redux";
import Nav from "./Navbar";
import {getpageSize,get_Users,getcurrentPage,gettotalUsersCount} from '../../redux/user-selectors'

const mapStateToProps = (state) => {
return{
  pageSize: getpageSize(state),
  users:get_Users(state),
    totalUsersCount: gettotalUsersCount(state),
    currentPage: getcurrentPage(state),
}
}
const NavbarConteiner = connect(mapStateToProps) (Nav)

export default NavbarConteiner;
