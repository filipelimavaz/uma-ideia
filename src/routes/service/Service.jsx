import './ServiceStyles.css'
import React from 'react'
import Hero from '../../components/hero/Hero'
import serviceImg from '../../assets/imgs/night.jpg'
import Button from '../../components/button/Button'
import Footer from '../../components/footer/Footer'

const Service = () => {
  return (
    <div>
      <Hero
        cName='hero mid'
        heroImg={serviceImg}
        title='Serviços'
      />

      <div className='service-container'>
        <h2>Nossos Serviços</h2>
        <p>Conheça os nossos serviços</p>

        <div className='service-info-card-container'>
          <div className='service-info-card'>
            <i className='fa-solid fa-camera'></i>
            <h3>Fotografia</h3>
            <ul>
              <li>Casamentos</li>
              <li>Eventos</li>
              <li>Aniversários</li>
              <li>Batizados</li>
              <li>Ensaio no estúdio</li>
              <li>Ensaio em ambientes externos</li>
            </ul>
          </div>
          <div className='service-info-card'>
            <i className='fa-solid fa-video'></i>
            <h3>Audiovisual</h3>
            <ul>
              <li>Gravação de eventos</li>
              <li>Filmagem de casamento</li>
              <li>Vídeos de aniversários</li>
              <li>Gravação de batizados</li>
              <li>Filmagem no estúdio</li>
              <li>Filmagem em ambientes externos</li>
            </ul>
          </div>
          <div className='service-info-card'>
            <i className='fa-solid fa-wand-magic-sparkles'></i>
            <h3>Design Gráfico</h3>
            <ul>
              <li>Peças de artes gráficas</li>
              <li>Identidade visual</li>
              <li>Gerenciamento de perfil do Instagram</li>
            </ul>
          </div>
        </div>

        <div className='plan-container'>
          <h2>Nossos Planos</h2>
          <p>Oferecemos os melhores planos para com a necessidade do cliente</p>

          <div className='plan-card-container'>
            <div className='plan-card'>
              <h3>Casamento</h3>
              <p>50 fotos digitais</p>
              <p>30 reveladas</p>
              <div class='dash'>
                <span></span>
                <span class='special-line'>OU</span>
                <span></span>
              </div>
              <p>70 fotos digitais</p>
              <p>60 reveladas</p>
            </div>
            <div className='plan-card'>
              <h3>Evento</h3>
              <p>25 fotos digitais</p>
              <p>10 reveladas</p>
              <div class='dash'>
                <span></span>
                <span class='special-line'>OU</span>
                <span></span>
              </div>
              <p>50 fotos digitais</p>
              <p>20 reveladas</p>
            </div>
            <div className='plan-card'>
              <h3>Aniversário</h3>
              <p>25 fotos digitais</p>
              <p>10 reveladas</p>
              <div class='dash'>
                <span></span>
                <span class='special-line'>OU</span>
                <span></span>
              </div>
              <p>50 fotos digitais</p>
              <p>20 reveladas</p>
            </div>
            <div class='plan-card'>
              <h3>Batizado</h3>
              <p>25 fotos digitais</p>
              <p>10 reveladas</p>
              <div class='dash'>
                <span></span>
                <span class='special-line'>OU</span>
                <span></span>
              </div>
              <p>50 fotos digitais</p>
              <p>20 reveladas</p>
            </div>
          </div>
          <div className='plan-card-last'>
            <div className='plan-card'>
              <h3>Ensaios fotográficos</h3>
              <p>Valores a partir de 5 fotos</p>
              <p>Descontos a partir de 10 fotos</p>
              <p>Os valores diferentes para ensaios no estúdio e ensaios externos.</p>
            </div>
          </div>
        </div>

        <p>Quer mais informações? Nosso whatsapp está sempre disponível!</p>
        <Button
          url='./'
          buttonCName='button service'
          buttonText='Fale Conosco'
          buttonIcon='fa-brands fa-whatsapp'
        />
      </div>

      <Footer />
    </div>
  )
}

export default Service