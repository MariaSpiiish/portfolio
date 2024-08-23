import Contacts from "../Contacts/Contacts";


function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div>
          <span className="footer__dash" />
          <Contacts />
        </div>
        
        <p className="footer__copyright">&copy; {date} Mariia Lapshina</p>
      </div>
      
    </footer>
  )
}

export default Footer;