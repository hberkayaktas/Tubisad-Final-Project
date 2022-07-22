import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
let config = {
      headers: {
        token: localStorage.getItem("access-token"),
      }
}

export const postRegisterAsync = createAsyncThunk('textG/postRegisterAsync', async (takenParams) => {
      try{
            const { data } = await axios.post(`http://localhost:5000/register`, takenParams );
            return data;
      }catch(e){
            //console.log(e)
            return e.response.data;
      }
      
})
export const postLoginAsync =  createAsyncThunk('textG/postLoginAsync',async (takenParams) => {
      //console.log(takenParams);
      try{
            const res = await axios.post(`http://localhost:5000/login`, takenParams )
            //console.log(res);
            return res;
      }
      catch(e){
            return e.response.data;
      }
      
})
export const fetchMeAsync =  createAsyncThunk('textG/fetchMeAsync',async () => {
      //console.log(takenParams);
      try{
            const res = await axios.get(`http://localhost:5000/Auth/me`)
            //console.log(res);
            return res;
      }
      catch(e){
            return e.response.data;
      }
})



export const fetchLogoutAsync = createAsyncThunk('textG/fetchLogoutAsync',async () => {
      let token = localStorage.getItem("access-token")
      const { data } = await axios.post(`http://localhost:5000/logout`,{ accesstoken : token, }, config );
      return data;
})
    

export const AuthSlice = createSlice({
      name: "textG",
      initialState: {
            items: null,
            ProfileData: null,
            isLoading: false,
            errorLogin: null,
            errorRegister: null,
            loginSuccess: null,
      },
      reducers: {
        setLoginStateNull(state,action){
            state.loginSuccess = null;
        }
      },
      extraReducers: {
            // Post Register
            [postRegisterAsync.pending]: (state, action) => {
                  state.isLoading = true;
            },
            [postRegisterAsync.fulfilled]: (state, action) => {
                  state.items = action.payload;
                  console.log(action.payload);
                  const errorTouch = action.payload.ValidationErrors.errors;
                  if(errorTouch){
                        if(errorTouch.length > 0){
                              let errorString ="";
                              for(let i =0; i<errorTouch.length ; i++){
                                    errorString += errorTouch[i].msg + ", ";
                              }
                              state.errorRegister = errorString ;
                        }
                  }else{
                        state.errorRegister = null;
                  }
                  
                  
                  state.isLoading = false;
            },
            [postRegisterAsync.rejected]: (state, action) => {
                  state.error = action.error.message;
                  state.isLoading = false;
            },

            // //Post login
            [postLoginAsync.pending]: (state, action) => {
                 
                  state.isLoading = true;
            },
            [postLoginAsync.fulfilled]: (state, action) => {
                  console.log(action);
                  
                  if(action.payload.data){
                        state.loginSuccess = "giriş başarılı yönlendiriliyorsunuz";
                        state.ProfileData = action.payload.data.userReq;
                        
                        localStorage.setItem("access-token", action.payload.data.userReq.token);
                        state.errorLogin = null;
                  }else{
                        state.errorLogin = action.payload.error;
                        state.loginSuccess = null;
                  }
                   
                  state.isLoading = false;
            },
            [postLoginAsync.rejected]: (state, action) => {
                  console.log(action);
                  state.error = action.error.message;
                  state.isLoading = false;
            },
           // fetch me 
           [fetchMeAsync.fulfilled]: (state, action) => {
                  
                  state.isLoading = false;
            },
            [fetchLogoutAsync.fulfilled]:(state, action) => {
                  localStorage.removeItem("access-token");
                  state.ProfileData = null;
            },
      }
});
export const selectText = (state) => state.textG.items;


export const { postLogin,setLoginStateNull } = AuthSlice.actions;
export default AuthSlice.reducer;