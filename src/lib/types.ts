
export interface IFriend {
  id: number;
  img: string;
  first_name: string;
  last_name: string;
  status: string;
  available: boolean;
}

export interface IFriendDetails extends IFriend {
  phone: string;
  address_1: string;
  city: string;
  state: string;
  zipcode: string;
  bio: string;
  photos: string[];
  statuses: string[];
}
