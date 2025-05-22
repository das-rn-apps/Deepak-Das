// File: src/pages/Home.tsx
import Hero from '../components/sections/Hero';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import Experience from '../components/sections/Experience';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';

const Home = () => {
    return (
        <>
            <Hero />
            <Skills />
            <Projects />
            <Experience />
            <Testimonials />
            <Contact />
        </>
    );
};

export default Home;
