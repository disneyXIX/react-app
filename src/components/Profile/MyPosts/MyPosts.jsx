import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {
	addPostActionCreator,
	updateNewPostTextActionCreator,
} from '../../../Redux/profile-reducer'

const MyPosts = props => {
	let postData = props.posts.map(p => (
		<Post messages={p.message} likesCounter={p.likesCounter} />
	))

	let newPostElement = React.createRef()

	let AddPost = () => {
		let action = addPostActionCreator()
		props.dispatch(action)
	}

	let onPostChange = () => {
		let text = newPostElement.current.value
		let action = updateNewPostTextActionCreator(text)
		props.dispatch(action)
	}

	return (
		<div className={s.posts}>
			<div className={s.postsTitle}>My posts</div>
			<textarea
				onChange={onPostChange}
				ref={newPostElement}
				className={s.textarea}
				placeholder="What's on your mind?"
				value={props.newPostText}
			/>
			<button onClick={AddPost} className={s.button}>
				Add
			</button>
			<div className={s.postsList}>{postData}</div>
		</div>
	)
}

export default MyPosts
