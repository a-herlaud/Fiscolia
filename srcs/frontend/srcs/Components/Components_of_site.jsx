import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { handleLogout } from '../pages/Utils/Logout.jsx'
import '../index.css'
import './Components_of_site.css'
import logo from '../assets/logo.png'
import github_logo from '../assets/github_logo.png'


export const Header = ({ isAuthenticated, setIsAuthenticated }) => {

    return (
        <header className="header-style">
            
            <Logo />
            <Menu
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated} />

        </header>
    )

}
export default Header;

export function Logo () {

    const location = useLocation();
    const navigate = useNavigate();
    const isHomePage = location.pathname === "/";

    return (
        <Link to="/" className="link-logo">
            <img
                src={logo}
                alt="logo"
                key={ location.pathname }
                className={ isHomePage ? "header-logo-animated" : "header-logo"}
            />
        </Link>
    )

}

export function Menu({ isAuthenticated, setIsAuthenticated }) {
    
    const [isOpen, setIsOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState( false );
    const navigate = useNavigate();
    const withClose = (fn) => () => { fn(); setIsOpen(false); };

    const guestOptions = [
        { label: "Accueil", action: withClose(() => navigate( "/" )) },
        { label: "Se connecter", action: withClose(() => navigate( "/login" )) },
        { label: "S'inscrire", action: withClose(() => navigate( "/register" )) },
    ];

    const userOptions = [
        { label: "Accueil", action: withClose(() => navigate( "/" )) },
        { label: "Chatbot", action: withClose(() => navigate( "/chatbot" )) },
        { label: "Mon profil", action: withClose(() => navigate( "/session" )) },
        { label: "Se déconnecter", action: withClose(() => handleLogout( navigate, setIsAuthenticated)) },
    ];

    const options = isAuthenticated ? userOptions : guestOptions;

    return (

        <div className="dropdown-container">
            <button
                className="dropdown-button"
                onClick={() => setIsOpen(!isOpen)}
            >
                Menu
                <ChevronDown
                  size={18}
                  className={`arrow ${isOpen ? "rotate" : ""}`}
                />
            </button>

            <div className={`dropdown-menu ${isOpen ? "open" : ""}`}>
              {options.map((item) => (
                <div
                    key={item.label}
                    className={`dropdown-item ${item.label === "Se déconnecter" ? "menu-button-logout" : ""}`}
                    onClick={item.action}
                >
                  {item.label}
                </div>
              ))}
            </div>
        </div>
  );
}

export const Form = ({ title, handleSubmit, children }) => {
  return (

    <div className="center-body-style">
       <form className="form" onSubmit={handleSubmit}>
         
         <h3>{title}</h3>
         { children }
         
         <div style={{ width: "100%" }}>
           <Link style={{ width: "100%", display: "block" }} to="/">
             <button>Retour à la page d'accueil</button>
           </Link>
         </div>

       </form>
    </div>

  )
}

export const AddButton = ({ title }) => {
    return (

	    <div className="button-wrapper" >
            <button type="submit">{ title }</button>
        </div>

    )
}

export const Footer = () => {
    
    return (
        <footer className="footer-style" >
            
            <TermsAndPolicies page="/privacy_policy" title="Politique de confidentialité" />
            <GithubLogo />
            <TermsAndPolicies page="/terms_of_service" title="Contiditions d'utilisation" />
            
        </footer>
    )

}

export function GithubLogo () {
    return (
            <a
                href="https://github.com/a-herlaud/Fiscolia"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img 
                    src={github_logo} 
                    alt="github logo"
                    className="github-logo"
                />
            </a>
    )
}

export function TermsAndPolicies ({ page, title }) {
    return (

         <Link to={ page } className="terms-and-policies">
                <p>{ title }</p>
        </Link>

    )
}