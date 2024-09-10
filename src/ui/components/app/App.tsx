/**
 * App component to wrap the application.
 */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../../layout/Layout';
import FriendsList from '../../../views/friends/FriendsList';
import FriendDetails from '../../../views/friendDetails/FriendDetails';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<FriendsList />} />
          <Route path="/:id/details" element={<FriendDetails />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
