import axios from 'axios'
import { utilService } from "./util.service"

const EXCHANGE_RATE_KEY = 'ExchangeRate'
const MARKET_PRICE_HISTORY_KEY = 'MarketPriceHistory'

async function getRate() {
    let rate = utilService.loadFromStorage(EXCHANGE_RATE_KEY)
    if (!rate || rate.length < 1) {
        // console.log('Axios get')
        try {
            const res = await axios.get('https://blockchain.info/tobtc?currency=USD&value=1')
            // console.log('res', res)
            utilService.saveToStorage(EXCHANGE_RATE_KEY, res.data)
            return res.data
        } catch (err) {
            console.error('Failed to get exchange rate', err)
            throw err
        }
    }
    // console.log('Local Storage')
    return rate
}

async function getMarketPriceHistory() {
    let priceHistory = utilService.loadFromStorage(MARKET_PRICE_HISTORY_KEY)
    if (!priceHistory || priceHistory.length < 1) {
        console.log('Axios get')
        try {
            const res = await axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
            // console.log('res', res)
            utilService.saveToStorage(MARKET_PRICE_HISTORY_KEY, res.data)
            return res.data
        } catch (err) {
            console.error('Failed to get market price history', err)
            throw err
        }
    }
    console.log('Local Storage')
    return priceHistory
}


export const bitcoinService = {
    getRate,
    getMarketPriceHistory,
    // getAvgBlockSize,
}