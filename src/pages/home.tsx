import React from 'react';
import Nav from '../components/nav';
import Hero from './parts/hero';
import Offer from './parts/offer';
import Footer from './parts/footer';
import Portfolio from './parts/portfolio';
import About from './parts/about';

export default class Home extends React.Component {
    render() {
        return (
            <>
                <Nav />
                <Hero />
                <About />
                <Offer />
                <Portfolio />
                <Footer />
            </>
        );
    }
}
