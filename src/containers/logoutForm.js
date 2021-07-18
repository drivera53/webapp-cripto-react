import React from 'react' 
import { connect } from 'react-redux'
import { GoogleLogout } from 'react-google-login'
import { logOutUser } from '../actions/userActions'


class LogoutForm extends React.Component{

    onSignOutSuccess = () => {
        localStorage.removeItem("token")
        this.props.logOutUser()
        alert("Tu sesión ha sido cerrada con éxito!")
    }

    render() {
        return (
            <div className="g-signin">
                <GoogleLogout
                    clientId="790536304277-cic9pp1kkefescslkbs60s035a38m0gb.apps.googleusercontent.com"
                    buttonText="Cerrar sesión"
                    onLogoutSuccess={this.onSignOutSuccess}
                /> 
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logOutUser: () => dispatch(logOutUser())
    }
}

export default connect(null, mapDispatchToProps)(LogoutForm)