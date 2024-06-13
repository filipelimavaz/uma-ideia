import React from 'react'
import Hero from '../../components/hero/Hero'
import contactImg from '../../assets/imgs/2.jpg'

const Contact = () => {
  return (
    <div>
      <Hero
        cName='hero mid'
        heroImg={contactImg}
        title='Sobre nós'
      />
    </div>
  )
}

export default Contact