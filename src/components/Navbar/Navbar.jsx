import { useEffect, useState } from "react"
import { Header, NavComponent, NavLink, NavLinks, NavTitle, NavTitleLink, NavTitleSpan } from "./Navbar.styles"
import PropTypes from 'prop-types'

const Navbar = ({ lang }) => {
    const [linkHome, setLinkHome] = useState('/');
    const [linkAbout, setLinkAbout] = useState('About me');
    const [linkProjects, setLinkProjects] = useState('Projects');
    const [linkSkills, setLinkSkills] = useState('Skills');
    const [linkContact, setLinkContact] = useState('Contact');

    const handleLanguage = () => {
        if (lang === 'en') {
            setLinkHome('/');
            setLinkAbout('About me');
            setLinkProjects('Projects');
            setLinkSkills('Skills');
            setLinkContact('Contact');
        } 
        
        if (lang === 'pt') {
            setLinkHome('/pt');
            setLinkAbout('Sobre mim');
            setLinkProjects('Projetos');
            setLinkSkills('Habilidades');
            setLinkContact('Contato');
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
                    <NavLink to={'/about'}>
                        {linkAbout}
                    </NavLink>
                    <NavLink to={'/projects'}>
                        {linkProjects}
                    </NavLink>
                    <NavLink to={'/skills'}>
                        {linkSkills}
                    </NavLink>
                    <NavLink to={'/contact'}>
                        {linkContact}
                    </NavLink>
                </NavLinks>
            </NavComponent>
        </Header>
    )
}

Navbar.propTypes = {
    lang: PropTypes.string.isRequired
}

export default Navbar;