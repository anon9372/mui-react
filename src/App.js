import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../src/styles/App.css'
import '../src/styles/index.css'
import Home from "./pages/home";
import Tour from "./pages/tour"
import SearchAppBar from './components/appBar';
import Form from './pages/form';
import { AuthProvider } from './auth';
import Login from './pages/login';
import RequireAuth from './components/requireAuth';
function App() {
  return (
    <AuthProvider>
      <Router>
        <SearchAppBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/:id' element={<Tour />} />
          <Route path='/add' element={<RequireAuth> <Form /></RequireAuth>} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
