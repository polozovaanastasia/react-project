import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App
          state={state}
          dispatch={store.dispatch.bind(store)} />
        {/* т.к. отдаем метод. чтобы потом в ProfilePosts при вызове колбэка addPost он не вызывался от props, которые туда приходят.
          иначе у нас поменяется this внутри самого метода.Аналогично и с updateNewPost */}
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store.getState());
store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
