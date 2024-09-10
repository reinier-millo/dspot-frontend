/**
* Friend details photos tab component
*/
import { IFriendDetails } from "../../../lib/types";


const PhotosTabComponent = ({ details }: { details: IFriendDetails }) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
      {details.photos.map((photo, idx) => (
        <img src={photo} alt={photo} className="w-[136px] h-[136px] rounded" key={`photo-${idx}`} />
      ))}
    </div>
  )
}

export default PhotosTabComponent;
