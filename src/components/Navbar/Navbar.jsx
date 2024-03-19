import { useEffect, useState } from "react"
import { Header, NavComponent, NavLink, NavLinks, NavTitle, NavTitleLink, NavTitleSpan } from "./Navbar.styles"
import PropTypes from 'prop-types'

const Navbar = ({ lang }) => {
    const [linkHome, setLinkHome] = useState('/');
    const [linkAbout, setLinkAbout] = useState('About me');
    const [linkProjects, setLinkProjects] = useState('Projects');
    const [linkSkills, setLinkSkills] = useState('Skills');
    const [linkContact, setLinkContact] = useState('Contact');
    const [language, setLanguage] = useState('PT');

    const handleLanguage = () => {
        if (lang === 'en') {
            setLinkHome('/');
            setLinkAbout('About me');
            setLinkProjects('Projects');
            setLinkSkills('Skills');
            setLinkContact('Contact');
            setLanguage('PT');
        } 
        
        if (lang === 'pt') {
            setLinkHome('/pt');
            setLinkAbout('Sobre mim');
            setLinkProjects('Projetos');
            setLinkSkills('Habilidades');
            setLinkContact('Contato');
            setLanguage('EN');
        }
    
    }

    useEffect(() => {
        handleLanguage()
    }, [lang]);

    return (
        <Header>
            <NavComponent>
                <NavTitle>
                    <NavTitleLink to={linkHome}>
                        Caio <NavTitleSpan>Oliveira</NavTitleSpan>
                    </NavTitleLink>
                </NavTitle>

                <NavLinks>
                    <NavLink to={lang === 'en' ? 'about' : '/pt/sobre'}>
                        {linkAbout}
                    </NavLink>
                    <NavLink to={lang === 'en' ? 'projects' : '/pt/projetos'}>
                        {linkProjects}
                    </NavLink>
                    <NavLink to={lang === 'en' ? 'skills' : '/pt/habilidades'}>
                        {linkSkills}
                    </NavLink>
                    <NavLink to={lang === 'en' ? 'contact' : '/pt/contato'}>
                        {linkContact}
                    </NavLink>
                    <NavLink to={lang === 'en' ? '/pt' : '/'}>
                        {language}
                    </NavLink>
                </NavLinks>
            </NavComponent>
        </Header>
    )
}

Navbar.propTypes = {
    lang: PropTypes.string.isRequired,
    changeLanguage: PropTypes.func
}

export default Navbar;