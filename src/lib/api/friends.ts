import axios from "axios";
import { IFriend, IFriendDetails } from "../types";

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
  const result = response.data as IFriend[];
  /* Overwrite the img property because the API does not provide valid image URL */
  result.forEach((friend) => {
    friend.img = `https://keenthemes.com/static/metronic/tailwind/dist/assets/media/avatars/300-${friend.id}.png`;
  });
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
export const getFriendDetails = async (id: string): Promise<IFriendDetails> => {
  const response = await axios.get(`${FRIEND_DETAIL_URL}?id=${id}`);
  if (response.status !== 200) {
    throw new Error('Failed to fetch friend detail');
  }
  const result = response.data as IFriendDetails;
  /* Overwrite the img property because the API does not provide valid image URL */
  result.img = `https://keenthemes.com/static/metronic/tailwind/dist/assets/media/avatars/300-${result.id}.png`;
  return response.data as IFriendDetails;
};
