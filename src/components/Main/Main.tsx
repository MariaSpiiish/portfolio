import { useState } from 'react';
import About from '../About/About';
import Hero from '../Hero/Hero';
import Projects from '../Projects/Projects';
import ProjectPopup from '../ProjectPopup/ProjectPopup';
import VideoPopup from '../VideoPopup/VideoPopup';

function Main() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [project, setProject] = useState('');
  const [video, setVideo] = useState('');

  return (
    <>
      <main className='main'>
        <Hero />
        <About />
        <Projects setProject={setProject} setIsOpen={setIsOpen} setVideo={setVideo} setIsVideoOpen={setIsVideoOpen}/>
      </main>
      <ProjectPopup isOpen={isOpen} setIsOpen={setIsOpen} project={project}/>
      <VideoPopup video={video} setIsVideoOpen={setIsVideoOpen} isVideoOpen={isVideoOpen} />
    </>

  )
}

export default Main;