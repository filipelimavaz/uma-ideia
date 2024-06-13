import React from 'react'
import Hero from '../../components/hero/Hero'
import heroImg from '../../assets/imgs/1.jpg'
import InfoContainer from '../../components/containers/info/InfoContainer'
import CardContainer from '../../components/containers/card/CardContainer'
import Carousel from '../../components/carousel/Carousel'

import infoImg1 from '../../assets/imgs/2.jpg'
import infoImg2 from '../../assets/imgs/3.jpg'
import infoImg3 from '../../assets/imgs/1.jpg'

const Home = () => {
  const sliderImages = [infoImg1, infoImg2, infoImg3]
  const sliderTexts = ['no design', 'na fotografia', 'no audiovisual']

  return (
    <div>
      <Carousel images={sliderImages} title={'Uma ideia'} sliderTexts={sliderTexts}></Carousel>

      <CardContainer />

      <InfoContainer
        sessionTitle='Nossa história'
        sessionText='Conheça um pouquinho sobre a gente'
        cName='info-content'
        textTitle='Pirpirituba, PB'
        textContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        img1={infoImg1}
        img2={infoImg2}
        url='/sobre'
        buttonText='Saiba mais'
        buttonIcon='fa-solid fa-arrow-pointer'
      />
    </div>
  )
}

export default Home