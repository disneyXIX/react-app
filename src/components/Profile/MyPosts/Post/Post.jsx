import React from 'react'
import s from './Post.module.css'

const Post = props => {
	return (
		<div className={s.item}>
			<img src='https://marketplace.canva.com/EAFltPVX5QA/1/0/1600w/canva-cute-cartoon-anime-girl-avatar-ZHBl2NicxII.jpg' />
			{props.messages}
			<div>
				<span>like</span> {props.likesCounter}
			</div>
		</div>
	)
}

export default Post
