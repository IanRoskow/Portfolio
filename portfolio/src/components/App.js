import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import '../assets/css/App.css';

const App = () => {
    return (
        <div className="app">
            <Header/>
            <Hero/>
            <About/>
            <Projects/>
            <Contact/>
        </div>
    );
}

export default App;