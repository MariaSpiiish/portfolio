import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

function BackToTop() {
    
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
    };

  return (
    <div className='backtotop' >
        <button className='backtotop__button' onClick={scrollToTop}>ВВЕРХ</button>
        <FontAwesomeIcon icon={faChevronUp} className='backtotop__up' onClick={scrollToTop}/>
    </div>
  )
}

export default BackToTop