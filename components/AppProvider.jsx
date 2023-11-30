"use client";
import { Provider } from "react-redux";
import store from "../app/redux/store.js"
import { SessionProvider } from "next-auth/react";

const AppProvider = ({ children, session }) => (
  <Provider store={store}>
    <SessionProvider session={session}>{children}</SessionProvider>
  </Provider>
);

export default AppProvider;
