import React from 'react';
import styled from 'styled-components/macro';

import IconEllipsis from '../../images/icon-ellipsis.svg';
import WorkIcon from '../../images/icon-work.svg';
import PlayIcon from '../../images/icon-play.svg';
import StudyIcon from '../../images/icon-study.svg';
import ExerciseIcon from '../../images/icon-exercise.svg';
import SocialIcon from '../../images/icon-social.svg';
import SelfCareIcon from '../../images/icon-self-care.svg';

const Container = styled.div`
    background-color: ${(props) => props.color};
    background-image: url(${(props) => props.icon});
    background-repeat: no-repeat;
    background-position-x: 95%;
    background-position-y: -0.625rem;
    width: 20.3125rem;
    height: 10rem;
    border-radius: 0.9375rem;
    margin-top: 1.5625rem;
    position: relative;

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        width: 15.9375rem;
        height: 15.3125rem;
        margin-top: 0;
    }
`;

const Content = styled.div`
    background-color: ${(props) => props.theme.colors.darkBlue};
    width: 100%;
    height: 7.5rem;
    border-radius: 0.9375rem;
    position: absolute;
    bottom: 0;
    padding: 1.875rem 1.5625rem;
    display: grid;
    justify-content: space-between;
    grid-template-areas:
        'title ellipsis'
        'hours lastperiod';
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        height: 12.5rem;
        grid-template-areas:
            'title ellipsis'
            'hours .'
            'lastperiod .';

        grid-template-columns: 1fr 0.1fr;
        grid-template-rows: 0.1fr 1fr 1fr;
        transition: all ease 0.2s;

        :hover {
            background-color: ${(props) => props.theme.colors.desaturatedBlue};
            cursor: pointer;
        }
    }
`;

const Title = styled.p`
    grid-area: title;
    font-size: 1.125rem;
    font-weight: ${(props) => props.theme.fontWeights.medium};

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        align-self: center;
    }
`;

const Hours = styled.p`
    grid-area: hours;
    font-size: 1.875rem;
    font-weight: ${(props) => props.theme.fontWeights.light};

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        color: white;
        font-size: 3rem;
        margin-top: 1.5625rem;
    }
`;

const Ellipsis = styled.img`
    grid-area: ellipsis;
    align-self: center;
    justify-self: end;

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        align-self: center;
    }
`;

const LastPeriod = styled.p`
    color: ${(props) => props.theme.colors.paleBlue};
    grid-area: lastperiod;
    align-self: center;
    justify-self: end;
    font-size: 0.875rem;

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        justify-self: start;
    }
`;

const CardStats = (props) => {
    let icon;
    switch (props.title) {
        case 'Work':
            icon = WorkIcon;
            break;
        case 'Play':
            icon = PlayIcon;
            break;
        case 'Study':
            icon = StudyIcon;
            break;
        case 'Exercise':
            icon = ExerciseIcon;
            break;
        case 'Social':
            icon = SocialIcon;
            break;
        case 'Self Care':
            icon = SelfCareIcon;
            break;
        default:
            break;
    }
    return (
        <Container color={props.color} icon={icon}>
            <Content>
                <Title>{props.title}</Title>
                <Hours>{props.current}hrs</Hours>
                <Ellipsis src={IconEllipsis} alt='Ellipsis' />
                <LastPeriod>Last Week - {props.previous}hrs</LastPeriod>
            </Content>
        </Container>
    );
};

export default CardStats;
