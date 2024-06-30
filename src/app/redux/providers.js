"use client"

import { store } from "./slice";

const { Provider } = require("react-redux");

export function Providers({children}){
    return <Provider store={store}>
  {children}
    </Provider>
}