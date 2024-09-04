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
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
      // Save the currentIndex to local storage whenever it changes
      localStorage.setItem('slider-current-index', currentIndex.toString());
  }, [currentIndex]);
    
  useEffect(() => {
    let loadedImages = 0;
    const totalImages = slides.length;
  
    const handleImageLoad = () => {
      loadedImages += 1;
      if (loadedImages === totalImages) {
        setLoading(false);
      }
    };
  
    slides.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = handleImageLoad;
    });
  
    // Clean up function in case the component unmounts
    return () => {
      setLoading(true); // Reset loading state if needed
    };
  }, []);
    
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
        {loading && <div className="slider__loading">Loading...</div>}
    </div>
  )
}

export default Slider