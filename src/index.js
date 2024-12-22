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
					dispatch={store.dispatch.bind(store)}
					store={store}
				/>
			</BrowserRouter>
		</React.StrictMode>
	)
}
reportWebVitals()

rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)
