import React from 'react'
import {
	addPostActionCreator,
	updateNewPostTextActionCreator,
} from '../../../Redux/profile-reducer'
import MyPosts from './MyPosts'
import storeContext from '../../../storeContext'

const MyPostsContainer = props => {
	return (
		<storeContext.Consumer>
			{store => {
				let AddPost = () => {
					let action = addPostActionCreator()
					store.dispatch(action)
				}

				let onPostChange = text => {
					let action = updateNewPostTextActionCreator(text)
					store.dispatch(action)
				}

				return (
					<MyPosts
						AddPost={AddPost}
						updateNewPostTextActionCreator={onPostChange}
						posts={store.getState().profilePage.posts}
						newPostText={store.getState().profilePage.newPostText}
					/>
				)
			}}
		</storeContext.Consumer>
	)
}

export default MyPostsContainer
