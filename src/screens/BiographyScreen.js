import React from "react";
import SmallNav from "../components/SmallNav";
import "../css/css/BiographyScreen/Biography.css";
import contactimg from "../img/ast.jpg";
import contactimg2 from "../img/ast2.png";

function Biography() {
  return (
    <div className="bgbio ">
      <SmallNav />

      <div className="about component__space height" id="About">
        <div className="container">
          <div className="row">
            <div className="col__2">
              <img src={contactimg2} className="bio__img mb-5"></img>
              <h1 className="about__heading">Lorem Ipsum</h1>
              <div className="about__meta ">
                <p className="about__text p__color mb-5 ">
                  Acılar, sevinçler, travmalar…
                </p>
                <p className="about__text p__color mb-5">
                  Hayat çok renkli bir şeker kavanozu gibi, içinde ne ararsanız
                  var. Ancak ne aradığınızı bilirseniz ağzınızın tadı kaçmadan,
                  canınız sıkılmadan yaşayabiliyorsunuz.
                </p>
                <p className="about__text p__color mb-5">
                  Kavanozun içinde sizin için olan şekerin hangisi olduğunu
                  bilebilir misiniz? Bilemeyeceğini düşünenlerin hayat
                  yolculuğunda savrulup durduklarına çok kez şahit olmuş
                  biriyim. Kavanozun içinde sizin için olanı doğru okumalar ile
                  bilmeniz mümkün.
                </p>
                <p className="about__text p__color mb-5">
                  Göklerde bizim için bir yol haritası var. Evrendeki her canlı
                  birbiri ile enerji aktarımı ve etkileşim halinde. Bize Yüce
                  Yaratıcı’nın müsaadesiyle verilen yol haritasını almak ve
                  doğru yoldan gitmek varken, neden boşlukta savrulalım? Hayat
                  sadece bir tane!
                </p>
              </div>
            </div>
            <div className="col__2">
              <h1 className="about__heading">Lorem Ipsum</h1>
              <div className="about__meta ">
                <p className="about__text p__color mb-5 ">
                  Acılar, sevinçler, travmalar…
                </p>
                <p className="about__text p__color mb-5">
                  Hayat çok renkli bir şeker kavanozu gibi, içinde ne ararsanız
                  var. Ancak ne aradığınızı bilirseniz ağzınızın tadı kaçmadan,
                  canınız sıkılmadan yaşayabiliyorsunuz.
                </p>
                <p className="about__text p__color mb-5">
                  Kavanozun içinde sizin için olan şekerin hangisi olduğunu
                  bilebilir misiniz? Bilemeyeceğini düşünenlerin hayat
                  yolculuğunda savrulup durduklarına çok kez şahit olmuş
                  biriyim. Kavanozun içinde sizin için olanı doğru okumalar ile
                  bilmeniz mümkün.
                </p>
                <p className="about__text p__color mb-5">
                  Göklerde bizim için bir yol haritası var. Evrendeki her canlı
                  birbiri ile enerji aktarımı ve etkileşim halinde. Bize Yüce
                  Yaratıcı’nın müsaadesiyle verilen yol haritasını almak ve
                  doğru yoldan gitmek varken, neden boşlukta savrulalım? Hayat
                  sadece bir tane!
                </p>
              </div>
              <img src={contactimg} className="bio__img mb-5"></img>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
          <div className="col-12">
            <h1 className="bio__heading">Alınan Eğitimler</h1>
          </div>
            <div className="col-12"> 
            <span>
            <ul className="ul__bio" >
              <li className="bio__li">Astroloji</li>
              <li className="bio__li">Yaşam Koçluğu</li>
              <li className="bio__li">Kuantum Çekirdek İnanç</li>
            </ul>
            <ul className="ul__bio" >
              <li className="bio__li">Bio Enerji</li>
              <li className="bio__li">Spiritualizm</li>
              <li className="bio__li">Hipnoz</li>
            </ul>
             <ul className="ul__bio" >
              <li className="bio__li">Sağlıklı Yaşam Psikolojisi</li>
              <li className="bio__li">Transandantal Meditasyon</li>
              <li className="bio__li">Madde Bağımlılığı  Eğitimi</li>
            </ul>
            </span>
            
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Biography;
