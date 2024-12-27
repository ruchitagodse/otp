import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import App from './components/App';
import TodoList from './components/TodoList';
import PrivateRoute from './components/PrivateRoute';

const MainApp = () => {
  return (
    <Router>
      <nav className="bg-emerald-600 p-4">
        <ul className="flex space-x-4 justify-center">
          <li>
            <Link to="/" className="text-white">Login</Link>
          </li>
          <li>
            <Link to="/todos" className="text-white">Todo List</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/todos"
          element={
            <PrivateRoute>
              <TodoList />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default MainApp;
