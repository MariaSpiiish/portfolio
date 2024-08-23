import { videoData } from "../../utils/constants";

function Projects() {
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
            <video className="projects__video" width="600" src={item.url} autoPlay={true} loop muted>
              Your browser does not support the video tag.
            </video>
            {item.link && <button className="projects__list-item-footer"><a href={item.link} target="_blank" rel="noopener noreferrer">
              Результат
            </a></button>}
          </li>
          )
        )}
      </ul>
    </section>
  )
}

export default Projects;