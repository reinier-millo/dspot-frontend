/**
 * Avatar component to display a user's profile picture and online status.
 */
import { IFriend } from "../../../lib/types";
import "../../../styles/components/avatar.scss";

const AvatarComponent = ({ size, friend }: { size: "big" | "small", friend: IFriend }) => {
  return (
    <div className={`avatar-container avatar-container__${size}`}>
      <img alt={`${friend.first_name} ${friend.last_name}`} title={`${friend.first_name} ${friend.last_name}`} src={friend.img} className="avatar-image" />
      {friend.available && <div className="avatar-status" />}
    </div>
  )
}

export default AvatarComponent;
