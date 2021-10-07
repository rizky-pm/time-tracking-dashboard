import React from 'react';
import styled from 'styled-components/macro';

import ImageJeremy from '../../images/image-jeremy.png';

const Container = styled.div`
    background-color: ${(props) => props.theme.colors.blue};
    width: 100%;
    height: 8.125rem;
    border-radius: 0.9375rem;
    display: grid;
    grid-template-areas:
        'avatar lighttext'
        'avatar name';
    grid-template-columns: 0.2fr 1fr;
    grid-template-rows: 1fr 1fr;
    column-gap: 0.9375rem;
    row-gap: 0.3125rem;
    padding: 1.875rem;

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        column-gap: 0;
        row-gap: 0;
        width: 100%;
        height: 21.875rem;
    }
`;

const ProfilePictureContainer = styled.div`
    grid-area: avatar;
    place-self: center;
    background-image: url(${ImageJeremy});
    background-size: cover;
    border: 0.1875rem solid white;
    width: 4.375rem;
    height: 4.375rem;
    border-radius: 50%;

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        place-self: auto;
    }
`;

const LightText = styled.p`
    grid-area: lighttext;
    font-weight: ${(props) => props.theme.fontWeights.light};
    font-size: 1rem;
    align-self: flex-end;

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        align-self: auto;
        margin-top: 2.5rem;
        font-size: 0.875rem;
    }
`;

const RegularText = styled.p`
    grid-area: name;
    height: 2.1875rem;
    font-size: 1.375rem;

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        font-size: 2rem;
    }
`;

export const Header = () => {
    return (
        <Container>
            <ProfilePictureContainer />
            <LightText>Report For</LightText>
            <RegularText>Jeremy Robson</RegularText>
        </Container>
    );
};

export default Header;
