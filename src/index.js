import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {
    id: 1,
    avatar: 'https://html5css.ru/w3images/avatar2.png',
    message: 'Hi, how are you?',
  },
  {
    id: 2,
    avatar: 'https://html5css.ru/w3images/avatar6.png',
    message: 'It\'s my first post!',
  }

]

let users = [
  { id: 1, name: 'Dima' },
  { id: 2, name: 'Vasia' },
  { id: 3, name: 'Katia' },
  { id: 4, name: 'Oleg' },
  { id: 5, name: 'Sveta' },
  { id: 6, name: 'Tom!' }
]

let dialogs = [
  {
      id: 1,
      avatar: 'https://html5css.ru/w3images/avatar2.png',
      message: 'Hi, how are you?',
  },
  {
      id: 2,
      avatar: 'https://html5css.ru/w3images/avatar6.png',
      message: 'It\'s my first post',
  }

]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} users={users} dialogs={dialogs} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
