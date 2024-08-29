import { useState } from 'react'
import ReactDOM from 'react-dom';
import TopBar from './topbar/TopBar.jsx';
import Home from './pages/Home/Home.jsx';
import SinglePost from './SinglePost/SinglePost.jsx'; 
import Write from './pages/Write/Write.jsx';
import Settings from './pages/settings/Settings.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";



function App() {
const user = true;
  return (
  <>

    <Router>
    <TopBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={user ? <Home /> : <> <Register /> </>} />
          <Route path="/login" element={user ? <Home /> : <> <Login /></>} />
          <Route path="/write" element={user ? <Write /> : <><Home /><Register /></>} />
          <Route path="/settings" element={user ? <Settings /> : <><Home /><Register /></>} />
          <Route path="/singlePost" element={<SinglePost />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
