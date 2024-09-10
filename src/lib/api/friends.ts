import axios from 'axios';
import { IFriend, IFriendDetails } from '../types';

const FRIENDS_LIST_URL = 'http://private-5bdb3-friendmock.apiary-mock.com/friends';
const FRIEND_DETAIL_URL = 'http://private-5bdb3-friendmock.apiary-mock.com/friends/id';

const PHOTOS = [
  // eslint-disable-next-line max-len
  'https://www.tripsavvy.com/thmb/wtDMMGWy7Wt4V7qhnH010vFbWvw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-531732818-592d24ec3df78cbe7e956e68.jpg',
  // eslint-disable-next-line max-len
  'https://www.tripsavvy.com/thmb/gsSmhqUBs5VhIkcOldblXY_byzQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/REDFORT_2-ab8ce4b9959c4d49b056fd40e049fed8.JPG',
  // eslint-disable-next-line max-len
  'https://www.tripsavvy.com/thmb/kl4h0xXearxBbPe9XtuJFuOOvPA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/JAMAMASJID_2-dfd108c23ff6490e9607b1ab09b4c03c.JPG',
  // eslint-disable-next-line max-len
  'https://www.tripsavvy.com/thmb/q4ZrDuzGeH8J5E_KlYSu5Loo2bg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/CHANDANICHAWK_4-5fddc290beaa493181ef61c167e9efb7.JPG',
  // eslint-disable-next-line max-len
  'https://www.tripsavvy.com/thmb/MuQbqlxV4_FxqtT3KVgHr10fUNQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/DELHI2019-1-2-03ee02b701a74fb7996c68b5800bb743.JPG',
  // eslint-disable-next-line max-len
  'https://www.tripsavvy.com/thmb/MuQbqlxV4_FxqtT3KVgHr10fUNQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/DELHI2019-1-2-03ee02b701a74fb7996c68b5800bb743.JPG',
  // eslint-disable-next-line max-len
  'https://www.tripsavvy.com/thmb/dvKUv6rPmZNB61k6GsrE9cTNwuI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/HumayunsTomb_2-c70056ca59714b1faf69655fc409a5e4.jpeg',
  // eslint-disable-next-line max-len
  'https://www.tripsavvy.com/thmb/F0W5ILrIPcQ_xZVtzrC3UB0NiZQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/BadaGumbad_1-0e9330e87c324f8f8e09b3a654f4b5e9.JPG',
  // eslint-disable-next-line max-len
  'https://www.tripsavvy.com/thmb/HLg_CCv2hfDhd8VFb9A2-I7mdL4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/OLDDELHI2019-1-86-7375749cfd4147fabff8d0e1f5e6db7d.JPG',
  // eslint-disable-next-line max-len
  'https://www.tripsavvy.com/thmb/3sliFaSAG1SCHcwTw4yyKVcwlcY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/DELHI2019-1-79-43a3cb2bb99e48bba647aae1a6c9da15.JPG',
  // eslint-disable-next-line max-len
  'https://www.tripsavvy.com/thmb/U__igKGnKRyoDSgedKziZuK4h-o=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/india-gate-new-delhi-india-asia-636880762-58e1170e5f9b58ef7ef78fbb.jpg',
  // eslint-disable-next-line max-len
  'https://www.tripsavvy.com/thmb/jSB0F0wjYQy_1xGZqSRCeFceRcY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/OLDDELHI2019-1-52-7532fa7756db49ec9e0278602176c8d4.JPG',
];

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
  result.photos = PHOTOS;
  return response.data as IFriendDetails;
};
