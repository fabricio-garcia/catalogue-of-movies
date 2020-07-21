import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from '@testing-library/react';
import rootReducer from '../reducers/index';

const store = createStore(rootReducer);

// eslint-disable-next-line react/prop-types
const AllTheProviders = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });
export * from '@testing-library/react';

export { customRender as render };
