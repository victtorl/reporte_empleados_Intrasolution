import axios from 'axios'

const baseUrl =''

export const getAll =async () =>{
    const res =await axios.get(baseUrl)
    return res.data
}