import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { b2bConfig } from '../../constants'
export const fetchUsrData = createAsyncThunk('userData/fetch', async () => {
   if(localStorage.getItem('accessToken')){
    const response = await axios(
        `${b2bConfig.apiPath.bzEntry}/user/profile/`
    )
    return response.data
   }
})
interface authState {
    usrName?: string
    bzName?: string
    accessToken?: string
    refreshToken?: string
    isAuth: boolean
    loading: boolean,
    loginTm?:string,
    module?: modulePros[]
}
interface modulePros {
    path?: string
    name?: string
    allow?: boolean
}

const initialState: authState = {
    usrName: '',
    bzName: '',
    accessToken: '',
    refreshToken: '',
    isAuth: true,
    loading: false,
    loginTm:"",
    module: [
       
    ]
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<authState>) => {
            state.usrName = action.payload.usrName
            state.bzName = action.payload.bzName
            state.accessToken = action.payload.accessToken
            state.refreshToken = action.payload.refreshToken
            state.isAuth = true
        },
        logout: state => {
            state.usrName = ''
            state.bzName = ''
            state.accessToken = ''
            state.refreshToken = ''
            state.isAuth = true
        },
        RefreshToken: (state, action: PayloadAction<string>) => {
            state.accessToken = action.payload
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload
        }
    },
    
    extraReducers: builder => {
        builder.addCase(
            fetchUsrData.pending,
            (state, action: PayloadAction<any>) => {
                state.loading = true

            }

        )
        builder.addCase(
            fetchUsrData.fulfilled,
            (state, action: PayloadAction<any>) => {
                state.loading = false
                const modules:modulePros[]=[
                    {
                        name:'BUSADMIN',
                        path:'/bus',
                        allow:false
                    },
                    {
                        name:'FLIGHTADMIN',
                        path:'/flight',
                        allow:false
                    },
                    {
                        name:'MOBILEADMIN',
                        path:'/mobile',
                        allow:false
                    },
                ]
                state.module=modules
            }

        )

        builder.addCase(
            fetchUsrData.rejected,
            (state, action: PayloadAction<any>) => {
                state.loading = false
                state.isAuth=false
               
            }

        )

    }

})


export const { login, logout, RefreshToken,setLoading } = authSlice.actions

export default authSlice.reducer