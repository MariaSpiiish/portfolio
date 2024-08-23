import { contactsData } from "../../utils/constants";
import { Typography, Tooltip } from "antd";

const { Text } = Typography;
const text = (text: string) => <Text copyable>{text}</Text>;

const listItem = contactsData.map((item, i) => {
  if (item.id === "gmail")
    return (
    <li key={i} className="contacts__list-item">
      <a className="contacts__link" href={item.link} target="_blank" rel="noopener noreferrer">
        <Tooltip title={text(item.text as string)} color="#f3f3f3" placement="right">
          {item.icon}
        </Tooltip>
      </a>
    </li>
  )
  else if (item.id === "git")
    return (
      <li key={i} className="contacts__list-item">
        <a className="contacts__link" href={item.link} target="_blank" rel="noopener noreferrer">
          <img className="contacts__icon" src={item.icon as string} alt={item.id}/>
        </a>
      </li>
    )
    else
      return (
        <li key={i} className="contacts__list-item">
          <a className="contacts__link" href={item.link} target="_blank" rel="noopener noreferrer">
            {item.icon}
          </a>
        </li>
      )
});

function Contacts() {
  return (
    <section className="contacts" id="contacts">
      <h3 className="contacts__title">Контакты</h3>
      <ul className="contacts__list">
        {listItem}
      </ul>
    </section>
  )
}

export default Contacts;