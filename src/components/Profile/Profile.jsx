import React from 'react'
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
	return (
		<div className={s.content}>
			<div>
				<img src='https://images.unsplash.com/photo-1551237135-a687125805b2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwc3Vuc2V0fGVufDB8fDB8fHww' />
			</div>
			<div>avatar+description</div>

			<MyPosts />
		</div>
	)
}

export default Profile
