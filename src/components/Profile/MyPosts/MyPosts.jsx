import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
	return (
		<div className={s.posts}>
			<div className={s.postsTitle}>My posts</div>
			<textarea
				className={s.textarea}
				placeholder="What's on your mind?"
			></textarea>
			<button className={s.button}>Add</button>
			<div className={s.postsList}>
				<Post messages="Hi, it's my first post!" likesCounter='22' />
				<Post messages='Today is the best day in my life' likesCounter='15' />
			</div>
		</div>
	)
}

export default MyPosts
