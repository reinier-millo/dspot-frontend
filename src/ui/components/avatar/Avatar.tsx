/**
 * Avatar component to display a user's profile picture and online status.
 */
import "../../../styles/components/avatar.scss";

const AvatarComponent = ({ size, img, title, active }: { size: "big" | "small", img: string, title?: string, active: boolean }) => {
  return (
    <div className={`avatar-container avatar-container__${size}`}>
      <img alt={title} title={title} src={img} className="avatar-image" />
      {active && <div className="avatar-status" />}
    </div>
  )
}

export default AvatarComponent;
