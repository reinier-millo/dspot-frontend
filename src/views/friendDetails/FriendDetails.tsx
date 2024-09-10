/**
 * View to display friend details.
 */
import React, { useEffect } from 'react';
import { setShowBackBtn } from '../../lib/store/layoutSlice';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../lib/store';

const FriendDetails: React.FC = () => {
  const friends = useSelector((state: IRootState) => state.friends.friends);
  const dispatch = useDispatch();

  /* Friend details will show the back button */
  useEffect(() => {
    dispatch(setShowBackBtn(true));
  }, [dispatch]);

  return (
    <div>
      <h1>FriendDetails</h1>
    </div>
  );
};

export default FriendDetails;
