import React from "react";
import SmallNav from "../components/SmallNav";
import servisimg from "../img/servis.png";
import "../css/css/ServiceScreen/Services.css";
import Appointment from "../screenComponent/Servicescomponent/Appointment";

function Services() {
  return (
    <div className="bgbio ">
      <SmallNav />
      <div className="container component__space   ">
        <div className="row d-flex justify-content-center">
          <div className="col-12">
          <div className="row mb-5">
          <div className="col-md-6 col-sm-12">
              <img className="img__services" src={servisimg}></img>
            </div>
            <div className="col-md-6 col-sm-12 ">
              <h1 className="h1__services">Hangi Hizmetleri Sağlıyorum? </h1>
              <div className="top mr-5">
              <p className="p__normal ">
                Almış olduğum eğitimler dahilinde; ilimin ve bilimin ışığında
                sağladığım hizmetlerden nasıl faydalanabilirsiniz?
              </p>
              </div>
              
              <ul className="ul__service ml-5">
                <li className="li__service">Doğum Haritası</li>
                <li className="li__service">Tarot Seansı</li>
                <li className="li__service">İlişki Terapisi</li>
                <li className="li__service">A BARS Eğitmenliği</li>
                <li className="li__service">Astroloji Dersleri</li>
              </ul>
            </div>
          </div>
            
          </div>
          <div className="col-12">
                
            <ol>
              <li>
                <h2 className="h2__service"> 1. AŞAMA: DURUM TESPİT, ANALİZ ÇALIŞMASI</h2>
                <div className="top">
                  <p className="p__normal d-flex p__text__align  ">
                    Doğum haritanızın analizi ve durum tespiti yapabilmem için
                    öncelikle doğum saatinizi ve tarihini biliyor olmalısınız.
                    Eğer bilmiyorsanız, hayatınızla ilgili astroloji bazlı Tarot
                    okumaları yapıyorum. Her ikisi de göksel bir bilim dalıdır.
                    Ben doğum haritası ya da Tarot kartlarını yorumlayan bir
                    aracıyım yalnızca. Daha sonra 12 sorudan oluşan bir analiz
                    çalışması yapıyorum, bu çalışmadan çıkan sonuçların hepsini
                    derleyerek ikinci bölüm olan ‘’En İyi Versiyonum’’
                    çalışmasına geçiyoruz.
                  </p>
                </div>
              </li>
              <li>
                <h2 className="h2__service"> 2.AŞAMA: EN İYİ VERSİYONUM ÇALIŞMASI</h2>
                <div className="top">
                  <p className="p__normal d-flex p__text__align  ">
                    Enerjinizin dengelenmesi ve gerçekten en iyi halinizin
                    ortaya çıkması için yapılması gereken bilinçaltı temizliği,
                    kök bilinçlerin etkilerinin azaltılması gibi çalışmalarla
                    yol kat ederiz. Temizlenen zihinde yapılacak olan enerji
                    çalışmasından en doğru ve en faydalı sonucu almamız mümkün.
                  </p>
                </div>
              </li>
              <li>
                <h2 className="h2__service"> 3.AŞAMA: SÜREKLİLİK</h2>
                <div className="top">
                  <p className="p__normal d-flex p__text__align  ">
                    En İyi Versiyonum paketini alıp, seansı tamamlayan
                    danışanlarım, gerçekleştirmiş olduğu dönüşümü iyi halde
                    devam ettirmek için kendilerine özel olarak hazırlamış
                    olduğum enerjetik (şifalı) takıları kullanırlar ya da ayda
                    bir kontrol seanslarıma katılarak genel olarak hayatlarıyla
                    ilgili çalışmalarla kısa bir enerji dengeleme seansı
                    gerçekleştiririz.
                  </p>
                </div>
              </li>
              <li>
                <h2 className="h2__service">4.AŞAMA: SÜREKLİLİK</h2>
                <div className="top">
                  <p className="p__normal d-flex p__text__align  ">
                    Eğer kendileri de benim gibi bir aracı ışık elçisi olmak
                    istiyorlarsa açmış olduğum Astroloji, Bilinçaltı, Mucize
                    dili, Access Bars eğitimlerine katılabilir, kendilerine ve
                    sevdiklerine yardımcı olabilirler.
                  </p>
                </div>
              </li>
            </ol>
          </div>
          
          <div className="col-12 bg__appoitment  ">
           <Appointment />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
