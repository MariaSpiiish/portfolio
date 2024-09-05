import { useState } from "react";
import ImagePopup from "../ImagePopup/ImagePopup";
import Slider from "../Slider/Slider";

function Qualifications() {
  const [isOpen, setIsOpen] = useState(false);
  const [img, setImg] = useState('');

  return (
    <>
      <main className="qual">
        <div className="qual__carousel">
          <Slider setIsOpen={setIsOpen} setImg={setImg}/>  
        </div>
      </main>
      <ImagePopup img={img} setIsOpen={setIsOpen} isOpen={isOpen}/>
    </>
    
  )
}

export default Qualifications