import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import React, { useState } from 'react';
import './App.css';
import HouseList from './HouseList';
import HouseDetail from './HouseDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

const App = () => {
  const [selectedHouse, setSelectedHouse] = useState(null);

  const selectHouse = (house) => {
    setSelectedHouse(house);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>House Management System</h1>
      </header>
      <main>
        <HouseList selectHouse={selectHouse} />
        <HouseDetail house={selectedHouse} />
      </main>
    </div>
  );
};

export default App;
