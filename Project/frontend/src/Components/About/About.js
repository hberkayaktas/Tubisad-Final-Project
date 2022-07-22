import React from 'react'

function About() {
  
  return (
    <section className='bg-dark text-light pb-4 pt-3'>
      <p className=' fw-bold fs-1' id="special_aboutme">
        Biz Kimiz ve Ne Yapıyoruz ?
      </p>
      <div className='px-1'>
      <p>Mevcut teknoloji çağımızın içerisinde tüm firmaların bir web sitesi olması gerektiğinin kanaatindeyiz. İnternette görünebilir olmak için siz değerli müşterilerimize Web Yazılım , Web Tasarım ve Mobil Uygulama alanında hizmetler sunmaktayız.</p>
      <p>Sektördeki tecrübemiz ile sizlerden gelen talepleriniz doğrultusunda hedefe doğru planlamalar yapıp projelerinizi veya websitelerinizi hayata geçiriyoruz.
      Günümüzde hemen hemen her firmanın ve ya kişilerin dijital ortama geçmesi gerekmektedir.Markanızı tanıtmanız için mükemmel bir yer olan bu ortamda sizleri tek başınıza bırakmıyorum. Markanızı üst seviyelere taşımak için yenilikçi bir şekilde yazılımlar üretiyorum.
      </p>
      </div>
      <div className='row m-0 mt-3'>

      <div className='col-md-2'> 
        <div class="card h-100 cardFlush">
          <div class="card-body p-1 text-dark">
            <p className='ps-2 m-0'><i class="fa-solid fa-hashtag"></i> <i class="fa-solid fa-1"></i></p>
            <p>Güncel teknolojileri takip ediyoruz.</p>
          </div>
        </div>
      </div>

      <div className='col-md-2'> 
        <div class="card bg-success h-100 cardFlush">
          <div class="card-body p-1 text-white">
            <p className='ps-2 m-0'><i class="fa-solid fa-hashtag"></i> <i class="fa-solid fa-2"></i></p>
            <p>Her projeye göre özel planlamalar yapıyoruz.</p>
          </div>
        </div>
      </div>
      
      <div className='col-md-2 '> 
        <div class="card h-100 cardFlush">
          <div class="card-body p-1  text-dark">
            <p className='ps-2 m-0'><i class="fa-solid fa-hashtag"></i> <i class="fa-solid fa-3"></i></p>
            <p>Müşteri taleplerini dikkate alıyoruz.</p>
          </div>
        </div>
      </div>

      <div className='col-md-2'> 
        <div class="card  bg-success h-100 cardFlush">
          <div class="card-body p-1  text-light">
            <p className='ps-2 m-0'><i class="fa-solid fa-hashtag"></i> <i class="fa-solid fa-4"></i></p>
            <p>Müşteri desteğine önem veriyoruz.</p>
          </div>
        </div>
      </div>

      <div className='col-md-2'> 
        <div class="card cardFlush">
          <div class="card-body p-1  text-dark">
            <p className='ps-2 m-0'><i class="fa-solid fa-hashtag"></i> <i class="fa-solid fa-5"></i></p>
            <p className='text-wrap'>Planlanan zamanda işi teslim ediyoruz.</p>
          </div>
        </div>
      </div>

      <div className='col-md-2'> 
        <div class="card  bg-success  h-100 cardFlush">
          <div class="card-body p-1  text-light">
            <p className='ps-2 m-0'><i class="fa-solid fa-hashtag"></i> <i class="fa-solid fa-6"></i></p>
            <p>Kaliteli ve Özgün yazılımlar sunuyoruz.</p>
          </div>
        </div>
      </div>

      </div>
       

      
    </section>

  )
}

export default About