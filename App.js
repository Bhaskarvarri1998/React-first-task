import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import DropdownForm from './DropdownForm';
import PageOne from './PageOne';
import PageTwo from './PageTwo';

  function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<DropdownForm />} />
          <Route path="/page-one" element={<PageOne />} />
          <Route path="/page-two" element={<PageTwo />} />
        </Routes>
      </Router>
    );
  }



export default App;
