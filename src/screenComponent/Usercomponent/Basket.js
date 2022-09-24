import React from "react";
import { Link } from "react-router-dom";
import "../../css/css/UserScreen/User.css";
import necklace from "../../img/necklace.png"
function Basket() {
  return (
    <div className="bgbio  card__h">
      <div className="container bootstrap snippets bootdey ">
        {/*<!-- upper section --> */}
        <div className="row mt-5 ">
          <div className="col-md-3 mt-5 border border-dark">
            {/*<!-- left -->*/}

            <Link to="/Profil/id">
              <strong className="s__p">
                <i className="fa fa-star"></i> Kullanıcı Adı
              </strong>
            </Link>

            <hr />

            <ul className="  ">
              <li className="my-2">
                <Link to="/Profil/id/ProfilDuzenle">
                  <a className="s__p" href="#">
                    <i className="fa fa-user"></i> Profil
                  </a>
                </Link>
              </li>
              <li className="my-2">
                <Link to="/Profil/id/Sepetim">
                  <a className="s__p" href="#">
                    <i className="fa fa-cart-plus"></i> Sepetim
                  </a>
                </Link>
              </li>
              <li className="my-2">
              <Link to="/Profil/id/Randevularim"><a className="s__p" href="#">
                <i className="fa fa-calendar"></i> Randevularım
                </a></Link> 
              </li>
              <li className="my-2">
              <Link to="/Profil/id/Yorumum"><a className="s__p" href="#">
                  <i className="fa fa-comment"></i> Yorum Yap
                </a></Link>
              </li>
            </ul>

            <hr />
            <h2 className="h6 px-4 py-3 bg-secondary text-center">
                    Toplam
                  </h2>
                  <div className="h3 font-weight-semibold text-center py-3">
                    781.00 ₺
                  </div>
                  <hr />
                  <a className="btn  mb-5 w-75 ml-4 btn__color__basket" href="#">
                    
                    Satın al 
                  </a>
          </div>
          <div className="col-md-9  ">
           
            <div className="col-12 "><h2 className="h6 d-flex flex-wrap justify-content-between align-items-center px-4 py-3 bg-secondary mt-5">
                    <span>Ürünler</span>
                    <a className="font-size-sm" href="#">
                     
                      Alışverişe Devam Et
                    </a>
                  </h2>
                  <div className="d-sm-flex justify-content-between my-4 pb-4 border-bottom">
                  <div className="media d-block d-sm-flex  text-sm-left ">
                  
                        <img
                          className="img__basket"
                          src={necklace}
                          alt="Product"
                        />
                
                      <div className="media-body pt-3 ml-3 ">
                      <h3 className="product-card-title h3__basket">
                          <a className="h3__basket" href="#">Altın Kaplama Sitrin Kolye</a>
                        </h3>
                        <div className="font-size-sm">
                          <span className="text-muted mr-2">Boyut:</span>45cm
                        </div>
                        
                        <div className="font-size-lg text-primary pt-2">
                        190,00 ₺
                        </div>
                        
                      </div>

                      <div
                      className="pt-2  justify-content-center margin__basket"  > 
                    <div className="form-group mb-2 w__basket ml-1">
                        <label for="quantity1">Miktar</label>
                        <input
                          className="form-control form-control-sm ml-2"
                          type="number"
                          id="quantity1"
                          value="1"
                        />
                      </div>
                      <button
                        className="btn   mb-2  btn__basket"
                        type="button"
                      >
                        Çıkar
                      </button>



                    </div>
                  </div>
                  </div>
                  <div className="d-sm-flex justify-content-between my-4 pb-4 border-bottom">
                  <div className="media d-block d-sm-flex  text-sm-left ">
                  
                        <img
                          className="img__basket"
                          src={necklace}
                          alt="Product"
                        />
                
                      <div className="media-body pt-3 ml-3 ">
                      <h3 className="product-card-title h3__basket">
                          <a className="h3__basket" href="#">Altın Kaplama Sitrin Kolye</a>
                        </h3>
                        <div className="font-size-sm">
                          <span className="text-muted mr-2">Boyut:</span>45cm
                        </div>
                        
                        <div className="font-size-lg text-primary pt-2">
                        190,00 ₺
                        </div>
                        
                      </div>

                      <div
                      className="pt-2  justify-content-center margin__basket"  > 
                    <div className="form-group mb-2 w__basket ml-1">
                        <label for="quantity1">Miktar</label>
                        <input
                          className="form-control form-control-sm ml-2"
                          type="number"
                          id="quantity1"
                          value="1"
                        />
                      </div>
                      <button
                        className="btn   mb-2  btn__basket"
                        type="button"
                      >
                        Çıkar
                      </button>



                    </div>
                  </div>
                  </div>
                  <div className="d-sm-flex justify-content-between my-4 pb-4 border-bottom">
                  <div className="media d-block d-sm-flex  text-sm-left ">
                  
                        <img
                          className="img__basket"
                          src={necklace}
                          alt="Product"
                        />
                
                      <div className="media-body pt-3 ml-3 ">
                      <h3 className="product-card-title h3__basket">
                          <a className="h3__basket" href="#">Altın Kaplama Sitrin Kolye</a>
                        </h3>
                        <div className="font-size-sm">
                          <span className="text-muted mr-2">Boyut:</span>45cm
                        </div>
                        
                        <div className="font-size-lg text-primary pt-2">
                        190,00 ₺
                        </div>
                        
                      </div>

                      <div
                      className="pt-2  justify-content-center margin__basket"  > 
                    <div className="form-group mb-2 w__basket ml-1">
                        <label for="quantity1">Miktar</label>
                        <input
                          className="form-control form-control-sm ml-2"
                          type="number"
                          id="quantity1"
                          value="1"
                        />
                      </div>
                      <button
                        className="btn   mb-2  btn__basket"
                        type="button"
                      >
                        Çıkar
                      </button>



                    </div>
                  </div>
                  </div>
                  <div className="d-sm-flex justify-content-between my-4 pb-4 border-bottom">
                  <div className="media d-block d-sm-flex  text-sm-left ">
                  
                        <img
                          className="img__basket"
                          src={necklace}
                          alt="Product"
                        />
                
                      <div className="media-body pt-3 ml-3 ">
                      <h3 className="product-card-title h3__basket">
                          <a className="h3__basket" href="#">Altın Kaplama Sitrin Kolye</a>
                        </h3>
                        <div className="font-size-sm">
                          <span className="text-muted mr-2">Boyut:</span>45cm
                        </div>
                        
                        <div className="font-size-lg text-primary pt-2">
                        190,00 ₺
                        </div>
                        
                      </div>

                      <div
                      className="pt-2  justify-content-center margin__basket"  > 
                    <div className="form-group mb-2 w__basket ml-1">
                        <label for="quantity1">Miktar</label>
                        <input
                          className="form-control form-control-sm ml-2"
                          type="number"
                          id="quantity1"
                          value="1"
                        />
                      </div>
                      <button
                        className="btn   mb-2  btn__basket"
                        type="button"
                      >
                        Çıkar
                      </button>



                    </div>
                  </div>
                  </div>
                  
                  </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basket;
