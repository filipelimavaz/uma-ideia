import React from 'react'
import Hero from '../../components/hero/Hero'
import heroImg from '../../assets/imgs/1.jpg'
import InfoContainer from '../../components/containers/info/InfoContainer'
import CardContainer from '../../components/containers/card/CardContainer'

import infoImg1 from '../../assets/imgs/1.jpg'
import infoImg2 from '../../assets/imgs/2.jpg'

const Home = () => {
  return (
    <div>
      <Hero
        cName='hero'
        heroImg={heroImg}
        title='Your Journey Your Story'
        text='Choose your favorite destination'
        url='https://api.whatsapp.com/send?phone=5583986264672&text=Ol%C3%A1,%20Ag%C3%AAncia%20Uma%20Ideia'
        buttonClass='show'
        buttonText='Fale conosco'
        buttonIcon='fa-brands fa-whatsapp'
      />

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
      
      <InfoContainer
        cName='info-content left'
        textTitle='Pirpirituba, PB'
        textContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        img1={infoImg1}
        img2={infoImg2}
      />
    </div>
  )
}

export default Home