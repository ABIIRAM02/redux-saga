import axios from 'axios'
import React from 'react'

const bookFetch = async (query = 10) => {
  const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/?_limit=${query}`)
  return data
}

export default bookFetch