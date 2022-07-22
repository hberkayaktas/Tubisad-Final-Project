import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';

function Parallax() {
      return (
            <section>
                  <div className="row m-0">
                        <div className="col m-0 p-0 position-relative">
                              <div className="parallax"></div>
                              <div className="row justify-content-center m-0 py-5 text-light" style={{backgroundColor:'#00000050'}}>
                                    <p className="text-center fw-bold fs-4">You can not cross the sea merely by standing and staring at the water.</p>
                                    <p className="text-center">Kenarında durup bakarak denizi geçemezsin.</p>
                                    <p className="card-text text-center">
                                    <button type="button" className="btn btn-outline-light border-2">Scroll Down
                                          <Player
                                          autoplay
                                          loop
                                          src="https://assets2.lottiefiles.com/packages/lf20_xfge4p6p.json"
                                          style={{ height: '50px', width: '55px' }}>
                                          </Player>
                                    </button>
                                    </p>
                              </div>
                        </div>
                  </div>
            </section>

      )
}

export default Parallax