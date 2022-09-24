import React from "react";
import "../css/css/HomeScreen/Follow.css";
import kova from "../img/kova.png";
import yay from "../img/yay.png";
import basak from "../img/basak.png";
function Follow() {
  return (
    <div className="service component__space bg">
      <div className="container">
        <div className="row">
         <h1 className="heading">Instagram’da beni takip edin. ⭐ Günün Enerjilerinden Haberdar Olun</h1>
          <div className="col-md-4 col-sm-12 mb-2">
            <a href="https://www.instagram.com/" target="_blank"><img src={yay} className="follow"></img></a>
          </div>
          <div className="col-md-4 col-sm-12 mb-2">
          <a href="https://www.instagram.com/" target="_blank"><img src={kova} className="follow"></img></a>
          </div>
          <div className="col-md-4 col-sm-12">
          <a href="https://www.instagram.com/" target="_blank"><img src={basak} className="follow"></img></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Follow;
