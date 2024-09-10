import Popup from "../Popup/Popup";
import { projectData } from "../../utils/constants";
import { CheckCircleTwoTone } from "@ant-design/icons";

type PropsType = {
    project: string,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    isOpen: boolean 
}

function ProjectPopup({ setIsOpen, isOpen, project }: PropsType) {
  const projectArr = projectData.find(item => item.id === project);

  const content = projectArr !== undefined ? (
      <div className="popup__project-container">
        <h3 className="popup__project-header">{projectArr.content.split('\n')[0]}</h3>
        {projectArr.content.split('\n').slice(1).map((item, i) => (
          <p className="popup__project-p" key={i}><CheckCircleTwoTone twoToneColor="#df962c"/>{item}</p>
        ))}
      </div>
    ) : (
      <div className="popup__project-container">
        <p>No content seems to be found</p>
      </div>
  );

  return (
    <Popup setIsOpen={setIsOpen} isOpen={isOpen}>
      {content}
    </Popup>
  );
}

export default ProjectPopup