import axios from "axios";
import { IFriend, IFriendDetail } from "../types";

const FRIENDS_LIST_URL = 'http://private-5bdb3-friendmock.apiary-mock.com/friends';
const FRIEND_DETAIL_URL = 'http://private-5bdb3-friendmock.apiary-mock.com/friends/id';

/**
 * Get the list of friends from the API
 * @returns The list of friends.
 */
export const getFriends = async (): Promise<IFriend[]> => {
  const response = await axios.get(FRIENDS_LIST_URL);
  if (response.status !== 200) {
    throw new Error('Failed to fetch friends');
  }
  return response.data as IFriend[];
};

/**
 * Get the detail of a friend from the API
 * Currently, the API does not support getting the detail of a friend by id. 
 * The id parameter was included for reference to future updates.
 * 
 * @param id The id of the friend.
 * @returns The detail of the friend.
 */
export const getFriendDetail = async (id: number): Promise<IFriendDetail> => {
  const response = await axios.get(`${FRIEND_DETAIL_URL}?id=${id}`);
  if (response.status !== 200) {
    throw new Error('Failed to fetch friend detail');
  }
  return response.data as IFriendDetail;
};
