import React from 'react'
import TradeCryptoHistory from './TradeCryptoHistory'

import './CryptoList.css'

class TradeCryptoHistoryList extends React.Component {
    
    render() {
        const current_user = this.props.current_user
        // console.log("Current User")
        // console.log(current_user)
        // const current_portfolio = this.props.current_user.portfolios[0]
        const trades = current_user.trades.map(c => <TradeCryptoHistory trade={c}/>)
        // const trades = this.props.current_user.trades.map(c => <TradeCryptoHistory trade={c}/>)
        return (
            <div className="cryptoList">
                <div className="cryptoList__container">
                    <div className="crypto__header">
                        <h1>Historial de Transacciones</h1>
                    </div>
                    <div className="crypto__content">
                        <div className="crypto__rows">
                        {trades}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default TradeCryptoHistoryList
