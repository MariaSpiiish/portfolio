import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react"
import { slides } from '../../utils/constants'

type PropsType = {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setImg: React.Dispatch<React.SetStateAction<string>>
}

function Slider({ setIsOpen, setImg }: PropsType) {
  const [currentIndex, setCurrentIndex] = useState<number>(() => {
    const savedIndex = localStorage.getItem('slider-current-index');
    return savedIndex ? parseInt(savedIndex, 10) : 0;
});

useEffect(() => {
    // Save the currentIndex to local storage whenever it changes
    localStorage.setItem('slider-current-index', currentIndex.toString());
}, [currentIndex]);
    
    
    const goToNext = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }

    const goToPrev = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    }

    const handleClick = () => {
      setIsOpen(true);
      setImg(slides[currentIndex]);
    }

  return (
    <div className="slider">
        <RightOutlined className="slider__arrow slider__arrow_right" onClick={goToNext}/>
        <LeftOutlined className="slider__arrow slider__arrow_left" onClick={goToPrev}/>
        <div className="slider__slide" style={{backgroundImage: `url(${slides[currentIndex]})`}} onClick={handleClick}></div>
    </div>
  )
}

export default Slider