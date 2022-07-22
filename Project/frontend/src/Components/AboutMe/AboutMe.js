import React from 'react'

function AboutMe() {
      return (
            <section className=" p-3 m-0 mt-5">
                  {/* About Start */}
                  <div className="container">
                        <p className="fw-bold text-center text-black fs-1 ">Hakkımızda</p>
                        <div className="row bg-light shadow  rounded">
                              <div className="col-md-6 p-3">
                              Mükemmel bir siteye veya uygulama ulaşmak için başka yerlerde çözüm aramayın yılların getirdiği tecrübeler ile uygulama veya yazılımlarınızı en iyi şekilde hazırlıyoruz.

Sürekli güncel teknolojileri takip ederek projenizi kendi projemiz gibi sahiplenip sizlere en iyi hizmeti vermek için hazırlanıyoruz.

Müşterilerimizi sonuna kadar dinliyoruz önerdikleri talepleri en ince detayına kadar düşünüp yorumluyoruz. Satış sonrası desteğimiz ile siz degerli müşterilerimizi hiçbir zaman yalnız bırakmıyoruz.
                              </div>
                              <div className="col-md-6 p-2">
                                    <img className="rounded" src="https://images.pexels.com/photos/3789871/pexels-photo-3789871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width="100%" height="400px" />
                              </div>
                        </div>
                  </div>
                  {/* About end */}
            </section>

      )
}

export default AboutMe