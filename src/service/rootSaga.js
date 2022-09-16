import { fork } from 'redux-saga/effects';
import gallerySaga from '../storeRedux/gallery/saga';
import newsSaga from '../storeRedux/news/saga';
import authSaga from '../storeRedux/auth/saga';

export default function* rootSaga() {
  yield fork(gallerySaga);
  yield fork(newsSaga);
  yield fork(authSaga);
}
