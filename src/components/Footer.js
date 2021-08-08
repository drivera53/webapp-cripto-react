import React from 'react'
import './Footer.css'
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import kryptonomia_icon from './kryptonomia-icon.png'
import kryptonomia_banner from './kryptonomia-banner.png'
import LogoutForm from '../containers/logoutForm'

import {
    Link
} from 'react-router-dom'


export const Footer = () => {
    // onLogoutSuccess = () => {
    //     console.log('Login Failed:')
    // }
    return (
        <div className="navBar__wrapper">
            {/* Menu */}
            <div className="navBar__menuItems">
                <Link to="/">
                    <a>INICIO</a>
                </Link>
                <Link to="/transacciones">
                    <a>TRANSACCIONES</a>
                </Link>
                {/* <GoogleLogout onClick= {logOut} */}
                {/* <GoogleLogout onClick= {logOut}
                    clientId="790536304277-cic9pp1kkefescslkbs60s035a38m0gb.apps.googleusercontent.com"
                    buttonText="Cerrar sesión"
                    onLogoutSuccess={ console.log('Login Failed:') }  
                /> */}
            </div>
        </div>
    )
}

export default Footer