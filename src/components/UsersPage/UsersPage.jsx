import React from 'react'
import s from './UsersPage.module.css'
import axios from 'axios'
import UserIcon from '../../assets/images/emoji.userlist.png'

class UsersPage extends React.Component {
	componentDidMount() {
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&сount=${this.props.pageSize}`
			)
			.then(response => {
				this.props.setUsers(response.data.items)
				this.props.setTotalUserCount(response.data.totalCount)
			})
	}

	onPageChanged = pageNumber => {
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&сount=${this.props.pageSize}`
			)
			.then(response => {
				this.props.setUsers(response.data.items)
			})
		this.props.setCurrentPage(pageNumber)
	}

	render() {
		let pagersCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)

		let pages = []

		for (let i = 1; i <= pagersCount; i++) {
			pages.push(i)
		}

		return (
			<div>
				<div>
					{pages.map(p => {
						return (
							<span
								className={this.props.currentPage === p && s.selectedPage}
								onClick={e => {
									this.onPageChanged(p)
								}}
							>
								{p}
							</span>
						)
					})}
				</div>
				{this.props.users.map(u => (
					<div key={u.id}>
						<span>
							<div className={s.photo}>
								<img src={u.photos.small != null ? u.photos.small : UserIcon} />
							</div>

							<div>
								{u.followed ? (
									<button
										onClick={() => {
											this.props.unfollow(u.id)
										}}
									>
										Unfollow
									</button>
								) : (
									<button
										onClick={() => {
											this.props.follow(u.id)
										}}
									>
										Follow
									</button>
								)}
							</div>
						</span>

						<span>
							<span>
								<div> {u.name}</div>
								<div> {u.status} </div>
							</span>

							<span>
								<div> {'u.location.country'}</div>
								<div> {'u.location.city'}</div>
							</span>
						</span>
					</div>
				))}
			</div>
		)
	}
}

export default UsersPage
