import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import reducerFunc from './reducer/Actions/GetProducts'
import reportWebVitals from './reportWebVitals';

const cache = new InMemoryCache();

const store = createStore(reducerFunc)
const link = new HttpLink({
  uri: `https://pangaea-interviews.now.sh/api/graphql/`
})

const client = new ApolloClient({
  cache,link
})

ReactDOM.render(
  <ApolloProvider client ={client}>
    <React.StrictMode>
      <Provider store={store}>
      <App />
      </Provider>
    </React.StrictMode>
  </ApolloProvider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
