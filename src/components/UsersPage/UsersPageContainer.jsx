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
} from '../../Redux/usersPage-reducer'
import UsersPage from './UsersPage'
import Preloader from '../common/Preloader/Preloader'
import { usersAPI } from '../../api/api'

class UsersPageContainer extends React.Component {
	componentDidMount() {
		this.props.toogleIsFetching(true)
		usersAPI
			.getUsers(this.props.currentPage, this.props.pageSize)
			.then(data => {
				this.props.toogleIsFetching(false)
				this.props.setUsers(data.items)
				this.props.setTotalUserCount(data.totalCount)
			})
	}

	onPageChanged = pageNumber => {
		this.props.toogleIsFetching(true)
		usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
			this.props.toogleIsFetching(false)
			this.props.setUsers(data.items)
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
					toogleIsFollowing={this.props.toogleIsFollowing}
					followingInProgress={this.props.followingInProgress}
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
})(UsersPageContainer)
