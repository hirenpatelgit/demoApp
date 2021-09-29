import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const setDataToLocalStorage = async (key, value) => {
    try {
        // console.log('successfully save data to local storage------>', value);
        await AsyncStorage.setItem(key, value)
    } catch (e) {
        // saving error
        console.log('set localstorage----', e)
    }
}

const getDataFromLocalStorage = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key)
        console.log('successfully get data to local storage')
        if (value !== null) {
            // value previously stored
            return value
        }
        else {
            return ''
        }
    } catch (e) {
        console.log('successfully get data to local storage=====>', e)
        return ''
    }
}

const removeValueFromLocal = async (key) => {
    try {
      await AsyncStorage.removeItem(key)
    } catch(e) {
      // remove error
    }
  
    console.log('Done.')
  }

export {
    setDataToLocalStorage,
    getDataFromLocalStorage,
    removeValueFromLocal
}