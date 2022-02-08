import { createSlice , configureStore} from "@reduxjs/toolkit";


const userInfoSlice = createSlice({
    name : 'userInfo',
    initialState: [],
    reducers: {
        saveUserData(state, action){
           state =  [...JSON.parse(action.payload)];
        }
    }

})

const store = configureStore({
    reducer: {
        userInfoSlice: userInfoSlice.reducer
    }
})

export default store;
export const userInfoAction = userInfoSlice.actions;