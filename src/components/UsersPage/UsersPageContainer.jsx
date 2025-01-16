import React from 'react'
import { connect } from 'react-redux'
import {
	follow,
	setUsers,
	unfollow,
	setCurrentPage,
	setTotalUserCount,
	toogleIsFetching,
	toogleIsFollowing,
	getUsersThunkCreator,
	unfollowThunkCreator,
	followThunkCreator,
} from '../../Redux/usersPage-reducer'
import UsersPage from './UsersPage'
import Preloader from '../common/Preloader/Preloader'

class UsersPageContainer extends React.Component {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize)
	}

	onPageChanged = pageNumber => {
		this.props.getUsers(pageNumber, this.props.pageSize)
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
					toogleIsFollowing={this.props.toogleIsFollowing}
					followingInProgress={this.props.followingInProgress}
					unfollowThunkCreator={this.props.unfollowThunkCreator}
					followThunkCreator={this.props.followThunkCreator}
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
		followingInProgress: state.usersPage.followingInProgress,
	}
}

export default connect(mapStateToProps, {
	follow,
	unfollow,
	setUsers,
	setCurrentPage,
	setTotalUserCount,
	toogleIsFetching,
	toogleIsFollowing,
	getUsers: getUsersThunkCreator,
	unfollowThunkCreator,
	followThunkCreator,
})(UsersPageContainer)
