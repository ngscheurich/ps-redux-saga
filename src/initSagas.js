import * as sagas from "./sagas";

export const initSagas = sagaMiddleware => {
  console.log(sagaMiddleware);
  Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware));
};
