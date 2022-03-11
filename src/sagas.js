import { call, put, takeLatest, all, select } from "redux-saga/effects";

import * as api from "./api";
import { setCharacters, setPageCount, setCurrentPage } from "./mainSlice";

const sagaTypes = {
  getCharacters: "saga/getCharacters",
};

export const actions = {
  getCharacters: (payload) => ({ type: sagaTypes.getCharacters, payload }),
};

function* getCharacters(action) {
  const filter = yield select((state) => state.main.filter);

  try {
    const res = yield call(api.fetchCharacters, {
      ...filter,
      page: action.payload,
    });

    yield put(
      setCharacters(
        res.data.results.map((item) => ({
          ...item,
          origin: item.origin.name,
          location: item.location.name,
          episode: undefined,
          url: undefined,
          created: undefined,
        }))
      )
    );
    yield put(setPageCount(res.data.info.pages));
    yield put(setCurrentPage(action.payload ?? 1));
  } catch (err) {
    yield put(setCharacters([]));
    yield put(setPageCount(0));
    yield put(setCurrentPage(0));
  }
}

function* watchGetCharacters() {
  yield takeLatest(sagaTypes.getCharacters, getCharacters);
}
export default function* rootSaga() {
  yield all([watchGetCharacters()]);
}
