import React from 'react';
import App from './App';
import store from './redux/store';
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';
import 'scss/main.scss'
import { ToastContainer, Slide, Flip } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Provider store ={store}>
        <App />
        <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Slide}
        />
    </Provider>
)

