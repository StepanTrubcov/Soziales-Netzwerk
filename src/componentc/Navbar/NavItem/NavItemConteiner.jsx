import React from "react";
import FriendsItem from './NavItem'
import setUsers from '../../../redux/Friends-reducer'
import axios from 'axios'
import {connect} from 'react-redux'

class NavItemConteiner extends React.Component{
    componentDidMount() {
      console.log(this.props.FriendsPage)
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

export default connect(mapStateToProps,{setUsers,})(NavItemConteiner)