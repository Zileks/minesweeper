import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from '../../app/store/sagas/rootSaga';

export function customRender(Component: Function, state?: Object) {
  const sagaMiddleware = createSagaMiddleware();
  const mockStore = configureStore([sagaMiddleware]);
  const store = mockStore(state);
  sagaMiddleware.run(watcherSaga);
  return render(
    <Provider store={store}>
      <Component gameState={state} />
    </Provider>
  );
}
