import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
	return (
		<div>
			<div>
				<div>My posts</div>
				<textarea></textarea>
				<button className={s.button}>Add</button>
				<div className='{s.posts}'>
					<Post messages='Hi,it`s my first post!' />
					<Post messages='Today is the best day in my life' />
				</div>
			</div>
		</div>
	)
}

export default MyPosts
