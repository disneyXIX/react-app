import React from 'react'
import { connect } from 'react-redux'
import {
	followAC,
	setUsersAC,
	unfollowAC,
	setCurrentPageAC,
	setTotalUserCountAC,
	toogleIsFetchingAC,
} from '../../Redux/usersPage-reducer'
import UsersPage from './UsersPage'
import axios from 'axios'
import Preloader from '../common/Preloader/Preloader'

class UsersPageContainer extends React.Component {
	componentDidMount() {
		this.props.toogleIsFetching(true)
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&сount=${this.props.pageSize}`
			)
			.then(response => {
				this.props.toogleIsFetching(false)
				this.props.setUsers(response.data.items)
				this.props.setTotalUserCount(response.data.totalCount)
			})
	}

	onPageChanged = pageNumber => {
		this.props.toogleIsFetching(true)
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&сount=${this.props.pageSize}`
			)
			.then(response => {
				this.props.toogleIsFetching(false)
				this.props.setUsers(response.data.items)
			})
		this.props.setCurrentPage(pageNumber)
	}

	render() {
		return (
			<>
				{this.props.isFetching ? <Preloader /> : null}
				<UsersPage
					totalUserCount={this.props.totalUserCount}
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					onPageChanged={this.onPageChanged}
					users={this.props.users}
					follow={this.props.follow}
					unfollow={this.props.unfollow}
				/>
			</>
		)
	}
}

let mapStateToProps = state => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUserCount: state.usersPage.totalUserCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
	}
}

let mapDispatchToProps = dispatch => {
	return {
		follow: userId => {
			dispatch(followAC(userId))
		},
		unfollow: userId => {
			dispatch(unfollowAC(userId))
		},
		setUsers: users => {
			dispatch(setUsersAC(users))
		},
		setCurrentPage: pageNumber => {
			dispatch(setCurrentPageAC(pageNumber))
		},
		setTotalUserCount: totalCount => {
			dispatch(setTotalUserCountAC(totalCount))
		},
		toogleIsFetching: isFetching => {
			dispatch(toogleIsFetchingAC(isFetching))
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPageContainer)
