import React from 'react'
import OurWorkCard from './OurWorkCard'

function OurWork() {
  return (
      <section className=" bg-dark">
      <div className="row m-0 justify-content-center">
        <div className="col-md-9 pt-3">
          <p className="text-center fw-bold text-light">Şimdiye kadarki çalışmalarımdan bilgiler</p>
          <div className="row justify-content-center">
            <OurWorkCard title="Saat Çalışma" count="522" icon="fa-solid fa-clock"/>
            <OurWorkCard title="Bardak Kahve" count="888" icon="fa-solid fa-mug-saucer"/>
            <OurWorkCard title="Başarım" count="11" icon="fa-solid fa-trophy"/>
            <OurWorkCard title="Satır kod" count="55664" icon="fa-solid fa-code"/>
            <OurWorkCard title="Dünya Çapında Müşteri" count="133" icon="fa-solid fa-earth-americas"/>
            <OurWorkCard title="Tamamlanan Proje" count="77" icon="fa-solid fa-rocket"/>
          </div>
        </div>
      </div>
    </section>
    
  )
}

export default OurWork