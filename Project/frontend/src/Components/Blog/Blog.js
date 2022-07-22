import React from 'react'

function Blog() {
      return (
            <section id="blogcard">
                  {/* Blog start */}
                  <div id="bg" />
                  <div className="container">
                        <p className="fw-bold text-center text-light fs-1">Blogs</p>
                        <div className="row">

                                    <div className="col-md-6">
                                          <div className="card mb-3">
                                                <div className="row g-0">
                                                      <div className="col-md-4">
                                                            <img src="https://picsum.photos/200/250?random=10" className="img-fluid rounded-start h-100" alt="..." />
                                                      </div>
                                                      <div className="col-md-8">
                                                            <div className="card-body">
                                                                  <h5 className="card-title">Smart Edu Project</h5>
                                                                  <p className="card-text line_clamp8">Node js ile yapılmış eğitim sitesi scripti burada session kavramı, cookie kavramı bcrypt kavramı öğrenildi</p>
                                                                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                                    
                                    <div className="col-md-6">
                                          <div className="card mb-3">
                                                <div className="row g-0">
                                                      <div className="col-md-4">
                                                            <img src="https://picsum.photos/200/250?random=25" className="img-fluid rounded-start h-100" alt="..." />
                                                      </div>
                                                      <div className="col-md-8">
                                                            <div className="card-body">
                                                                  <h5 className="card-title">Nodejs dersleri</h5>
                                                                  <p className="card-text line_clamp8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere minus ratione molestiae vitae nihil numquam eligendi fugit enim provident mollitia? Magni soluta obcaecati quae</p>
                                                                  <p className="card-text"><small className="text-muted">Last updated 1 day ago</small></p>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>

                                    <div className="col-md-6">
                                          <div className="card mb-3">
                                                <div className="row g-0">
                                                      <div className="col-md-4">
                                                            <img src="https://picsum.photos/200/250?random=32" className="img-fluid rounded-start h-100" alt="..." />
                                                      </div>
                                                      <div className="col-md-8">
                                                            <div className="card-body">
                                                                  <h5 className="card-title">Javascript dersleri</h5>
                                                                  <p className="card-text line_clamp8">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>

                                    <div className="col-md-6">
                                          <div className="card mb-3">
                                                <div className="row g-0">
                                                      <div className="col-md-4">
                                                            <img src="https://picsum.photos/200/250?random=88" className="img-fluid rounded-start h-100" alt="..." />
                                                      </div>
                                                      <div className="col-md-8">
                                                            <div className="card-body">
                                                                  <h5 className="card-title">React markdown previewer App</h5>
                                                                  <p className="card-text line_clamp8">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>

                        </div>
                  </div>
                  {/* Blog End */}
            </section>

      )
}

export default Blog