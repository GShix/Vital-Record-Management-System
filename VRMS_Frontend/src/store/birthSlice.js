import { createSlice } from '@reduxjs/toolkit';
import API from '../pages/http';

const birthSlice =createSlice({
    name:'birthApplication',
    initialState:{
        singleBirth:[]
    },
    reducers:{
        setSingleBirth(state,action){
            state.singleBirth = action.payload
        }
    }
})
export const {setSingleBirth} = birthSlice.actions;
export default birthSlice.reducer

export function fetchSingleBirth(userAppId){
    return async function fetchSingleBirthThunk(dispatch){
        try {
            const response = await API.get(`/user/status/birthApplication/${userAppId}`)
            // console.log(response)
            // if(response1.status==200){
                dispatch(setSingleBirth(response.data.birthApplication[0]));
            // }
        } catch (error) {
            console.log("Error",error);
        }
    }
}