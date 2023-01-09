import logo from './logo.svg';
import { Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Home from './routes/HOME';
import About from './routes/ABOUT';
import Contact from './routes/CONTACT';
import Posts from './routes/POSTS';
import Post from './routes/POST';
import PostIndex from './routes/POSTINDEX'
import NoMatch from './routes/NOMATH'

function App() {
  return (
    <div className='App'>
      <h1>Hello React Router v6</h1>
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
            to="/POSTS"
          >
            Posts
          </NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/posts' element={<Posts />} >
          <Route index element={<PostIndex />} />
          <Route path=':postId' element={<Post />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
