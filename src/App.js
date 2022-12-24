import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../src/styles/App.css'
import '../src/styles/index.css'
import Home from "./pages/home";
import Tour from "./pages/tour"
import SearchAppBar from './components/appBar';
function App() {
  return (
    <>
      <SearchAppBar />
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/:id' element={<Tour />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
