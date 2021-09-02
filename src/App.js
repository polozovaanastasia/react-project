import { Route } from 'react-router';
import './App.css';
import Header from './components/Header/Header';
import Messages from './components/Messages/Messages';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state.navBar} />
        <main className="app-wrapper-content">
          <Route path="/profile" 
              render={() => <Profile 
                state={props.state.profilePage}
                addPost={props.addPost} />} />
          <Route path="/messages" 
              render={() => <Messages state={props.state.messagesPage} />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </main>
      </div>
  );
}
export default App;
