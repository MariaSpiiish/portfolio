import { useState } from "react";
import ImagePopup from "../ImagePopup/ImagePopup";
import Slider from "../Slider/Slider";

function Qualifications() {
  const [isOpen, setIsOpen] = useState(false);
  const [img, setImg] = useState('');

  const close = (): void => {
    setIsOpen(false);
  }

  return (
    <>
      <main className="qual">
        <div className="qual__carousel">
          <Slider setIsOpen={setIsOpen} setImg={setImg}/>  
        </div>
      </main>
      <ImagePopup img={img} onClose={close} isOpen={isOpen}/>
    </>
    
  )
}

export default Qualifications