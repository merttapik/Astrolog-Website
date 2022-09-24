import React from "react";
import { Link } from "react-router-dom";
import "../../css/css/AdminScreen/Admin.css";
function AppoitmentFollow() {
  return (
    <div className="bgbio  card__h">
      <div className="container bootstrap snippets bootdey ">
        {/*<!-- upper section --> */}
        <div className="row mt-5 ">
          <div className="col-md-3 mt-5 border border-dark">
            {/*<!-- left -->*/}

            <strong className="s__p">
              <i className="fa fa-star"></i> Admin Paneli
            </strong>

            <hr />

            <ul className="  ">
              <li className="my-2">
                <Link to="/Admin/id">
                  <a className="s__p" href="#">
                    <i className="fa fa-user"></i> Kullanıcılar
                  </a>
                </Link>
              </li>
              <li className="my-2">
                <Link to="/Admin/id/Siparis">
                  <a className="s__p" href="#">
                    <i className="fa fa-cart-plus"></i> Siparişler
                  </a>
                </Link>
              </li>
              <li className="my-2">
                <Link to="/Admin/id/Randevular">
                  <a className="s__p" href="#">
                    <i className="fa fa-calendar"></i> Randevular
                  </a>
                </Link>
              </li>
              <li className="my-2">
              <Link to="/Admin/id/YoutubeCourse">
                  <a className="s__p" href="#">
                    <i className="fa fa-comment"></i> Eğitim&Youtube
                  </a>
                </Link>
              </li>
              <li className="my-2">
                <Link to="/Admin/id/Blog">
                  <a className="s__p" href="#">
                    <i className="fa fa-comment"></i> Blog
                  </a>
                </Link>
              </li>
              <li className="my-2">
                <Link to="/Admin/id/Urun">
                  <a className="s__p" href="#">
                    <i className="fa fa-comment"></i> Ürün
                  </a>
                </Link>
              </li>
            </ul>

            <hr />
          </div>
          <div className="col-md-9 ">
            <div className="container bootdey mt-5">
              <div className="panel panel-default panel-order">
                <div className="panel-heading">
                  <strong>Randevular</strong>
                  <div className="btn-group pull-right">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-default btn-xs dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Filtrele <i className="fa fa-filter"></i>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-right li__admin p-1">
                        <li className="li__admin">
                          <a href="#">Bu Hafta Randevular</a>
                        </li>
                        <li className="li__admin">
                          <a href="#">Bu Ay Randevular</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="panel-body">
                  <div className="row my-5">
                    <div className="col-md-1">
                     
                       <i className="fa fa-calendar media-object img-thumbnail"></i>
                    </div>
                    <div className="col-md-11">
                      <div className="row border bg">
                        <div className="col-md-12 my-2">
                          <div className="pull-right ">
                            <label className="label__ ">İlişki Terapisi</label>
                          </div>
                          <span>
                            <strong>Tarih</strong>
                          </span>{" "}
                          <span className="label__">
                            13.06.2022 - 15:30
                          </span>
                          <br />
                          Ödenen: <b>200₺</b> <br />
                          <a
                            data-placement="top"
                            className="btn w-75 btn-xs mt-1 btn__color__basket"
                            href="#"
                            title="View"
                          >
                            {" "}
                            İptal Mesajı Gönder
                          </a>
                          <a
                            data-placement="top"
                            className="btn w-75 btn__basket__ btn-xs mt-1"
                            href="#"
                            title="Danger"
                          >
                            İptal et
                          </a>
                        </div>
                        <div className="col-md-12 mt-1 "> Kullanıcı Adı </div>
                      </div>
                    </div>
                  </div>

                  <div className="row my-5">
                    <div className="col-md-1">
                     
                       <i className="fa fa-calendar media-object img-thumbnail"></i>
                    </div>
                    <div className="col-md-11">
                      <div className="row border bg">
                        <div className="col-md-12 my-2">
                          <div className="pull-right ">
                            <label className="label__ ">İlişki Terapisi</label>
                          </div>
                          <span>
                            <strong>Tarih</strong>
                          </span>{" "}
                          <span className="label__">
                            13.06.2022 - 15:30
                          </span>
                          <br />
                          Ödenen: <b>200₺</b> <br />
                          <a
                            data-placement="top"
                            className="btn w-75 btn-xs mt-1 btn__color__basket"
                            href="#"
                            title="View"
                          >
                            {" "}
                            İptal Mesajı Gönder
                          </a>
                          <a
                            data-placement="top"
                            className="btn w-75 btn__basket__ btn-xs mt-1"
                            href="#"
                            title="Danger"
                          >
                            İptal et
                          </a>
                        </div>
                        <div className="col-md-12 mt-1 "> Kullanıcı Adı </div>
                      </div>
                    </div>
                  </div>

                  <div className="row my-5">
                    <div className="col-md-1">
                     
                       <i className="fa fa-calendar media-object img-thumbnail"></i>
                    </div>
                    <div className="col-md-11">
                      <div className="row border bg">
                        <div className="col-md-12 my-2">
                          <div className="pull-right ">
                            <label className="label__ ">İlişki Terapisi</label>
                          </div>
                          <span>
                            <strong>Tarih</strong>
                          </span>{" "}
                          <span className="label__">
                            13.06.2022 - 15:30
                          </span>
                          <br />
                          Ödenen: <b>200₺</b> <br />
                          <a
                            data-placement="top"
                            className="btn w-75 btn-xs mt-1 btn__color__basket"
                            href="#"
                            title="View"
                          >
                            {" "}
                            İptal Mesajı Gönder
                          </a>
                          <a
                            data-placement="top"
                            className="btn w-75 btn__basket__ btn-xs mt-1"
                            href="#"
                            title="Danger"
                          >
                            İptal et
                          </a>
                        </div>
                        <div className="col-md-12 mt-1 "> Kullanıcı Adı </div>
                      </div>
                    </div>
                  </div>

                  <div className="row my-5">
                    <div className="col-md-1">
                     
                       <i className="fa fa-calendar media-object img-thumbnail"></i>
                    </div>
                    <div className="col-md-11">
                      <div className="row border bg">
                        <div className="col-md-12 my-2">
                          <div className="pull-right ">
                            <label className="label__ ">İlişki Terapisi</label>
                          </div>
                          <span>
                            <strong>Tarih</strong>
                          </span>{" "}
                          <span className="label__">
                            13.06.2022 - 15:30
                          </span>
                          <br />
                          Ödenen: <b>200₺</b> <br />
                          <a
                            data-placement="top"
                            className="btn w-75 btn-xs mt-1 btn__color__basket"
                            href="#"
                            title="View"
                          >
                            {" "}
                            İptal Mesajı Gönder
                          </a>
                          <a
                            data-placement="top"
                            className="btn w-75 btn__basket__ btn-xs mt-1"
                            href="#"
                            title="Danger"
                          >
                            İptal et
                          </a>
                        </div>
                        <div className="col-md-12 mt-1 "> Kullanıcı Adı </div>
                      </div>
                    </div>
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

export default AppoitmentFollow;
