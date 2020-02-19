import React from 'react';
import Nav from '../components/nav';
import Hero from './parts/hero';
import Offer from './parts/offer';

export default class Home extends React.Component {
    render() {
        return (
            <>
                <Nav />
                <Hero />
                <Offer />
            </>
        );
    }
}
