import { videoData } from "../../utils/constants";

type PropsType = {
  setProject: React.Dispatch<React.SetStateAction<string>>,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  setVideo: React.Dispatch<React.SetStateAction<string>>,
  setIsVideoOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

function Projects({setProject, setIsOpen, setVideo, setIsVideoOpen}: PropsType) {
  const handleAboutProjectClick = (id: string) => {
    setProject(id);
    setIsOpen(true);
  }

  const handleVideoClick = (url: string) => {
    setVideo(url);
    setIsVideoOpen(true);
  }

  return (
    <section className='projects' id='projects'>
      <h2 className="section-title">Проекты</h2>
      <ul className="projects__list">
        {videoData.map((item, i) => (
          <li key={i} className="projects__list-item">
            <div className="projects__list-item-header">
              <h3 className="projects__title">{item.title}</h3>
              <h3 className="projects__date">{item.date}</h3>
            </div>
            <video className="projects__video" width="600" src={item.url} autoPlay={true} loop muted onClick={() => handleVideoClick(item.url)}>
              Your browser does not support the video tag.
            </video>
            <div className="projects__list-item-footer">
              <button className="projects__button projects__button_about" onClick={() => handleAboutProjectClick(item.id)}>О проекте</button>
              {item.link && (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="projects__button projects__button_link">
                  Результат
                </a>
              )}
            </div>
            
          </li>
          )
        )}
      </ul>
    </section>
  )
}

export default Projects;