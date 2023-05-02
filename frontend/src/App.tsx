// import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import WelcomePage from './components/WelcomePage';
import CardList from './components/CardList';
import UserProfile from './components/UserProfile';
import FortuneTeller from './components/FortuneTeller';
import Navbar from './components/Navbar';


function App() {

  return (
    <Routes>
      <Route element={<WelcomePage/>} path="/"/>
      <Route element={<CardList/>} path="/cards"/>
      <Route element={<UserProfile/>} path = "/profile"/>
      <Route element={<FortuneTeller/>} path ="/readings"/>
    </Routes>
  )
}

export default App
