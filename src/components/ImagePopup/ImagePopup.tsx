type PropsType = {
    img: string,
    onClose: () => void,
    isOpen: boolean 
}

const ImagePopup = ({ img, onClose, isOpen }: PropsType) => {
    const close = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      onClose()
    }
    
    return (
        <div className={isOpen ? `popup popup_opened` : `popup`}>
          <div className="popup__image-container">
            <button type="button" className="popup__close-button" onClick={close}></button>
            <img src={img} alt={'Certificate'} className="popup__image"/>
          </div>
        </div> 
    )
    
}

export default ImagePopup;