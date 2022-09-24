import React from "react";
import { Link } from "react-router-dom";
import "../../css/css/UserScreen/User.css";
function AppoitmentUser() {
  return (
    <div className="bgbio full card__h">
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
                    500.00 ₺
                  </div>
                  <hr />
                  <a className="btn mb-5 w-75 ml-4 btn__color__basket" href="#">
                    
                    Ödeme Yap
                  </a>
          </div>
          <div className="col-md-9 ">
            <div className="col-12">
              <h2 className="h6 d-flex flex-wrap justify-content-between align-items-center px-4 py-3 bg-secondary mt-5">
                <span>Randevular</span>
                <Link to="/Hizmetler">
                  <a className="font-size-sm" href="#">
                    Randevu Al
                  </a>
                </Link>
              </h2>

              
                <div className="media d-block d-sm-flex  text-sm-left ">
                  <div className=" col-6  pt-3 ml-3 w1  justify-content-start  ">
                    <h3 className="product-card-title h3__basket">Seans :</h3>
                    <div className="font-size-sm">
                      <span className="text-muted mr-2">Doğum Haritası</span>Tarih:
                    </div>

                    <div className="font-size-lg  pt-2">19.06.2022</div>
                  </div>

                  <div className=" col-6  pt-2 justify-content-end  ">
                    <button className="btn   mb-2  btn__basket" type="button">
                      İptal Et
                    </button>
                  </div>
                 
                </div>
                <hr />
                <div className="media d-block d-sm-flex  text-sm-left ">
                  <div className=" col-6  pt-3 ml-3 w1  justify-content-start  ">
                    <h3 className="product-card-title h3__basket">Seans :</h3>
                    <div className="font-size-sm">
                      <span className="text-muted mr-2">İlişki Terapisi</span>Tarih:
                    </div>

                    <div className="font-size-lg  pt-2">19.06.2022</div>
                  </div>

                  <div className=" col-6  pt-2 justify-content-end  ">
                    <button className="btn   mb-2  btn__basket" type="button">
                      İptal Et
                    </button>
                  </div>
                </div>
                <hr />
                <div className="media d-block d-sm-flex  text-sm-left ">
                  <div className=" col-6  pt-3 ml-3 w1  justify-content-start  ">
                    <h3 className="product-card-title h3__basket">Seans :</h3>
                    <div className="font-size-sm">
                      <span className="text-muted mr-2">Tarot Seansı</span>Tarih:
                    </div>

                    <div className="font-size-lg  pt-2">19.06.2022</div>
                  </div>

                  <div className=" col-6  pt-2 justify-content-end  ">
                    <button className="btn   mb-2  btn__basket" type="button">
                      İptal Et
                    </button>
                  </div>
                </div>
                <hr />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppoitmentUser;
