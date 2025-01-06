import React from 'react'
import preloader from '../../../assets/images/infinite-spinner.svg'

let Preloader = props => {
	return <img src={preloader} style={{ width: '300px', height: '150px' }} />
}

export default Preloader
