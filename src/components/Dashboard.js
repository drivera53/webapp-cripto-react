import React from 'react'
import './Dashboard.css'
import LineGraph from './LineGraph'
import TradeCryptoHolding from './TradeCryptoHolding'

class Dashboard extends React.Component {
    render() {

// function Dashboard() {
        const current_user = this.props.current_user
        const portfolioData = this.props.current_user.portfolios[0]
        const cryptosHoldings = current_user.coins.map(c => <TradeCryptoHolding coins={c}/>)
        // const current_portfolio = current_user.portfolios[0]

        return (
            <div className="dashboard">
                <div className="dashboard__container">
                    <div className="dashboard__chartSection">
                        <div className="dashboard__portfolio">
                            <h1>Bienvenido! {current_user.givenName}</h1> 
                            <h1>Valor total: ${Number(portfolioData.total_value).toFixed(2)}</h1>
                            <p>Retorno total: ${Number(portfolioData.total_return).toFixed(2)} ({Number(portfolioData.total_return_percentage).toFixed(2)}%)</p>

                            <p>Balance Inicial: ${Number(portfolioData.initial_balance).toFixed(2)}</p>
                        </div>
                        <div className="dashboard__chart">
                            <LineGraph />
                        </div>
                    </div>
                    <div className="dashboard__buying__section">
                        <h2>Poder de compra</h2>
                        <h2>${Number(portfolioData.buying_power).toFixed(2)}</h2>
                    </div>
                    <div className="dashboard__market__section">
                        <div className="dashboard__market__box">
                            <p>El mercado esta abierto 24/7</p>
                            <h1>Mis Criptomonedas!</h1>
                        </div>
                    </div>
                    <div className="dashboard__market__section">
                        <div className="cryptoList__container">
                            {cryptosHoldings}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard