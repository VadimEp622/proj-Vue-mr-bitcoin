import axios from 'axios'
import { utilService } from "./util.service"

const EXCHANGE_RATE_KEY = 'ExchangeRate'
const MARKET_PRICE_HISTORY_KEY = 'MarketPriceHistory'


async function getRate() {
    let rate = utilService.loadFromStorage(EXCHANGE_RATE_KEY)
    if (!rate || rate.length < 1) {
        console.log('Axios get - Exchange Rate')
        try {
            const res = await axios.get(_getUrlCurrencyRate())
            // console.log('res', res)
            utilService.saveToStorage(EXCHANGE_RATE_KEY, res.data)
            return res.data
        } catch (err) {
            console.error('Failed to get exchange rate', err)
            throw err
        }
    }
    console.log('Local Storage - Exchange Rate')
    return rate
}

async function getMarketPriceHistory() {
    let priceHistory = utilService.loadFromStorage(MARKET_PRICE_HISTORY_KEY)
    if (!priceHistory || priceHistory.length < 1) {
        console.log('Axios get - Market Price History')
        try {
            const res = await axios.get(_getUrlMarketPriceHistory())
            // console.log('res', res)
            utilService.saveToStorage(MARKET_PRICE_HISTORY_KEY, res.data)
            return res.data
        } catch (err) {
            console.error('Failed to get market price history', err)
            throw err
        }
    }
    console.log('Local Storage - Market Price History')
    return priceHistory
}


export const bitcoinService = {
    getRate,
    getMarketPriceHistory,
    // getAvgBlockSize,
}


// *************************************************************************************
// ********************************* Private Functions *********************************
// *************************************************************************************
function _getUrlCurrencyRate(currencyType = 'USD') {
    return `https://blockchain.info/tobtc?currency=${currencyType}&value=1`
}

function _getUrlMarketPriceHistory() {
    return `https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`
}