import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';

var loggedIn = false

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename='/Tuneway'>
      <Routes>
        <Route
          path="/"
          element={loggedIn ? <Navigate to="/dashboard" replace /> : <Home />}
        />
        <Route
          path="dashboard"
          element={loggedIn ? <Dashboard /> : <Navigate to="/login" replace />}
        />
        <Route
          path="login"
          element={loggedIn ? <Navigate to="/dashboard" replace /> : <Login/>}
        />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);
