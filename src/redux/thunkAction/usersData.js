import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const USER_URL = 'https://jsonplaceholder.typicode.com/posts/?_limit=10'

export const fetchPosts = createAsyncThunk('usersData/get' , 
    async () => {
        try {
             const res = await axios.get(USER_URL)
             return res.data
        } catch (error) {
            return error.message
        }
    }
)