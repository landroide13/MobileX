import React, { createContext, useReducer, useMemo, useContext, useEffect } from "react";
import * as axios from 'axios'
import { getItemAsync } from "expo-secure-store";
import AuthReducer, { initialState, RESTORE_TOKEN, SIGNIN, SIGNOUT} from "../reducers/AuthReducer";
import AppNavigation from "../navigation/AppNavigation";

export const USER_TOKEN_KEY = 'userToken' 
export const USER_KEY ='user'

export const AuthContext = createContext()

const AuthProvider = () => {

    const [ state , dispatch ] = useReducer(AuthReducer, initialState)

    useEffect(() => {
        const bootstrapAsync = async() => {
            let userToken;

            try{
                userToken = await getItemAsync(USER_TOKEN_KEY)
            }catch(e){
                alert('Token invalid ' + e.message )
            }

            dispatch({
                type: RESTORE_TOKEN,
                token: userToken
            })
        }
        bootstrapAsync().then(() => {})
    })

    const handleLogin = async({ token, user }) => {
        try {
            dispatch({ type: SIGNIN, token, user })
        } catch (error) {
            throw new Error(error)
        }
    }

    const handleLogout = async(data) => {
        try {
            delete axios.defaults.header.common['Authorization']
        } catch (error) {
            throw new Error(error)
        }finally{
            dispatch({ type: SIGNOUT })
        }
    }

    const authContext = useMemo(() => {
        return {
            state, handleLogin, handleLogout
        }
    }, [state])

    return(
        <AuthContext.Provider value={authContext}>
            <AppNavigation userToken={state.userToken}/>
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)

export { useAuth, AuthProvider }