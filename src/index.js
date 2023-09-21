import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App';
import { persistor, store } from './redux/store';
import { theme } from './constants/theme';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <BrowserRouter basename="/project-healthy-hub">
            <App />
          </BrowserRouter>
        </Provider>
      </PersistGate>
    </ThemeProvider>
  </React.StrictMode>
);
