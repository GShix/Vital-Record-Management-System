import { createSlice } from '@reduxjs/toolkit';
import API from '../pages/http';

const deathSlice =createSlice({
    name:'deathApplication',
    initialState:{
        singleDeath:[]
    },
    reducers:{
        setSinlgeDeath(state,action){
            state.singleDeath = action.payload
        }
    }
})
export const {setSinlgeDeath} = deathSlice.actions;
export default deathSlice.reducer

export function fetchSingleDeath(userAppId){
    return async function fetchSingleDeathThunk(dispatch){
        try {
            const response = await API.get(`/deathApplication/${userAppId}`)
            // console.log(response)
            // if(response1.status==200){
                dispatch(setSinlgeDeath(response.data.deathApplication[0]));
            // }
        } catch (error) {
            console.log("Error",error)
        }
    }
}
