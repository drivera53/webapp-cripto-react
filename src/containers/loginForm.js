import React from 'react' 
import { connect } from 'react-redux'
import { loginUserFetch } from '../actions/userActions'
import { GoogleLogin } from 'react-google-login'

const initialState = {
    email: '',
    familyName: '',
    givenName: '',
    googleId: '',
    imageUrl: '',
    name: '',
    password: ''
}

class LoginForm extends React.Component{
    state = initialState

    // handleChange = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }

    // handleCryptoListLoading = () => {
    //     if(this.props.loading) {
    //       return <Loading />
    //     } else {
    //       return <CryptoList cryptoData={this.props.cryptoData} />
    //     }
    // }
    onLoginSuccess = (res) => {
        // console.log('Login Success:', res.profileObj)
        // console.log(res.profileObj.name)
        this.setState({
            email: res.profileObj.email,
            familyName: res.profileObj.familyName,
            givenName: res.profileObj.givenName,
            googleId: res.profileObj.googleId,
            imageUrl: res.profileObj.imageUrl,
            name: res.profileObj.name,
            password: res.profileObj.googleId + res.profileObj.googleId
        })
        // console.log(this.state)
        this.props.loginUserFetch(this.state)
    }

    onLoginFailure = (res) => {
        console.log('Login Failed:', res)
    }

    render() {
        return (
            // <form onSubmit={this.handleSubmit}>
            //     <h1>Login Form</h1>
            //     <label>Email</label>
            //     <input
            //         name="email"
            //         placeholder="Email"
            //         value={this.state.email}
            //         onChange={this.handleChange}
            //     />
            //     <label>Password</label>
            //     <input 
            //         type='password'
            //         name='password'
            //         placeholder='Password'
            //         value={this.state.password}
            //         onChange={this.handleChange}
            //     />
            //     {this.state.passwordError ? <div className="error">{this.state.passwordError}</div>: null}
            //     <input type='submit'/>
            // </form>
            <div className="g-signin">
                <h1>Trader</h1>
                <GoogleLogin
                    clientId="790536304277-cic9pp1kkefescslkbs60s035a38m0gb.apps.googleusercontent.com"
                    buttonText="Iniciar sesión"
                    onSuccess={this.onLoginSuccess}
                    onFailure={this.onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> 
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginUserFetch: (userInfo) => dispatch(loginUserFetch(userInfo))
    }
}

export default connect(null, mapDispatchToProps)(LoginForm)