import React, { useState } from 'react';
import styled from 'styled-components/macro';

import CardProfile from './components/CardProfile/CardProfile';
import CardStats from './components/CardStats/CardStats';
import Footer from './components/Footer/Footer';

import Dataset from './data.json';

import { getData } from './utils/getData';

const Container = styled.main`
    display: grid;
    place-items: center;
    padding: 5rem 0;

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 1.875rem;
        padding: 0;
    }
`;

const CardStatsContainer = styled.div`
    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        /* background-color: yellow; */
        display: flex;
        flex-wrap: wrap;
        column-gap: 1.25rem;
        row-gap: 1.875rem;
        width: 51.25rem;
        height: 32.5rem;
    }
`;

function App() {
    const [period, setPeriod] = useState('weekly');
    let selectedPeriodData = [];

    getData(period, Dataset, selectedPeriodData);

    return (
        <Container>
            <CardProfile setPeriod={setPeriod} />
            <CardStatsContainer>
                {selectedPeriodData.map((data) => {
                    return (
                        <CardStats
                            key={data.title}
                            title={data.title}
                            current={data.timeframes.current}
                            previous={data.timeframes.previous}
                            color={data.color}
                        />
                    );
                })}
            </CardStatsContainer>
            <Footer />
        </Container>
    );
}

export default App;
