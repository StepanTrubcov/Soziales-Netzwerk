import React from "react";
import FriendsItem from './NavItem'
import setUsers from '../../../redux/Friends-reducer'
import axios from 'axios'
import {connect} from 'react-redux'

class NavItemConteiner extends React.Component{
    componentDidMount() {
        axios
          .get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{
              withCredentials:true,
            }
          )
          .then((response) => {
            // console.log(response.data.items)
            this.props.setUsers(response.data.items);
          });
      }
    render(){
        return<FriendsItem {...this.props} />
    }
}

const mapStateToProps = (state) =>({
    FriendsPage:state.FriendsPage.FriendsData,
    currentPage:state.FriendsPage.currentPage,
    pageSize:state.FriendsPage.pageSize,
})

export default connect(mapStateToProps,{setUsers})(NavItemConteiner)