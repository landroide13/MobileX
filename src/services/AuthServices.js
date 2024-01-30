import axios from '../axios-client'
import { Platform } from 'react-native'
import { setItemAsync, deleteItemAsync } from 'expo-secure-store'
import { USER_TOKEN_KEY, USER_KEY } from '../providers/AuthProvider'
import  ErrorHandler from '../ErrorHandler'

export async function login(data) {
    try {

        data.device_name = Platform.OS
        let res = await axios.post('login', data)
        await setItemAsync(USER_TOKEN_KEY, res.data.data.token)
        await setItemAsync(USER_KEY, JSON.stringify(res.data.data.user))
        return res.data

    } catch (error) {
        throw ErrorHandler(error)
    }
}

export async function signup(data) {
    try {

        let res = await axios.post('signup', data)
        return res.data.message

    } catch (error) {
        throw ErrorHandler(error)
    }
}

export async function logout() {
    try {

        let res = axios.post('logout')
        await deleteItemAsync(USER_TOKEN_KEY)
        await deleteItemAsync(USER_KEY)
        return res.data.message

    } catch (error) {
        throw ErrorHandler(error)
    }
}