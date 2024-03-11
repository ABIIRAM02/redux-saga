import React, { useEffect } from 'react'
import { increment } from '../redux/counter'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { fetchPosts } from '../redux/thunkAction/usersData'

const Thunk = () => {

  const { loading , error , userData } = useSelector( state => state.counter )
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchPosts())
  } , [])

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>hello Abii</h2>
      {
        userData?.map(data => 
          <h2 key={data.id} >{data.title}</h2>
          )
      }
    </div>
  )
}

export default Thunk