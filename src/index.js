import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { state, addPost, updateNewPost, subscribe } from './redux/state';

let rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App
          state={state}
          addPost={addPost}
          updateNewPost={updateNewPost}/>
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

rerenderEntireTree(state);
subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
