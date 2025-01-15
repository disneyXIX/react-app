import React from 'react'
import s from './UsersPage.module.css'
import UserIcon from '../../assets/images/emoji.userlist.png'
import { NavLink } from 'react-router-dom'
import { usersAPI } from '../../api/api'

let UsersPage = props => {
	let pagersCount = Math.ceil(props.totalUserCount / props.pageSize)

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
							className={props.currentPage === p && s.selectedPage}
							onClick={e => {
								props.onPageChanged(p)
							}}
						>
							{p}
						</span>
					)
				})}
			</div>
			{props.users.map(u => (
				<div key={u.id}>
					<span>
						<div className={s.photo}>
							<NavLink to={'/profile/' + u.id}>
								<img src={u.photos.small != null ? u.photos.small : UserIcon} />
							</NavLink>
						</div>

						<div>
							{u.followed ? (
								<button
									disabled={props.followingInProgress.some(id => id === u.id)}
									onClick={() => {
										props.toogleIsFollowing(true, u.id)
										usersAPI.followDelete(u.id).then(data => {
											if (data.resultCode == 0) {
												props.unfollow(u.id)
											}
											props.toogleIsFollowing(false, u.id)
										})
									}}
								>
									Unfollow
								</button>
							) : (
								<button
									disabled={props.followingInProgress.some(id => id === u.id)}
									onClick={() => {
										props.toogleIsFollowing(true, u.id)
										usersAPI.followPost(u.id).then(data => {
											if (data.resultCode == 0) {
												props.follow(u.id)
											}
											props.toogleIsFollowing(false, u.id)
										})
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

export default UsersPage
