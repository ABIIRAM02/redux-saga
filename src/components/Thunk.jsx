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

  console.log(loading , error);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  userData && console.log(userData);
  return (
    <div>
      <h2>hello Abii</h2>
      {
        userData?.map(data => 
          <h2>{data.id}</h2>
          )
      }
    </div>
  )
}

export default Thunk