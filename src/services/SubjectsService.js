import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import axiosInstance from '../axios-client';

export const getSubjects = async() => {
    try {
        let { data } = await axiosInstance.get('/lectures')
        return data.data
        
    } catch (error) {
        console.log(error)
    }
}



