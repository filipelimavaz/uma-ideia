import React from 'react'
import Hero from '../../components/hero/Hero'
import aboutImg from '../../assets/imgs/3.jpg'

const About = () => {
  return (
    <div>
      <Hero 
        cName='hero mid'
        heroImg={aboutImg}
        title='Sobre nós'
      />
    </div>
  )
}

export default About