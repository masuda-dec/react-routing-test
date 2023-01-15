import logo from './logo.svg';
import { Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Home from './routes/home';
import About from './routes/about';
import Contact from './routes/contact';
import ThreadIndex from './routes/threadindex';
import Thread from './routes/thread';
import Threads from './routes/threads'
import NoMatch from './routes/nomath'

function App() {
  return (
    <div className='App'>
      <h1>10ちゃんねる</h1>
      <ul>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? { color: 'blue' } : undefined)}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? { color: 'blue' } : undefined)}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? { color: 'blue' } : undefined)}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : undefined)}
            to="/threadindex"
          >
            新着スレッド
          </NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/threadindex' element={<ThreadIndex />} >
          <Route index element={<Threads />} />
          <Route path=":threadId" element={<Thread />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
  //
}

export default App;
