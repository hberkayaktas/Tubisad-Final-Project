import {useState} from 'react'

function Message() {
      const [DateState, setDateState] = useState("")
      const  showTime = () => {
      
            var tarih = new Date();
            var hh =tarih.getHours();
            var mm =tarih.getMinutes();
            var ss =tarih.getSeconds(ss);
            var year =tarih.getFullYear();
            var month =tarih.getMonth();
            var day_today =tarih.getDate();
            

            var haftanin_gunu = ["pazar","pazartesi","salı","çarşamba","perşembe","cuma","cumartesi"];
            const aylar_tr =["Ocak","Şubat","Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
            var day = tarih.getDay();
            var day_tr = haftanin_gunu[day];
            var month_tr = aylar_tr[month];

            setDateState(hh+":"+mm+":"+ss+ "//"  +"  " + day_today + "  " + month_tr+ "  " + day_tr + "  " + year);
            }
      return (
            <section className='bg-dark text-light py-3'>
                  <p className="fw-bold text-center fs-1 p-0 m-0">Date Widget</p>
                  <div className="row m-0 justify-content-center mb-5 wow fadeInUp animated" data-wow-delay=".20s">
                        
                        <div className="col-md-8 ">
                              <p className='fst-italic text-center m-0 p-0'><button className='btn btn-success' onClick={()=> showTime()}>Get Date</button></p>
                              <p className="m-0 mt-1 fs-2 text-center">{DateState}</p>
                            
                        </div>
                  </div>
                 
            </section>
      )
}

export default Message