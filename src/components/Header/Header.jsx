import React from 'react'
import s from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = props => {
	return (
		<header className={s.header}>
			<img src='https://t4.ftcdn.net/jpg/04/96/47/13/360_F_496471319_DbtjoUvKqyy2e9OfgBnK5mm2AXhKpa9m.jpg' />
			<div className={s.loginBlock}>
				{props.isAuth ? (
					<a>{props.login}</a>
				) : (
					<NavLink to={'/signIn'}>
						Sign in<NavLink to={'/signUp'}>or Sign up</NavLink>
					</NavLink>
				)}
			</div>
		</header>
	)
}

export default Header
