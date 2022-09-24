import React from "react";
import "../css/css/HomeScreen/RegisterNow.css";
import odeme from "../img/odeme.jpg";
import cevap from "../img/cevap.png";
import kayıt from "../img/kayıtol.png";
import { Link } from "react-router-dom";

function RegisterNow() {
  return (
    <div className="service bg_ component__space" id="Services">
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-md-4 col-sm-12 mt-5 ">
            <div className="mb-5">
              <h1 className="heading">Kayıt Ol </h1>
            </div>
            <img className="regis" src={kayıt}></img>
          </div>
          <div className="col-md-4 col-sm-12 mt-5 ">
            <div>
              <div className="mb-5">
                <h1 className="heading">Ödeme Yap </h1>
              </div>
            </div>
            <img className="regis" src={odeme}></img>
          </div>
          <div className="col-md-4 col-sm-12 mt-5 ">
            <div className="mb-5">
              <h1 className="heading">Servis Al </h1>
            </div>

            <img className="regis" src={cevap}></img>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-4 ">
         
        </div>
        <div class="col-md-4 col-sm-12 mt-5  ">
         <Link to="/Uyeol"><button type="button" class="btn btn-primary btn-lg btn-block">
            Hemen Kayıt Ol
          </button></Link> 
        </div>
        <div class="col-4 ">
           
        </div>
      </div>
    </div>
  );
}

export default RegisterNow;
