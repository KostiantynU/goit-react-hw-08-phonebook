import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { storeWB, persistorWB } from 'redux/storeWB';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { App } from 'components/App';
import './index.css';
import 'modern-normalize/modern-normalize.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="goit-react-hw-08-phonebook">
      <Provider store={storeWB}>
        <PersistGate loading={null} persistor={persistorWB}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
