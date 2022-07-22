import { useState } from 'react'

function SSS() {
  const [showMe, setshowMe] = useState("tab1")
  const changeTab = (param) => {
    console.log("çalıştı", param);
    setshowMe(param)
  }

  return (
    <section>
      {/* SSS Start */}
      <div className="row m-0"><p className="fw-bold text-center fs-1 m-0">Sık Sorulan Sorular</p></div>
      <div className="row justify-content-center m-0">
        <div className="col-md-3">
          <button className={`btn  border mb-1 w-100 wow fadeInLeft animated ${showMe === 'tab1' ? 'btn-warning ' : 'bg-light'}`} data-wow-delay=".30s" onClick={() => { changeTab('tab1'); }}>Web sitem ne zaman hazır olur?</button>
          <button className={`btn  border mb-1 w-100 wow fadeInLeft animated ${showMe === 'tab2' ? 'btn-warning ' : 'bg-light'}`} data-wow-delay=".40s" onClick={() => { changeTab('tab2'); }}>Kaç tane değişim yapma imkanım Bulunuyor?</button>
          <button className={`btn  border mb-1 w-100 wow fadeInLeft animated ${showMe === 'tab3' ? 'btn-warning ' : 'bg-light'}`} data-wow-delay=".50s" onClick={() => { changeTab('tab3'); }}>Teslimat süresi uzama ihtimali nedir</button>
          <button className={`btn  border mb-1 w-100 wow fadeInLeft animated ${showMe === 'tab4' ? 'btn-warning ' : 'bg-light'}`} data-wow-delay=".50s" onClick={() => { changeTab('tab4'); }}>İptal ve iade süreci nasıl işliyor?</button>
        </div>
        <div className="col-md-8 border-start">
          <div id="Tabs">
            <div id="tab1" className={`${showMe === 'tab1' ? 'd-block ' : 'd-none'} wow fadeInUp animated`} >
              <h4>1 Some other</h4>
              <p className="m-0">
                1Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, recusandae laudantium exercitationem voluptates id fuga, ducimus quisquam nulla excepturi quas optio animi sunt ipsam. Molestias quas consequatur sapiente magnam eveniet. Exercitationem repellat incidunt laborum repudiandae mollitia voluptatum, maxime quaerat? Labore nostrum culpa libero et rem illo, iure hic quam odio impedit repellendus, molestiae porro eos modi sequi ratione nisi quasi? Nesciunt accusamus debitis facilis, mollitia porro quasi in asperiores magnam, dolores nam vel quisquam reiciendis aperiam ducimus totam officiis itaque assumenda voluptas omnis blanditiis ipsam necessitatibus hic id doloribus. Perspiciatis. Voluptas harum deleniti ratione ipsa dolor, eius magnam amet vel quas dolorum iure? Vitae repellat iusto praesentium ut illo maxime quae! Libero, reprehenderit? Atque nam beatae rerum praesentium earum eum!</p>
            </div>
            <div id="tab2" className={`${showMe === 'tab2' ? 'd-block ' : 'd-none'} wow fadeInUp animated`} >
              <h4>2 Some other</h4>
              <p className="m-0">2Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ipsam earum amet, quo harum autem ducimus neque totam possimus expedita vitae nobis? Nulla dolores similique cupiditate exercitationem, ut voluptatibus autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, recusandae laudantium exercitationem voluptates id fuga, ducimus quisquam nulla excepturi quas optio animi sunt ipsam. Molestias quas consequatur sapiente magnam eveniet. Exercitationem repellat incidunt laborum repudiandae mollitia voluptatum, maxime quaerat? Labore nostrum culpa libero et rem illo, iure hic quam odio impedit repellendus, molestiae porro eos modi sequi ratione nisi quasi? Nesciunt accusamus debitis facilis, mollitia porro quasi in asperiores magnam, dolores nam vel quisquam reiciendis aperiam ducimus totam officiis itaque assumenda voluptas omnis blanditiis ipsam necessitatibus hic id doloribus. Perspiciatis. Voluptas harum deleniti ratione ipsa dolor, eius magnam amet vel quas dolorum iure? Vitae repellat iusto praesentium ut illo maxime quae! Libero, reprehenderit? Atque nam beatae rerum praesentium earum eum!</p>
            </div>
            <div id="tab3" className={`${showMe === 'tab3' ? 'd-block ' : 'd-none'} wow fadeInUp animated`} >
              <h4>3 Some other</h4>
              <p className="m-0">3Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ipsam earum amet, quo harum autem ducimus neque totam possimus expedita vitae nobis? Nulla dolores similique cupiditate exercitationem, ut voluptatibus autem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, recusandae laudantium exercitationem voluptates id fuga, ducimus quisquam nulla excepturi quas optio animi sunt ipsam. Molestias quas consequatur sapiente magnam eveniet. Exercitationem repellat incidunt laborum repudiandae mollitia voluptatum, maxime quaerat? Labore nostrum culpa libero et rem illo, iure hic quam odio impedit repellendus, molestiae porro eos modi sequi ratione nisi quasi? Nesciunt accusamus debitis facilis, mollitia porro quasi in asperiores magnam, dolores nam vel quisquam reiciendis aperiam ducimus totam officiis itaque assumenda voluptas omnis blanditiis ipsam necessitatibus hic id doloribus. Perspiciatis. Voluptas harum deleniti ratione ipsa dolor, eius magnam amet vel quas dolorum iure? Vitae repellat iusto praesentium ut illo maxime quae! Libero, reprehenderit? Atque nam beatae rerum praesentium earum eum!</p>
            </div>
            <div id="tab4" className={`${showMe === 'tab4' ? 'd-block ' : 'd-none'} wow fadeInUp animated`} >
              <h4>4 Some other</h4>
              <p className="m-0">4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ipsam earum amet, quo harum autem ducimus neque totam possimus expedita vitae nobis? Nulla dolores similique cupiditate exercitationem, ut voluptatibus autem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, recusandae laudantium exercitationem voluptates id fuga, ducimus quisquam nulla excepturi quas optio animi sunt ipsam. Molestias quas consequatur sapiente magnam eveniet. Exercitationem repellat incidunt laborum repudiandae mollitia voluptatum, maxime quaerat? Labore nostrum culpa libero et rem illo, iure hic quam odio impedit repellendus, molestiae porro eos modi sequi ratione nisi quasi? Nesciunt accusamus debitis facilis, mollitia porro quasi in asperiores magnam, dolores nam vel quisquam reiciendis aperiam ducimus totam officiis itaque assumenda voluptas omnis blanditiis ipsam necessitatibus hic id doloribus. Perspiciatis. Voluptas harum deleniti ratione ipsa dolor, eius magnam amet vel quas dolorum iure? Vitae repellat iusto praesentium ut illo maxime quae! Libero, reprehenderit? Atque nam beatae rerum praesentium earum eum!</p>
            </div>
          </div>
        </div>
      </div>
      {/* SSS End */}
    </section>

  )
}

export default SSS