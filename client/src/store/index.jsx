import { configureStore } from '@reduxjs/toolkit'
import { basket } from './basket'

export default  configureStore({
    reducer: {
        basket: basket
    }
})