import React from "react";
import "../css/css/ProductScreen/Productid.css";
import necklace from "../img/necklace.png";
import necklace2 from "../img/necklace2.png";
import lnecklace2 from "../img/limitednecklace2.png";
import { Link } from "react-router-dom";
function ProductidScreen() {
  return (
    <div className="bgbio ">
      <div className="row ">
        <div className="container d-flex justify-content-center pt-5">
          <div className="card card___ w-100 mt-5  ">
            <div className="container-fliud">
              <div className="wrapper row">
                <div className="preview col-md-6">
                  <div className="preview-pic tab-content">
                    <div className="tab-pane active" id="pic-1">
                      <img className="img__pro" src={necklace} />
                    </div>
                    <div className="tab-pane" id="pic-2">
                      <img className="img__pro" src={necklace2} />
                    </div>
                    <div className="tab-pane" id="pic-3">
                      <img className="img__pro" src={necklace2} />
                    </div>
                    <div className="tab-pane" id="pic-4">
                      <img className="img__pro" src={necklace} />
                    </div>
                    <div className="tab-pane" id="pic-5">
                      <img className="img__pro" src={necklace} />
                    </div>
                  </div>
                  <ul className="preview-thumbnail nav nav-tabs">
                    <li className="active">
                      <a data-target="#pic-1" data-toggle="tab">
                        <img className="img__pro" src={necklace} />
                      </a>
                    </li>
                    <li>
                      <a data-target="#pic-2" data-toggle="tab">
                        <img className="img__pro" src={necklace2} />
                      </a>
                    </li>
                    <li>
                      <a data-target="#pic-3" data-toggle="tab">
                        <img className="img__pro" src={necklace2} />
                      </a>
                    </li>
                    <li>
                      <a data-target="#pic-4" data-toggle="tab">
                        <img className="img__pro" src={necklace} />
                      </a>
                    </li>
                    <li>
                      <a data-target="#pic-5" data-toggle="tab">
                        <img className="img__pro" src={necklace} />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="details col-md-6">
                  <h3 className="product-title">Yosun Taşı Kolye</h3>

                  <p className="p__normal">
                    Suspendisse quos? Tempus cras iure temporibus? Eu laudantium
                    cubilia sem sem! Repudiandae et! Massa senectus enim minim
                    sociosqu delectus posuere.Suspendisse quos? Tempus cras iure temporibus? Eu laudantium
                    cubilia sem sem! Repudiandae et! Massa senectus enim minim
                    sociosqu delectus posuere.Suspendisse quos? Tempus cras iure temporibus? Eu laudantium
                    cubilia sem sem! Repudiandae et! Massa senectus enim minim
                    sociosqu delectus posuere.Suspendisse quos? Tempus cras iure temporibus? Eu laudantium
                    cubilia sem sem! Repudiandae et! Massa senectus enim minim
                    sociosqu delectus posuere.
                  </p>
                  <h4 className="price">
                    Fiyat: <span className="mt-2 span__pro">160 ₺ </span>
                  </h4>
                  <h5 class="sizes mt-1 mr-2">
                    Miktar:
                    <input
                          className="form-control form-control-sm ml-2"
                          type="number"
                          id="quantity1"
                          value="1"
                        />
                  </h5>
                  <h5 class="sizes mt-1">
                    Boyutlar:
                    <select class="form-control input-lg mt-4">
                      <option selected="selected">Boyutunu seç</option>
                      <option>45cm</option>
                      <option>60cm</option>
                    </select>
                  </h5>

                  <div className="action mt-5">
                   <Link to="/Profil/id/Sepetim"><button
                      className="add-to-cart btn btn-default pb-5"
                      type="button"
                    >
                      Sepete ekle
                    </button></Link> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5 d-flex justify-conetnt-center">
          <h1 className="mt-5 h1__product">Benzer Üürnler</h1>
        </div>
        <div className="container mb-5 ">
          <div className="row">
            <div className="col-md-3 col-sm-6 mt-5">
              <div className="card my-3 w-100 text-center">
                <img src={lnecklace2} className="card-img-top"></img>
                <div className="card-body">
                  <h4 className="card-title">Altın Kaplama Sitrin Kolye</h4>

                  <p className="card-text p__normal p__card">190,00 ₺</p>
                  <a className="btn card-link">Sepete Git </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mt-5">
              <div className="card my-3 w-100 text-center">
                <img src={lnecklace2} className="card-img-top"></img>
                <div className="card-body">
                  <h4 className="card-title">Altın Kaplama Sitrin Kolye</h4>

                  <p className="card-text p__normal p__card">190,00 ₺</p>
                  <a className="btn card-link">Sepete Git </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mt-5">
              <div className="card my-3 w-100 text-center">
                <img src={lnecklace2} className="card-img-top"></img>
                <div className="card-body">
                  <h4 className="card-title">Altın Kaplama Sitrin Kolye</h4>

                  <p className="card-text p__normal p__card">190,00 ₺</p>
                  <a className="btn card-link">Sepete Git </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mt-5">
              <div className="card my-3 w-100 text-center">
                <img src={lnecklace2} className="card-img-top"></img>
                <div className="card-body">
                  <h4 className="card-title">Altın Kaplama Sitrin Kolye</h4>

                  <p className="card-text p__normal p__card">190,00 ₺</p>
                  <a className="btn card-link">Sepete Git </a>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default ProductidScreen;
