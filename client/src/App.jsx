import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard';
import Registration from './components/Registration/Registration'

import Login from './pages/Login/Login';
import Register from './pages/Register/Register'

import NotFound from './pages/NotFound/NotFound';

import React, { Component } from 'react'
import ResetPassword from './pages/ResetPassword/ResetPassword';
import VerifyEmail from './pages/VerifyEmail/VerifyEmail';

export default class App extends Component {
  setToken = (token) => {
    console.log(token)
    this.setState({
      token: token
    })

    sessionStorage.setItem('token', JSON.stringify(token));
  }

  getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  }

  state = {
    token: this.getToken()
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route
            path="/"
            element={this.state.token ? <Navigate to="/dashboard" replace /> : <Home />}
          />
          <Route
            path="dashboard"
            element={this.state.token  ? <Dashboard /> : <Navigate to="/login" replace />}
          />
          <Route
            path="login"
            element={this.state.token  ? <Navigate to="/dashboard" replace /> : <Registration>
              <Login setToken={this.setToken}/>
            </Registration>}
          />
          <Route
            path="register"
            element={this.state.token  ? <Navigate to="/dashboard" replace /> : <Registration>
              <Register setToken={this.setToken}/>
            </Registration>}
          />
          <Route
            path="reset-password"
            element={<ResetPassword/>}
          />
          <Route
            path="verify-email"
            element={<VerifyEmail/>}
          />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
    )
  }
}