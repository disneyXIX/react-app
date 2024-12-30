import React from 'react'
import UsersPage from './UsersPage'
import { connect } from 'react-redux'
import { followAC, setUsersAC, unfollowAC } from '../../Redux/usersPage-reducer'

let mapStateToProps = state => {
	return {
		users: state.usersPage.users,
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
	}
}

const UsersPageContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(UsersPage)

export default UsersPageContainer
