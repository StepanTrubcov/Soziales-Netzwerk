import React from "react";
import { connect } from "react-redux";
import { UnFollowAC, followAC, setUsers, setCorrentPage, setTotalCount } from "../../redux/users_reducer";
import axios from "axios";
import Users from "./Users/Users";

class FindUsersAPI extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.correntPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    onPageChanged = (e) => {
        this.props.setCorrentPage(e);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${e}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        const pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize)

        const pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>
            <Users
                correntPage={this.props.correntPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                pages={pages}
                UnFollowAC={this.props.UnFollowAC}
                followAC={this.props.followAC}
            />
        </div>
    }
}

const mapStateToProps = (state) => ({
    users: state.users.users,
    totalCount:state.users.totalCount,
    pageSize:state.users.pageSize,
    correntPage:state.users.correntPage
})

export default connect(mapStateToProps, {setTotalCount, setCorrentPage, UnFollowAC, followAC, setUsers })(FindUsersAPI)