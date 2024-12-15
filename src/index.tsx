import {createRoot} from "react-dom/client";
import {App} from "./App";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/store";


const root = document.getElementById('root')

if(!root) {
    throw new Error('No root element found!')
}

const container = createRoot(root)

container.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
)

// const rootElm = document.getElementById('root')
// if (rootElm) {
//     const root = ReactDOM.createRoot(rootElm);
//     root.render(
//         <BrowserRouter>
//             <Provider store={store}>
//                 <App />
//             </Provider>
//         </BrowserRouter>
//     );
// }