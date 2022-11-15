import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import HomePage from '../Pages/homePage';

export default function Navigation() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </Router>
  )
}
