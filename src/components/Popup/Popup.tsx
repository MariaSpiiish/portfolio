import { useEffect } from "react"

type PropsType = {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    isOpen: boolean,
    children: JSX.Element
}

const Popup = ({ setIsOpen, isOpen, children }: PropsType) => {
  const handleClickOutside = () => {
    setIsOpen(false);
  };

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
        <div className={isOpen ? `popup popup_opened` : `popup`}>
            <div className="popup__container">
                <button type="button" className="popup__close-button" onClick={close}></button>
                {children}
            </div>
        </div> 
    )
    
}

export default Popup;