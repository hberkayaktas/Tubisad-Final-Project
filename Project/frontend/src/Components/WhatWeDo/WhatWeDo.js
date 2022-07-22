import React from 'react'

function WhatWeDo() {
  return (
      <section className="bg-light">
      <div className="row m-0 justify-content-center">
        <div className="col-md-9 py-3">
          <p className="text-center fw-bold fs-3">Biz ne yapıyoruz? </p>
          <div className="row justify-content-center">

            <div className="col">
              <div className="card border-0  wow fadeInUp animated" data-wow-delay=".20s">
                <div className="card-body text-center">
                  <h5 className="card-title fs-3"><i className="fa-solid fa-leaf" /></h5>
                  <h3 className="fw-bolder">Inovasyon ve Yenilik Anlayışı</h3>
                  <h6 className="card-subtitle mb-2 ">Dünya tasarım trendlerinin takip ediyor buna uygun anlayışla tasarım yapıyoruz.</h6>
                  <p className="card-text text-center"><button type="button" className="btn btn-outline-dark border-2">Read More</button></p>
                </div>
              </div>
            </div>

            <div className="col border-start border-end">
              <div className="card border-0  wow fadeInUp animated" data-wow-delay=".30s">
                <div className="card-body text-center">
                  <h5 className="card-title fs-3"><i className="fa-solid fa-mug-saucer" /></h5>
                  <h3 className="fw-bolder">Kapsamlı ve Geniş Çaplı Proje Anlayışı</h3>
                  <h6 className="card-subtitle mb-2 ">Kod bakımının kolay yapılması için geleceğe dönük mimari ile inşaa edilmiş web siteleri</h6>
                  <p className="card-text text-center"><button type="button" className="btn btn-outline-dark border-2">Read More</button></p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card border-0   wow fadeInUp animated" data-wow-delay=".40s">
                <div className="card-body text-center">
                  <h5 className="card-title  fs-3"><i className="fa-solid fa-table" /></h5>
                  <h3 className="fw-bolder">Kolay Arayüz ve Tasarım  Anlayışı</h3>
                  <h6 className="card-subtitle mb-2 ">Kullanıcı deneyiminin daha iyi olması için gözü yormayan tasarım ve ölçeklendirme.</h6>
                  <p className="card-text text-center"><button type="button" className="btn btn-outline-dark border-2">Read More</button></p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    
  )
}

export default WhatWeDo