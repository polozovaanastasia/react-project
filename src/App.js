import './App.css';
import Header from './components/Header/Header';
import Messages from './components/Messages/Messages';
import Navbar from './components/Navbar/Navbar';
// import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <main className="app-wrapper-content">
        <Messages />
        {/* <Profile /> */}
      </main>
    </div>
  );
}
export default App;
