import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';

function Header() {
  
  return (
      <header>
      <div className="jumbotron text-white" id="header">
        <div className='shadowholder'></div>
        <div className="container" style={{opacity: '.9'}}>
          <div className="pt-5 text-center row justify-content-center">
            <h1 className="text-uppercase textShadowwed display-3 shadow-lg wow bounceIn animated" data-wow-delay=".40s">
              Hami Berkay Aktaş
            </h1>
            <h4 className="textShadowwed wow bounceIn animated " data-wow-delay=".50s" >Frontend Developer</h4>
            <p className="text-center textShadowwed col-md-6 wow bounceIn animated " data-wow-delay=".60s" >
              Akılda kalıcı tasarım. Kolay kullanılabilir web site arayüzleri üzerine tecrübem ile birlikte halinizdeki web sitesini tasarlıyorum.</p>
              <Player
                  autoplay
                  loop
                  src="https://assets2.lottiefiles.com/packages/lf20_xfge4p6p.json"
                  style={{ height: '100px', width: '100px' }}>
              </Player>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header