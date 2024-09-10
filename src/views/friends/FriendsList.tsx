/**
 * View to display the list of friends.
 */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../lib/store';
import { setShowBackBtn } from '../../lib/store/layoutSlice';

const FriendsList: React.FC = () => {
  const friends = useSelector((state: IRootState) => state.friends.friends);
  const dispatch = useDispatch();

  /* Friends list will not show the back button */
  useEffect(() => {
    dispatch(setShowBackBtn(false));
  }, [dispatch]);

  return (
    <div>
      <h1>FriendsList</h1>
    </div>
  );
};

export default FriendsList;
