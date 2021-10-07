import React from 'react';
import styled from 'styled-components/macro';

import Header from './CardProfileHeader';

const Container = styled.div`
    background-color: ${(props) => props.theme.colors.darkBlue};
    width: 20.3125rem;
    height: 12.5rem;
    border-radius: 0.9375rem;

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        width: 15rem;
        height: 32.5rem;
        /* align-self: stretch; */
    }
`;

const Periodicity = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4.375rem;
    padding: 0 2.1875rem;

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
        height: 10rem;
        padding: 0.9375rem 1.875rem;
    }
`;

const PeriodOption = styled.input.attrs({
    type: 'radio',
})`
    visibility: hidden;
    height: 0;
    width: 0;
`;

const Label = styled.label`
    color: ${(props) => props.theme.colors.desaturatedBlue};
    transition: all ease 0.2s;

    :hover {
        cursor: pointer;
        color: ${(props) => props.theme.colors.paleBlue};
    }

    ${PeriodOption}:checked + && {
        color: ${(props) => props.theme.colors.paleBlue};
    }
`;

const CardProfile = ({ setPeriod }) => {
    const onClick = (e) => {
        setPeriod(e.target.id);
        e.target.setAttribute('selected', true);
    };

    return (
        <Container>
            <Header />
            <Periodicity>
                <PeriodOption
                    type='radio'
                    name='period'
                    id='daily'
                    value='daily'
                    onClick={onClick}
                />
                <Label htmlFor='daily'>Daily</Label>
                <PeriodOption
                    type='radio'
                    name='period'
                    id='weekly'
                    value='weekly'
                    onClick={onClick}
                    defaultChecked
                />
                <Label htmlFor='weekly'>Weekly</Label>
                <PeriodOption
                    type='radio'
                    name='period'
                    id='monthly'
                    value='monthly'
                    onClick={onClick}
                />
                <Label htmlFor='monthly'>Monthly</Label>
            </Periodicity>
        </Container>
    );
};

export default CardProfile;
