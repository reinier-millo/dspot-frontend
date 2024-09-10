/**
 * App component to wrap the application.
 */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../../layout/Layout';
import FriendsList from '../../../views/friends/FriendsList';
import FriendDetails from '../../../views/friendDetails/FriendDetails';
import { getFriends } from '../../../lib/api/friends';
import { setFriends } from '../../../lib/store/friendsSlice';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useDispatch();

  /* Fetch friends from the API when the component is mounted. 
  This is used to populate the friends list when loading details page directly. */
  useEffect(() => {
    const fetchFriends = async () => {
      const data = await getFriends();
      dispatch(setFriends(data));
      setIsLoading(false);
    };
    fetchFriends();
  }, [dispatch]);

  return (
    <>
      {isLoading ? <></> :
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<FriendsList />} />
              <Route path="/:id/details" element={<FriendDetails />} />
            </Route>
          </Routes>
        </Router>
      }
    </>
  );
};

export default App;
