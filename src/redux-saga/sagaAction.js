import { takeEvery, call, put } from "redux-saga/effects";
import bookFetch from "./Actions/bookFetch";
import { fetchBooksFail, fetchBooksSuccess } from "./counter";

function* handleBooksFetch(action) {
  try {
    const data = yield call(bookFetch, action.payload);
    yield put(fetchBooksSuccess(data));
  } catch (error) {
    yield put(fetchBooksFail(error));
  }
}

export default function* sagaAction() {
  yield takeEvery("counter/fetchBooks", handleBooksFetch);
}
