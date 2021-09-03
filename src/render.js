import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addPost, updateNewPost } from './redux/state';

let rerenderEntireTree = (state) => {
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

export default rerenderEntireTree;