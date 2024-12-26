import './index.css'
import store from './Redux/redux-store'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from './storeContext'

const root = ReactDOM.createRoot(document.getElementById('root'))

export let rerenderEntireTree = state => {
	root.render(
		<React.StrictMode>
			<BrowserRouter>
				<Provider store={store}>
					<App />
				</Provider>
			</BrowserRouter>
		</React.StrictMode>
	)
}
reportWebVitals()

rerenderEntireTree(store.getState())
store.subscribe(() => {
	let state = store.getState()
	rerenderEntireTree(state)
})
