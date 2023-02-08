import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router/index'
import { Provider } from 'react-redux'
import store from './redux/store/config'
import './fireBase/config'

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(
    <div>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </div>,
)
