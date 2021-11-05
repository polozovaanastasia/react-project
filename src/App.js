import { Route } from 'react-router';
import './App.css';
import Header from './components/Header/Header';
import MessagesContainer from './components/Messages/MessagesContainer';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = () => {
  return (
      <div className="app-wrapper">
        <Header />
        {/* <Navbar store={props.store} /> */}
        <Navbar />
        <main className="app-wrapper-content">
          <Route path="/profile" 
              render={() => <Profile />} />
          <Route path="/messages" 
              render={() => <MessagesContainer />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </main>
      </div>
  );
}
export default App;
