import React from "react";
import { connect } from "react-redux";
import Nav from "./Navbar";
import {setUsers} from '../../redux/Users-reducer'

const mapStateToProps = (state) => {
return{
  pageSize: state.usersPage.pageSize,
  users:state.usersPage.users,
  pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
}
}
const NavbarConteiner = connect(mapStateToProps) (Nav)

export default NavbarConteiner;
