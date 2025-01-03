import React from 'react'
import s from './UsersPage.module.css'
import axios from 'axios'
import UserIcon from '../../assets/images/emoji.userlist.png'

const UsersPage = props => {
	let getUsersList = () => {
		if (props.users.length === 0) {
			axios
				.get('https://social-network.samuraijs.com/api/1.0/users')
				.then(response => {
					props.setUsers(response.data.items)
				})
		}
	}

	return (
		<div>
			<button onClick={getUsersList}>Load user list</button>
			{props.users.map(u => (
				<div key={u.id}>
					<span>
						<div className={s.photo}>
							<img src={u.photos.small != null ? u.photos.small : UserIcon} />
						</div>

						<div>
							{u.followed ? (
								<button
									onClick={() => {
										props.unfollow(u.id)
									}}
								>
									Unfollow
								</button>
							) : (
								<button
									onClick={() => {
										props.follow(u.id)
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
