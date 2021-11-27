import React from 'react'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

import imgAbout from '../images/1.svg'
import imgRegistration from '../images/8.svg'
import imgLocation from '../images/3.svg'
import Services from '../components/Services'
import Footer from '../components/Footer'

const Home = () => {

    const [isOpen, setIsOpen] = React.useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection img={imgAbout} {...homeObjOne}/>
            <InfoSection img={imgLocation} {...homeObjTwo}/>
            <InfoSection img={imgRegistration} {...homeObjThree}/>
            <Services />
            <Footer />
        </>
    )
}

export default Home
