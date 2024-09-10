/**
* Friend details photos tab component
*/
import { useState } from 'react';
import { IFriendDetails } from '../../../lib/types';
import PhotoOverlayComponent from '../photoOverlay/PhotoOverlay';

const PhotosTabComponent = ({ details }: { details: IFriendDetails }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | undefined>(undefined);

  const handleClose = () => {
    setSelectedPhoto(undefined);
  };

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
      {details.photos.map((photo, idx) => (
        <img
          src={photo}
          alt={photo}
          className="w-[136px] h-[136px] rounded"
          key={`photo-${idx}`}
          onClick={() => setSelectedPhoto(photo)}
        />
      ))}
      <PhotoOverlayComponent img={selectedPhoto} onClose={handleClose} />
    </div>
  );
};

export default PhotosTabComponent;
