import React from 'react'
import './FooterStyles.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <div>
          <h1>Uma Ideia</h1>
          <p>A ideia certa que faz a diferença!</p>
        </div>
        <div>
          <a href='https://www.instagram.com/umaideia_/'><i className='fa-brands fa-square-instagram'></i></a>
          <a href='https://www.facebook.com/umaideiaagencia/'><i className='fa-brands fa-square-facebook'></i></a>
          <a href='/'><i className='fa-brands fa-linkedin'></i></a>
          <a href='https://api.whatsapp.com/send?phone=5583986264672&text=Ol%C3%A1,%20Ag%C3%AAncia%20Uma%20Ideia'><i className='fa-brands fa-square-whatsapp'></i></a>
        </div>
      </div>
      <div className='bottom'>
        <div>
          <h4>Project</h4>
          <a href="./">Changelog</a>
          <a href="./">Status</a>
          <a href="./">License</a>
          <a href="./">All Versions</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="./">GitHub</a>
          <a href="./">Issues</a>
          <a href="./">Project</a>
          <a href="./">Twitter</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="./">Support</a>
          <a href="./">Troubleshooting</a>
          <a href="./">Contact Us</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="./">Terms of Service</a>
          <a href="./">Privacy Policy</a>
          <a href="./">License</a>
        </div>
      </div>
      <p>© Copyright 2024 – Todos os direitos reservados: Agência Uma Ideia</p>
    </div>
  )
}

export default Footer