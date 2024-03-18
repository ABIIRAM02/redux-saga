import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux-saga/counter";

const Saga = () => {
  const { loading, data, error } = useSelector((state) => state.counter.books);
  console.log(data);
  const dispatch = useDispatch()

  useEffect( () => {
        dispatch(fetchBooks(20))
  },[] )

  if (loading) return <h2>Loading...</h2>;
  if (error) console.log(error);

  return (
    <div>
        <h2>hello abii</h2>
      {data?.map((book) => (
        <h4>{book.title}</h4>
      ))}
    </div>
  );
};

export default Saga;
