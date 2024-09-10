/**
 * Photo overlay component
 */
import "../../../styles/components/photoOverlay.scss";

const PhotoOverlayComponent = ({ img, onClose }: { img?: string, onClose: () => void }) => {
  return (
    <>
      {img && <div>
        <div className="fixed inset-0 overlay-bg  transition-opacity" aria-hidden="true"></div>

        <div className="fixed inset-0 z-10 w-screen h-screen flex ">
          <button className="fixed z-20 top-[60px] right-[60px] close-btn" onClick={() => onClose()}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="7.19678" y="16.1924" width="13" height="2" rx="1" transform="rotate(-45 7.19678 16.1924)" fill="white" />
              <rect x="7.19678" y="16.1924" width="13" height="2" rx="1" transform="rotate(-45 7.19678 16.1924)" fill="white" />
              <rect x="8.61108" y="7" width="13" height="2" rx="1" transform="rotate(45 8.61108 7)" fill="white" />
              <rect x="8.61108" y="7" width="13" height="2" rx="1" transform="rotate(45 8.61108 7)" fill="white" />
            </svg>
          </button>
          <img src={img} alt={img} className="m-auto" />
        </div>
      </div>}
    </>
  )
}

export default PhotoOverlayComponent;
