/**
 * View to display the list of friends.
 */
import "../../styles/views/friendsList.scss";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../lib/store';
import { setShowBackBtn } from '../../lib/store/layoutSlice';
import { getFriends } from '../../lib/api/friends';
import { setFriends } from '../../lib/store/friendsSlice';
import FriendListComponent from '../../ui/components/friendList/FriendList';

const FriendsList: React.FC = () => {
  const friends = useSelector((state: IRootState) => state.friends.friends);
  const dispatch = useDispatch();

  /* Friends list will not show the back button */
  useEffect(() => {
    dispatch(setShowBackBtn(false));
  }, [dispatch]);

  /* Fetch friends from the API when the component is mounted */
  useEffect(() => {
    const fetchFriends = async () => {
      const data = await getFriends();
      dispatch(setFriends(data));
    };

    fetchFriends();
  }, [dispatch]);

  return (
    <div className="friends-list-view-container h-full">
      <div className="friends-list-view-title mb-3.5">Friends</div>
      <FriendListComponent friends={friends} />
    </div>
  );
};

export default FriendsList;
