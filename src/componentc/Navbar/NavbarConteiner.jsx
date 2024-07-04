import React from "react";
import { connect } from "react-redux";
import Nav from "./Navbar";

const mapStateToProps = (state) => {
return{
  FriendsData:state.FriendsPage.FriendsData
}
}

const NavbarConteiner = connect(mapStateToProps) (Nav)

export default NavbarConteiner;
