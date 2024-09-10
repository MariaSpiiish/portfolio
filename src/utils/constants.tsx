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
        id: string
}[]

export const videoData: VideoData = [
        {
               title: "Let's Talk - приложение для практики английского",
               date: "08/2024",
               url: new URL(`../assets/videos/lets-talk.mp4`, import.meta.url).href,
               link: "https://mariaspiiish.github.io/lets-talk",
               id: "letstalk"
        },
        {
                title: "Лендинг",
                date: "06/2024",
                url: new URL(`../assets/videos/landing.mp4`, import.meta.url).href,
                link: "https://mariaspiiish.github.io/landing/",
                id: "landing"
        },
        {
                title: "Fastnotify",
                date: "02/2023 - 08/2023",
                url: new URL(`../assets/videos/fastnotify.mp4`, import.meta.url).href,
                id: "fastnotify"
        },
        {
                title: "Дипломный проект ЯндексПрактикум",
                date: "11/2022",
                url: new URL(`../assets/videos/movies.mp4`, import.meta.url).href,
                id: "yandex"
        },
]

type ProjectData = {
        id: string;
        content: string;
}[]

export const projectData: ProjectData = [
        {
                id: "letstalk",
                content:"Веб-приложение, которое поможет любителям английского языка улучшить свои разговорные навыки.\n Проект представляет собой SPA, разработанное с использованием библиотеки React, написанное на TypeScript, с анимацией CSS и библиотекой анимации GSAP. \n Проект также включает в себя складной компонент «аккордеон», компонент Modal и компонент Tip из библиотеки AntDesign для обеспечения удобного пользовательского интерфейса. \n Семантический HTML используется во всем приложении для повышения доступности и улучшения общей структуры контента. \n Приложение полностью адаптивно и адаптировано для использования на настольных компьютерах, планшетах и ​​мобильных устройствах."
        },
        {
                id: "landing",
                content: "Лендинг на React JS с адаптивным дизайном и модальными окнами.\n Адаптивный лендинг, обеспечивающий корректное отображение на различных устройствах.\n Раздел «Сервис» был реализован без сторонних библиотек. \n Для улучшения производительности минимизированы повторные рендеры компонентов. При наведении на карточки верстка остается стабильной, а дополнительная информация загружается через модальное окно при нажатии на «Подробнее», используя jsonplaceholder API."
        },
        {
                id: "fastnotify",
                content: "Интерфейс валидации рабочих часов сотрудников на React JS.\n Реализовано отображение сводной таблицы с данными о сотрудниках, рабочем времени, отпусках, сверхурочных и других параметрах.\n Взаимодействие с API настроено для получения и отображения данных о сотрудниках и их рабочем времени.\n Внедрены функции фильтрации и поиска по имени или проекту, что улучшило навигацию и поиск необходимой информации для пользователей."
        },
        {
                id: "yandex",
                content: "Дипломный проект курса по веб-разработке.\n Проект представляет собой одностраничное React приложение с функционалом регистрации и авторизации пользователя.\n Верстка по макету на Figma."
        }
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

