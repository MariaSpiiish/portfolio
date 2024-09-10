import Popup from "../Popup/Popup";

type PropsType = {
    img: string,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    isOpen: boolean 
}

const ImagePopup = ({ img, setIsOpen, isOpen }: PropsType) => {    
    return (
        <Popup setIsOpen={setIsOpen} isOpen={isOpen}>
          <img src={img} alt={'Certificate'} className="popup__image"/>
        </Popup>
    ) 
}

export default ImagePopup;