import React from 'react';
import {
  BrowserRouter as Router, Route, Routes, Navigate,
} from 'react-router-dom';
import styles from './App.module.scss';
import Page404 from './pages/404/Page404';
import HomePage from './pages/Home/HomePage';

const App = () => (
  <div className={styles.App}>
    <Router>

      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="404"
          element={<Page404 />}
        />
        <Route
          path="*"
          element={<Navigate to="/404" />}
        />
      </Routes>
    </Router>
  </div>
);

export default App;
