import React from 'react'
import { Link } from 'react-router-dom'
import "../css/css/HomeScreen/Courses.css"
import udemy from "../img/udemy.png"

function Courses() {
  return (
    <div className="service bg component__space" id="Services">
      <div className="heading row">
        <h1 className="heading">Eğitimlerim </h1>
        <p className="heading p__color ">
          Ruhsal Yolculuğunuzu Kendiniz Öğrenin
        </p>
        <p className="heading p__color ">
          Udemy Platformu İçindeki Kurslarım ile Sizde Yol Gösterebileceksiniz.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
           <Link to="/Egitimlerim"><div className="service__box pointer">
              <div className="icon">
                <img className="udemy" src={udemy}></img>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Reiki-1</h1>
                <hr></hr>
                <p className="p service__text p__color">
                    5 Ders
                </p>
                
              </div>
            </div></Link> 
          </div>
          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon ">
                <img className="udemy " src={udemy}></img>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Reiki-2</h1>
                <hr></hr>
                <p className="p service__text p__color">
                    9 Ders
                </p>
                
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <img className="udemy" src={udemy}></img>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Reiki-3</h1>
                <hr></hr>
                <p className="p service__text p__color">
                    7 Ders
                </p>
                
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  )
}

export default Courses