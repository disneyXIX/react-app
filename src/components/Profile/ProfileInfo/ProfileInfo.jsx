import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
	return (
		<div>
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
		</div>
	)
}

export default ProfileInfo
