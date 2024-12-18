import './index.css'
import store from './Redux/State'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))

export let rerenderEntireTree = state => {
	root.render(
		<React.StrictMode>
			<BrowserRouter>
				<App
					state={state}
					addPost={store.addPost.bind(store)}
					updateNewPostText={store.updateNewPostText.bind(store)}
				/>
			</BrowserRouter>
		</React.StrictMode>
	)
}
reportWebVitals()

rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)
