import React from 'react'
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
	return (
		<div className={s.profileContainer}>
			<div className={s.profileImageContainer}>
				<img
					src='https://i.etsystatic.com/48940082/r/il/bdca75/6010586256/il_fullxfull.6010586256_nmcr.jpg'
					alt='Sunset'
				/>
			</div>
			<div className={s.avatarDescription}>
				<h2>Photo + Name</h2>
				<p>About you</p>
			</div>
			<MyPosts />
		</div>
	)
}

export default Profile
