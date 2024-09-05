import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faEnvelope } from "@fortawesome/free-regular-svg-icons";

export const about: string = "Runner  -  Traveller  -  Teacher  -  WebDev  -  Explorer";

export const stack = {
        frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Redux', 'Ant Design'],
        backend: ['Node.js', 'MongoDB', 'SQLite', 'Express'],
        techs: ['Git', 'БЭМ', 'Английский язык C1']
}

type VideoData = {
        title: string;
        date: string;
        url: string;
        link?: string | undefined;
}[]

export const videoData: VideoData = [
        {
               title: "Let's Talk - приложение для практики английского",
               date: "08/2024",
               url: new URL(`../assets/videos/lets-talk.mp4`, import.meta.url).href,
               link: "https://mariaspiiish.github.io/lets-talk"
        },
        {
                title: "Лендинг",
                date: "06/2024",
                url: new URL(`../assets/videos/landing.mp4`, import.meta.url).href,
                link: "https://mariaspiiish.github.io/landing/"
        },
        {
                title: "Fastnotify",
                date: "02/2023 - 08/2023",
                url: new URL(`../assets/videos/fastnotify.mp4`, import.meta.url).href,
        },
        {
                title: "Дипломный проект ЯндексПрактикум",
                date: "11/2022",
                url: new URL(`../assets/videos/movies.mp4`, import.meta.url).href,
        },
]

type ContactsData = {
        id: string,
        text?: string | undefined;
        icon: JSX.Element | string;
        link?: string | undefined;
}[]

export const contactsData: ContactsData = [
        {
                id: "git",
                icon: new URL(`../assets/github-mark.svg`, import.meta.url).href,
                link: "https://github.com/MariaSpiiish"
        },
        {
                id: "tg",
                icon: <FontAwesomeIcon icon={faPaperPlane} style={{fontSize: "20px", marginTop: "2.5px", color: "#24292f"}}/>,
                link: "https://t.me/MariaLaps"
        },
        {
                id: "gmail",
                text: "mariaspiiish@gmail.com",
                icon: <FontAwesomeIcon icon={faEnvelope} style={{fontSize: "20px",  marginTop: "2.5px", color: "#24292f"}}/>,
        },
]

const yandex = new URL(`../assets/yandex.jpg`, import.meta.url).href;
const ielts = new URL(`../assets/ielts.jpg`, import.meta.url).href;
const cs50 = new URL(`../assets/CS50x.png`, import.meta.url).href;
const college = new URL(`../assets/education.jpg`, import.meta.url).href;

export const slides = [cs50, yandex, college, ielts];

