import React from 'react'
import s from './UsersPage.module.css'

const UsersPage = props => {
	if (props.users.length === 0) {
		props.setUsers([
			{
				id: 1,
				avatarPhotoUrl:
					'https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=',
				followed: true,
				fullName: 'Yarmolovskyi Andriy',
				status: 'working...',
				location: { city: 'Lviv', country: 'Ukraine' },
			},
			{
				id: 2,
				avatarPhotoUrl:
					'https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=',
				followed: false,
				fullName: 'Gavenko Svyatoslav',
				status: 'preparing for exams',
				location: { city: 'Lviv', country: 'Ukraine' },
			},
			{
				id: 3,
				avatarPhotoUrl:
					'https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=',
				followed: true,
				fullName: 'Babenko Valeria',
				status: 'designer.',
				location: { city: 'Lviv', country: 'Ukraine' },
			},
		])
	}

	return (
		<div>
			{props.users.map(u => (
				<div key={u.id}>
					<span>
						<div className={s.photo}>
							<img src={u.avatarPhotoUrl} />
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
							<div> {u.fullName}</div>
							<div> {u.status} </div>
						</span>

						<span>
							<div> {u.location.country}</div>
							<div> {u.location.city}</div>
						</span>
					</span>
				</div>
			))}
		</div>
	)
}

export default UsersPage
