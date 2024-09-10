/**
 * Component to display a list of friends.
 */
import "../../../styles/components/friendList.scss";
import { IFriend } from "../../../lib/types";
import FriendListItemComponent from "./FriendListItem";

const FriendListComponent = ({ friends }: { friends: IFriend[] }) => {
  return (
    <div className="friend-list-container custom-scrollbar overflow-y-auto">
      <ul className="flex flex-col gap-3.5">
        {friends.map((friend) => (
          <FriendListItemComponent key={`friend-${friend.id}`} friend={friend} />
        ))}
      </ul>
    </div>
  )
}

export default FriendListComponent;
