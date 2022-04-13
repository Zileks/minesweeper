import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

export function Render(store: any, Component: any, state?: any) {
  return render(
    <Provider store={store}>
      <Component gameState={state} />
    </Provider>
  );
}
