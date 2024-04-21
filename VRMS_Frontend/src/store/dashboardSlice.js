import { createSlice } from '@reduxjs/toolkit';
import API from '../pages/http';

const dashboardSlice =createSlice({
    name:'dashboard',
    initialState:{
        death:[],
        birth:[]
    },
    reducers:{
        setDeath(state,action){
            state.death = action.payload
        },
        setBirth(state,action){
            state.birth = action.payload
        }
    }
})
export const {setDeath,setBirth} = dashboardSlice.actions;
export default dashboardSlice.reducer

export function fetchTotalApplication(){
    return async function fetchTotalApplicationThunk(dispatch){
        try {
            const response1 = await API.get("/admin/death");
            if(response1.status==200){
                dispatch(setDeath(response1.data.data));
            }
            const response2 = await API.get("/admin/birth");
            if(response2.status==200){
                dispatch(setBirth(response2.data.data));
            }
        } catch (error) {
            console.log("Error",error)
        }
    }
}