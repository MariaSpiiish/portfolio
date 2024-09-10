import Popup from "../Popup/Popup";

type PropsType = {
    video: string,
    setIsVideoOpen: React.Dispatch<React.SetStateAction<boolean>>,
    isVideoOpen: boolean 
}

const VideoPopup = ({ video, setIsVideoOpen, isVideoOpen }: PropsType) => {    
    return (
        <Popup setIsOpen={setIsVideoOpen} isOpen={isVideoOpen}>
          <video src={video} autoPlay={true} loop muted className="popup__video">Your browser does not support the video tag.</video>
        </Popup>
    ) 
}

export default VideoPopup;