import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore()

// addExpense -> water bill
store.dispatch(addExpense({ description: 'Water bill' }))
// addExpenses -> Gas bill
store.dispatch(addExpense({ description: 'Gas bill' }))
// setTextFilter -> bill (2 items) -> water (1 item)
store.dispatch(setTextFilter('water'))

setTimeout(() => {
    store.dispatch(setTextFilter('soda'))
}, 3000)

// getVisibleExpenses -> print visible ones to screen
const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)
console.log(store.getState())

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))