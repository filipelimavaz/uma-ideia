import React from 'react'
import InfoContainer from '../../components/containers/info/InfoContainer'
import CardContainer from '../../components/containers/card/CardContainer'
import Carousel from '../../components/carousel/Carousel'

import './HomeStyles.css'
import Button from '../../components/button/Button'

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

      <div className='portfolio-container'>
        <h2>Porfólio</h2>
        <p>Vem conferir nossos trabalhos</p>

        <div className='switch-container'>
          <h3>Fotografia</h3>
          <label className="switch">
          <input type="checkbox"/>
          <span class="slider round"></span>
          </label>
          <h3>Design Gráfico</h3>
        </div>

        <div className='items-container'>
          <div className='image-card'>
            <img src={infoImg1}></img>
          </div>
          <div className='image-card'>
            <img src={infoImg2}></img>
          </div>
          <div className='image-card'>
            <img src={infoImg3}></img>
          </div>
          <div className='image-card'>
            <img src={infoImg3}></img>
          </div>
          <div className='image-card'>
            <img src={infoImg1}></img>
          </div>
          <div className='image-card'>
            <img src={infoImg2}></img>
          </div>
          <div className='image-card'>
            <img src={infoImg2}></img>
          </div>
          <div className='image-card'>
            <img src={infoImg3}></img>
          </div>
          <div className='image-card'>
            <img src={infoImg1}></img>
          </div>
        </div>

        <h4>Quer ver mais?</h4>
        <p> Você pode entrar em nosso perfil do Instagram ou fazer o download dos nossos portfólios</p>

        <div className='portfolio-buttons'>
          <Button
            url='https://www.instagram.com/umaideia_/'
            buttonCName='button info'
            buttonText='Instagram'
            buttonIcon='fa-brands fa-instagram'
          />
          <Button
            url='https://drive.google.com/file/d/1qcwyzBHfiwThV8Rrab_snGLDbnc5m5Tf/view'
            buttonCName='button info'
            buttonText='Fotografia'
            buttonIcon='fa-solid fa-file-pdf'
          />
          <Button
            url='https://drive.google.com/file/d/116nokkI0gI1fz34uTLcUdMDmwXHhVqK_/view'
            buttonCName='button info'
            buttonText='Design Gráfico'
            buttonIcon='fa-solid fa-file-pdf'
          />
        </div>
      </div>
    </div>
  )
}

export default Home