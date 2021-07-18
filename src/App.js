import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCryptos } from './actions/cryptoActions'
import { fetchLoggedInUser } from './actions/userActions'
import { logOutUser } from './actions/userActions'
import CryptoList from './components/CryptoList'
import NavBar from './components/NavBar'
import NotLoggedInNavBar from './components/NotLoggedInNavBar'
import Dashboard from './components/Dashboard'
import LoginForm from './containers/loginForm'
import SignUpForm from './containers/signUpForm'
// import LogoutForm from './containers/logoutForm'
import TradeCrypto from './components/TradeCrypto'
import TradeCryptoHistoryList from './components/TradeCryptoHistoryList'

// import logo from './logo.svg';
import './App.css';

import Loading from './svg/Loading'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

class App extends Component {

  fetchEverything = () => {
    this.props.fetchLoggedInUser()
    this.props.fetchCryptos()
  }

  componentDidMount() {
    this.fetchEverything()
  }

  handleCryptoListLoading = () => {
    if(this.props.crypto_loading) {
      return <Loading />
    } else {
      return <CryptoList cryptoData={this.props.cryptoData} />
    }
  }

  handleUserDashboardLoading = () => {
    // console.log(this.props.loading) // Will console.log true or false
    if(this.props.user_loading) {
      return <Loading />
    } else {
      return <Dashboard current_user={this.props.current_user} />
    }
  }

  handleCryptoProps = (props) => {
    if(this.props.crypto_loading) {
      return <Loading />
    } else {
      const foundCrypto = this.props.cryptoData.find(p=> p.id === props.match.params.coin_id)
      return <TradeCrypto crypto={foundCrypto} current_user={this.props.current_user}/>
    }
  }

  handleTradeCryptoHistoryListLoading = () => {
    if(this.props.user_loading) {
      return <Loading />
    } else {
      return <TradeCryptoHistoryList current_user={this.props.current_user} />
    }
  }

  render() {
  
    // console.log(this.props.cryptoData)
    // console.log(this.props.current_user)
    return (
      <>
        <div className="App">
          <Router>
            <div className="app__navBar">
              {/* Handling LOG IN! */}
              {this.props.login? <><div className="App">
                <div className="app__navBar">
                  <NavBar />
                </div>
                <Switch>
                  <Route exact path="/">   
                    <div className="app__body">
                      <div className="app__container">
                        {this.handleUserDashboardLoading()}
                        {this.handleCryptoListLoading()}
                      </div>
                    </div>
                  </Route>

                  <Route exact path="/transacciones">
                    {this.handleTradeCryptoHistoryListLoading()}
                  </Route>

                  <Route path="/coins/:coin_id" component={this.handleCryptoProps} />

                  <Route path="/" render={() => <div><h1>Oops! That page doesn't exist.</h1></div>} />
                </Switch>
              </div>
              </> 
              : <Switch>

              <Route exact path="/">
                <LoginForm />
              </Route>
             
              <Route path="/" render={() => <div><h1>Oops! That page doesn't exist.</h1></div>} 
              />

            </Switch> }
            </div>

              
          </Router>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    cryptoData: state.crypto.cryptos,
    crypto_loading: state.crypto.loading,
    login: state.user.login,
    current_user: state.user.user,
    user_loading: state.user.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCryptos: () => dispatch(fetchCryptos()),
    fetchLoggedInUser: () => dispatch(fetchLoggedInUser()),
    // logOutUser: () => dispatch(logOutUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
