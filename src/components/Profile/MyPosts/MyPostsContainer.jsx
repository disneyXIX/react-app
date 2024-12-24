import React from 'react'
import {
	addPostActionCreator,
	updateNewPostTextActionCreator,
} from '../../../Redux/profile-reducer'
import MyPosts from './MyPosts'

const MyPostsContainer = props => {
	let state = props.store.getState()

	let AddPost = () => {
		let action = addPostActionCreator()
		props.store.dispatch(action)
	}

	let onPostChange = text => {
		let action = updateNewPostTextActionCreator(text)
		props.store.dispatch(action)
	}

	return (
		<MyPosts
			AddPost={AddPost}
			updateNewPostTextActionCreator={onPostChange}
			posts={state.profilePage.posts}
			newPostText={state.profilePage.newPostText}
		/>
	)
}

export default MyPostsContainer
