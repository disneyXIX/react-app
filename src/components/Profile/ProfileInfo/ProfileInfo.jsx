import React from 'react'
import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'

const ProfileInfo = props => {
	if (!props.profile) {
		return <Preloader />
	}

	return (
		<div className={s.profileInfo}>
			<div className={s.profileImageContainer}>
				<img
					src='https://i.etsystatic.com/48940082/r/il/bdca75/6010586256/il_fullxfull.6010586256_nmcr.jpg'
					alt='Sunset'
				/>
			</div>
			<div className={s.avatarDescription}>
				<div className={s.avatarPhoto}>
					<img src={props.profile.photos.small} />
				</div>
				<h2>{props.profile.fullName}</h2>
				<p>{props.profile.aboutMe}</p>
			</div>
		</div>
	)
}

export default ProfileInfo
