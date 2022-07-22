import React from 'react'

function Carousel() {
      const height ='450px';
  return (
      <div id="carouselExampleCaptions" className="carousel slide mt-5" data-bs-ride="false">
            <p class="fw-bold text-center text-dark fs-1">Portfolio</p>
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
      </div>
      <div className="carousel-inner">
        <div className='shadowholder'></div>
      
        <div className="carousel-item active">
          <img src="https://images.pexels.com/photos/326058/pexels-photo-326058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" style={{height:height,zIndex:"-4"}} alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5 className='text-center zindex1'>First slide label</h5>
            <p className='text-center textShadowwed'>Some representative placeholder content for the first slide.</p>
          </div>
        </div>

        <div className="carousel-item">
          <img src="https://images.pexels.com/photos/913215/pexels-photo-913215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" style={{height:height}} alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5 className='text-center zindex1'>Second slide label</h5>
            <p className='text-center textShadowwed'>Some representative placeholder content for the second slide.</p>
          </div>
        </div>

        <div className="carousel-item">
          <img src="https://images.pexels.com/photos/1118861/pexels-photo-1118861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" style={{height:height}} alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5 className='text-center'>Third slide label</h5>
            <p className='text-center textShadowwed'>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    
  )
}

export default Carousel