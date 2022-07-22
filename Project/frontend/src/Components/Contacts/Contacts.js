import React from 'react'

function Contacts() {
      return (
            <section className="bg-dark p-3">
                  {/* Contatct Start */}
                  <div className="container">
                        <p className="fw-bold text-center text-white fs-1">Contact</p>
                        <div className="row bg-light  rounded">
                              <div className="col-md-6 p-3 wow fadeInUp animated" data-wow-delay=".30s">
                                    <div className="mb-3">
                                          <div className="row">
                                                <div className="col-md-6"><label htmlFor="exampleFormControlInput1" className="form-label">Adı</label>
                                                      <input type="text" name="name" className="form-control col" id="exampleFormControlInput1" placeholder="Adınız" /></div>
                                                <div className="col-md-6">
                                                      <label htmlFor="exampleFormControlInput3" className="form-label">Soyadı</label>
                                                      <input type="email" className="form-control col" id="exampleFormControlInput3" placeholder="Soyadınız" />
                                                </div>
                                          </div>
                                    </div>
                                    <div className="mb-3">
                                          <div className="row">
                                                <div className="col-md-8"><label htmlFor="exampleFormControlInput2" className="form-label">Email addresiniz</label>
                                                      <input type="email" className="form-control col" id="exampleFormControlInput2" placeholder="name@example.com" /></div>
                                                <div className="col-md-4">
                                                      <label htmlFor="exampleFormControlInput4" className="form-label">Telephone</label>
                                                      <input type="email" className="form-control col" id="exampleFormControlInput4" placeholder="name@example.com" />
                                                </div>
                                          </div>
                                    </div>
                                    <div className="mb-3">
                                          <label htmlFor="exampleFormControlTextarea1" className="form-label">Adresiniz</label>
                                          <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                                    </div>
                                    <button type="button" className="btn btn-success">Gönder</button>
                                    <button type="reset" className="ms-1 btn btn-danger">Temizle</button>
                              </div>
                              <div className="col-md-6 p-2 wow fadeInUp animated" data-wow-delay=".50s">
                                    <iframe title='maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7099103.14016396!2d28.413505272018!3d29.68037103577679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584f7de239bbcd%3A0xca7474355a6e368b!2sGize%20Nekropol%C3%BC!5e0!3m2!1str!2str!4v1655915140277!5m2!1str!2str" width="100%" height="100%" className="rounded" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                              </div>
                        </div>
                  </div>
                  {/* Contatct ends */}
            </section>

      )
}

export default Contacts