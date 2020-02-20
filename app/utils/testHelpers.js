import { Provider } from 'react-redux'
import React from 'react'
import { Router, BrowserRouter, browserHistory } from 'react-router-dom'
import configureStore from '../configureStore'

export const withStoreIntlAndRouter = component => {
    const store = configureStore({}, browserHistory)
    return (
        <Provider store={store}>
                    <BrowserRouter>{component}</BrowserRouter>
        </Provider>
    )
}