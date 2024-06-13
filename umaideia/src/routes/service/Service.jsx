import React from 'react'
import Hero from '../../components/hero/Hero'
import serviceImg from '../../assets/imgs/night.jpg'

const Service = () => {
  return (
    <div>
      <Hero
        cName='hero mid'
        heroImg={serviceImg}
        title='Sobre nós'
      />
    </div>
  )
}

export default Service