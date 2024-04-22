import { configureStore } from "@reduxjs/toolkit";
import dashboardSlice from './dashboardSlice'
import deathSlice from "./deathSlice";
import birthSlice from "./birthSlice";

const store = configureStore({
    reducer:{
        dashboard:dashboardSlice,
        deathApplication: deathSlice,
        birthApplication:birthSlice
    }
})

export default store;