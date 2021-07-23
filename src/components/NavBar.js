import React from 'react'
import './NavBar.css'
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import kryptonomia_icon from './kryptonomia-icon.png'
import kryptonomia_banner from './kryptonomia-banner.png'
import LogoutForm from '../containers/logoutForm'

import {
    Link
} from 'react-router-dom'


export const NavBar = () => {
    // onLogoutSuccess = () => {
    //     console.log('Login Failed:')
    // }
    return (
        <div className="navBar__wrapper">
            {/* Logo */}
            <div className="navBar__logo">
                <Link to="/">
                    {/* <img src="https://assets.coingecko.com/coins/images/12817/small/filecoin.png?1602753933" width={40} alt="Flatcoin-logo"/> */}
                    {/* <img src={kryptonomia_icon} width={40} alt="Kryptonomia-logo"/> */}
                    <img src={kryptonomia_banner} width={300} alt="Kryptonomia"/>
                </Link>
            </div>
            {/* Menu */}
            <div className="navBar__menuItems">
                <Link to="/">
                    <a>Inicio</a>
                </Link>
                <Link to="/transacciones">
                    <a>Transacciones</a>
                </Link>
                {/* <GoogleLogout onClick= {logOut} */}
                {/* <GoogleLogout onClick= {logOut}
                    clientId="790536304277-cic9pp1kkefescslkbs60s035a38m0gb.apps.googleusercontent.com"
                    buttonText="Cerrar sesión"
                    onLogoutSuccess={ console.log('Login Failed:') }  
                /> */}
            </div>
            {/* Search */}
            <div className="navBar__search">
                <div className="navBar__searchContainer">
                    <input placeholder="Search" type="text" />
                </div>
            </div>
            <div className="navBar__search">
                <LogoutForm />
            </div>
        </div>
    )
}

export default NavBar