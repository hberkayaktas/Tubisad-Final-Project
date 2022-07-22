import React from 'react'

function MediaList() {
      return (
            <section>
                   <p class="fw-bold text-center text-dark fs-1">Örnekler</p>
                  {/*Section with media list Start*/}
                  <div className="row m-0 justify-content-center mb-5 wow fadeInLeft animated" data-wow-delay=".20s">
                        <div className="col-md-6 p-0">
                              <img className="rounded shadow-lg" src="https://github.com/hberkayaktas/React-Covid19-App/raw/master/public/Screenshot_1.png" width="100%" height="400px" alt='#'/>
                        </div>
                        <div className="col-md-4">
                              <h3>Covid 19 Data tracker App</h3>
                              <p className="m-0">
                                    Api üzerinden Dünya üzerindeki  covid 19 verilerini takip ederek gösteren Data Tracking App. Selector üzerinden spesifik bir ülke seçilebilir ve o ülke ile ilgili verileri çekebiliriz.

                              </p>
                              <p className="m-0 mt-3">Demo <a href='https://covid19-app-berkay.surge.sh/' className='btn btn-success'>Go to app</a></p>
                        </div>
                  </div>
                  <div className="row m-0 justify-content-center wow fadeInRight animated" data-wow-delay=".20s">
                        <div className="col-md-4">
                              <h3>Hava Durumu Uygulaması</h3>
                              <p className="m-0">İllere göre filtreleme yaparak hava durumuna dair bilgi sahibi olabileceğiniz hava durumu uygulaması.</p>
                              <p className="m-0 mt-3">Demo <a href='https://weather-app-berkay.surge.sh/' className='btn btn-success'>Go to app</a></p>
                        </div>
                        <div className="col-md-6 p-0">
                              <img className="rounded shadow-lg" src="https://github.com/hberkayaktas/React-Redux-Weather-App/raw/master/Screenshot_1.png" width="100%" height="500px" alt='#' />
                        </div>
                  </div>
                  {/*Section with media list End*/}
            </section>

      )
}

export default MediaList