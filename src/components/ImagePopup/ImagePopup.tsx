import { useEffect, useRef } from "react"

type PropsType = {
    img: string,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    isOpen: boolean 
}

const ImagePopup = ({ img, setIsOpen, isOpen }: PropsType) => {
    const popupRef = useRef<HTMLDivElement | null>(null);
    console.log(popupRef)

    // Function to handle clicks outside the popup
  const handleClickOutside = (event: MouseEvent) => {
    console.log('here')
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  // Function to handle keydown events
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add event listeners when the popup is open
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    // Clean up event listeners when the popup is closed or component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

    const close = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setIsOpen(false);
    }
    
    return (
        <div className={isOpen ? `popup popup_opened` : `popup`} ref={popupRef}>
          <div className="popup__image-container">
            <button type="button" className="popup__close-button" onClick={close}></button>
            <img src={img} alt={'Certificate'} className="popup__image"/>
          </div>
        </div> 
    )
    
}

export default ImagePopup;