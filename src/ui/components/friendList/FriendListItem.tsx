/**
 * Component to display a friend's entry in the list.
 */
import "../../../styles/components/friendListItem.scss";
import { IFriend } from "../../../lib/types";
import AvatarComponent from "../avatar/Avatar";
import { useNavigate } from "react-router-dom";

const FriendListItemComponent = ({ friend }: { friend: IFriend }) => {
  const navigate = useNavigate();

  /* Show the friend details page */
  const showDetails = () => {
    navigate(`/${friend.id}/details`);
  }

  return (
    <li className="flex justify-between friend-item-container">
      <div className="flex ">
        <AvatarComponent size="small" img={friend.img} title={`${friend.first_name} ${friend.last_name}`} active={friend.available} />
        <div className="friend-item-container-left flex flex-col justify-center">
          <div className="friend-item-name">{friend.first_name} {friend.last_name}</div>
          <div className="hidden sm:flex friend-item-status">{friend.status}</div>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <button className="friend-item-container-cta" onClick={() => showDetails()}>Details</button>
      </div>
    </li>
  )
}

export default FriendListItemComponent;