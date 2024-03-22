import { PropTypes } from 'prop-types';
import { useEffect } from 'react';
import { Container, ContentContainer } from '../../global.styles';
import Navbar from '../../components/Navbar/Navbar';
import HomeComponent from '../../components/Home/Home';

const HomePage = ({ lang }) => {

    useEffect(() => {
        document.title = lang === 'en' ? 'Home' : 'Início';
    }, [lang]);

    return(
        <Container>
            <Navbar lang={lang} currentPage='home' />
            <ContentContainer>
                <HomeComponent lang={lang} />
            </ContentContainer>
        </Container>
    )
}

HomePage.propTypes = {
    lang: PropTypes.string.isRequired
}

export default HomePage;