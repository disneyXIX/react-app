import React from 'react'
import UsersPage from './UsersPage'
import { connect } from 'react-redux'
import {
	followAC,
	setUsersAC,
	unfollowAC,
	setCurrentPageAC,
	setTotalUserCountAC,
} from '../../Redux/usersPage-reducer'

let mapStateToProps = state => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUserCount: state.usersPage.totalUserCount,
		currentPage: state.usersPage.currentPage,
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
	}
}

const UsersPageContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(UsersPage)

export default UsersPageContainer
