//import axios from 'axios'
import { apiUrl } from '../constants.js'

export const getUsers = async <T>(): Promise<T> => {
    try {
        const res = await axios.get(apiUrl)

        if(res.status !== 200){
            throw new Error('Cannot get users')
        }

        return res.data
    } catch (err) {
        console.warn('err', err)
        return err
    }
}

export const addUser = async (name: string, email: string) => {
    try {
        const res = await axios.post(apiUrl, {
            body: JSON.stringify({
                id: 11, //for the sake of the example
                name: name,
                email: email,
              }),
        })
        
        if(res.status !== 201){
            throw new Error('Cannot post user')
        }

        return res.data.body
    } catch (error) {
        
    }
}

export const deleteUser = async (id: number) => {
    try {
        const res = await axios.delete(`${apiUrl}/${id}`)

    if(res.status !== 200){
        throw new Error('Cannot delete user')
    }

    return res.data
    } catch (err) {
        console.warn('err', err)
        return err
    }
}

export const putUser = async (id: number) => {
    try {
        const res = await axios.put(`${apiUrl}/${id}`, {
            name: 'put name',
            email: 'put email'
        })
    
        if(res.status !== 200){
            throw new Error('Cannot put user')
        }
    
        return res.data
    } catch (err) {
        console.warn('err', err)
        return err
    }
}

export const patchUser = async (id: number) => {
    try {
        const res = await axios.patch(`${apiUrl}/${id}`, {
            name: 'patch name',
            email: 'patch email'
        })
    
        if(res.status !== 200){
            throw new Error('Cannot patch user')
        }
    
        return res.data
    } catch (err) {
        console.warn('err', err)
        return err
    }
}