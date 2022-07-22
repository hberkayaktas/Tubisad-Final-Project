import React from 'react'

function Footer() {
      return (
            <footer className="text-center text-lg-start" id="special_contact">
                  {/* footer-start */}
                  {/* footer-tab-1 start */}
                 
                  {/* footer-tab-1 end */}
                  {/* footer-tab-2 start */}
                  <section id="section_footer_2">
                        <div className="container text-center text-md-start mt-5 pt-3">
                              <div className="row mt-4 shadow-lg">
                                    {/* medium device:4 
              large device :3
              xlarge device :4 */}
                                    {/* left-1 */}
                                    <div className="col-md-3 col-lg-4 col-xl-3 bg-light text-dark rounded-start p-3 mx-auto">
                                          <h6 className="text-uppercase mb-4">
                                                <i style={{ fontSize: '2rem', marginRight: '.3rem' }} className="fa-brands fa-avianex" /> Company
                                                INC.
                                          </h6>
                                          <p style={{ textAlign: 'left!important' }} className="line_clamp3">
                                                Akılda kalıcı tasarım. Kolay kullanılabilir web site arayüzleri üzerine  tecrübeli developer ekibi ile birlikte halinizdeki web sitesini tasarlıyoruz.   
                                          </p>
                                    </div>
                                    {/* left-2 */}
                                    <div className="col-md-3 col-lg-4 col-xl-3 border-start bg-light text-dark  mx-auto p-3 pt-4">
                                          <h6 className="text-uppercase mb-3">FrontEnd</h6>
                                          <p><a href="#!" className="text-reset">Html5</a></p>
                                          <p><a href="#!" className="text-reset">CSS3</a></p>
                                          <p><a href="#!" className="text-reset">JS</a></p>
                                          <p><a href="#!" className="text-reset">React</a></p>
                                    </div>
                                    {/* left-3 */}
                                    <div className="col-md-2 col-lg-4 border-start col-xl-2 bg-light text-dark   p-3 pt-4  mx-auto">
                                          <h6 className="text-uppercase mb-3">Backend</h6>
                                          <p><a href="#!" className="text-reset">Node JS</a></p>
                                          <p><a href="#!" className="text-reset">Php</a></p>
                                          <p><a href="#!" className="text-reset">Python</a></p>
                                    </div>
                                    {/* left-4 */}
                                    <div className="col-md-4 col-lg-4 col-xl-4 border-start  bg-light text-dark pt-3 rounded-end mx-auto" id="address_id">
                                          <h6 className="text-uppercase mb-3">Contact</h6>
                                          <p><i className="fa-solid fa-earth-africa" /><span>Turkey</span> </p>
                                          <p><i className="fa-solid fa-envelope-open-text" />
                                                <a href="mailto:hamitmizrak@gmail.com">hberkayaktas@gmail.com</a>
                                          </p>
                                          <p><i className="fa-solid fa-mobile-retro" />
                                                <a href="tel:90111223344">90 111 22 33 44</a>
                                          </p>
                                          <p><i className="fa-solid fa-mobile-retro" />
                                                <a href="tel:90111223344">90 111 22 33 44</a>
                                          </p>
                                    </div>
                              </div>
                        </div>
                  </section>
                  {/* footer-tab-2 end */}
                  {/* CopyRight */}
                 
                  {/* footer-end */}
                  <section  className="py-1 d-flex justify-content-center justify-content-lg-between">
                        <div className="me-5 d-none d-lg-block">
                        © 2022 Copyright
                        <a href="https://www.hberkayaktas.tk"> Hami Berkay Aktaş</a>
                        </div>
                        {/* social */}
                        <div id="social_id">
                              <a href="https://www.linkedin.com/in/hberkayaktas/" className="me-1 btn btn-outline-primary text-reset btn-floating">
                                    <i className="fa-brands fa-linkedin" />
                              </a>
                              <a href="https://www.instagram.com/hberkayaktas/" className="me-1 btn btn-outline-warning text-reset btn-floating">
                                    <i className="fa-brands fa-instagram-square" />
                              </a>
                              <a href="#!" className="me-1 btn btn-outline-success text-reset btn-floating">
                                    <i className="fa-brands fa-telegram" />
                              </a> <a href="#!" className="me-1 btn btn-outline-info text-reset btn-floating">
                                    <i className="fa-brands fa-google" />
                              </a> <a href="https://github.com/hberkayaktas" className="me-1 btn btn-outline-danger text-reset btn-floating">
                                    <i className="fa-brands fa-github" />
                              </a>
                        </div>
                  </section>
            </footer>

      )
}

export default Footer