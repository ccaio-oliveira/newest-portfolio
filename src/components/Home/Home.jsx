import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import { HomeContainer, ProfileImage, Title } from './Home.styles';

const HomeComponent = ({ lang }) => {

    return(
        <HomeContainer>
            <ProfileImage src="/images/perfil.jpg" alt="Profile Image" />
            <Title>
                {lang === 'en' ? (
                    <>
                        Hi, I'm Caio Oliveira
                    </>
                ) : (
                    <>
                        <>Olá, eu sou Caio Oliveira</>
                    </>
                )}
            </Title>
        </HomeContainer>
    )
}

HomeComponent.propTypes = {
    lang: PropTypes.string.isRequired
}

export default HomeComponent;