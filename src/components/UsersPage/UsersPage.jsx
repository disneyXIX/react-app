import React from 'react'
import s from './UsersPage.module.css'
import UserIcon from '../../assets/images/emoji.userlist.png'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

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
									onClick={() => {
										axios
											.delete(
												`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
												{
													withCredentials: true,
													headers: {
														'API-KEY': '32856676-f0b8-4aaa-b1b7-219ffa6324c4',
													},
												}
											)
											.then(response => {
												if (response.data.resultCode == 0) {
													props.unfollow(u.id)
												}
											})
									}}
								>
									Unfollow
								</button>
							) : (
								<button
									onClick={() => {
										axios
											.post(
												`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
												{},
												{
													withCredentials: true,
													headers: {
														'API-KEY': '32856676-f0b8-4aaa-b1b7-219ffa6324c4',
													},
												}
											)
											.then(response => {
												if (response.data.resultCode == 0) {
													props.follow(u.id)
												}
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
