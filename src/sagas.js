import { call, put, takeLatest, all, select } from "redux-saga/effects";

import * as api from "./api";
import { setCharactersAndPages, setPageCount } from "./mainSlice";

const sagaTypes = {
  getCharacters: "saga/getCharacters",
  getPage: "saga/getPage",
};

export const actions = {
  getCharacters: () => ({ type: sagaTypes.getCharacters }),
  getPage: (payload) => ({ type: sagaTypes.getPage, payload }),
};

function* getCharacters() {
  const filter = yield select((state) => state.main.filter);
  const res = yield call(api.fetchCharacters, filter);

  yield put(
    setCharactersAndPages({
      characters: res.data.results.map((item) => ({
        ...item,
        origin: item.origin.name,
        location: item.location.name,
        episode: undefined,
        url: undefined,
        created: undefined,
      })),
      next: res.data.info.next,
      prev: res.data.info.prev,
    })
  );
  yield put(setPageCount(res.data.info.pages));
}

function* watchGetCharacters() {
  yield takeLatest(sagaTypes.getCharacters, getCharacters);
}

function* getPage(action) {
  const res = yield call(api.fetchData, action.payload);
  yield put(
    setCharactersAndPages({
      characters: res.data.results.map((item) => ({
        ...item,
        origin: item.origin.name,
        location: item.location.name,
        episode: undefined,
        url: undefined,
        created: undefined,
      })),
      next: res.data.info.next,
      prev: res.data.info.prev,
    })
  );
}

function* watchGetPage() {
  yield takeLatest(sagaTypes.getPage, getPage);
}

export default function* rootSaga() {
  yield all([watchGetCharacters(), watchGetPage()]);
}