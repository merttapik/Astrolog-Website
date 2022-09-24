import React from "react";
import { Link } from "react-router-dom";
import "../css/css/HomeScreen/About.css";
import contactimg from "../img/ast.jpg";
function About() {
  return (
    <div className="about component__space height" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={contactimg} className="about__img"></img>
          </div>
          <div className="col__2">
            <h1 className="about__heading">Hakkımda</h1>
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
                yolculuğunda savrulup durduklarına çok kez şahit olmuş biriyim.
                Kavanozun içinde sizin için olanı doğru okumalar ile bilmeniz
                mümkün.
              </p>
              <p className="about__text p__color mb-5">
                Göklerde bizim için bir yol haritası var. Evrendeki her canlı
                birbiri ile enerji aktarımı ve etkileşim halinde. Bize Yüce
                Yaratıcı’nın müsaadesiyle verilen yol haritasını almak ve doğru
                yoldan gitmek varken, neden boşlukta savrulalım? Hayat sadece
                bir tane!
              </p>
              <div className="about__button d__flex align__items__center">
                <Link to="/Biyografi"><a target="_blank" rel="noreferrer">
                  <button className="about btn pointer">Devamını Oku...</button>
                </a></Link>
                <Link to="/Hizmetler"><a href="#Contact">
                  <button className="about btn pointer">Randevu AL</button>
                </a></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
