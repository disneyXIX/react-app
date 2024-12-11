import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
	let posts = [
		{ id: 1, message: "Hi, it's my first post!", likesCounter: 22 },
		{ id: 2, message: 'Today is the best day in my life', likesCounter: 15 },
	]

	let postData = posts.map(p => (
		<Post messages={p.message} likesCounter={p.likesCounter} />
	))

	return (
		<div className={s.posts}>
			<div className={s.postsTitle}>My posts</div>
			<textarea
				className={s.textarea}
				placeholder="What's on your mind?"
			></textarea>
			<button className={s.button}>Add</button>
			<div className={s.postsList}>{postData}</div>
		</div>
	)
}

export default MyPosts
