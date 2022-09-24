import React from "react";
import { Link } from "react-router-dom";
import "../../css/css/AdminScreen/Admin.css";
function Orders() {
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
                  <strong>Siparişler</strong>
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
                          <a href="#">Onaylı Siparişler</a>
                        </li>
                        <li className="li__admin">
                          <a href="#">İptal Edilen Siparişler</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="panel-body">
                  <div className="row mt-5">
                    <div className="col-md-1">
                      <img
                        src="https://bootdey.com/img/Content/user_3.jpg"
                        className="media-object img-thumbnail"
                      />
                    </div>
                    <div className="col-md-11">
                      <div className="row border bg">
                        <div className="col-md-12 my-2">
                          <div className="pull-right ">
                            <label className="label__ ">Onaylı</label>
                          </div>
                          <span>
                            <strong>Sipariş edilenler</strong>
                          </span>{" "}
                          <span className="label__">
                            Baby Kolye, Ritüel Kiti
                          </span>
                          <br />
                          Toplam: <b>323.13₺</b> <br />
                          <a
                            data-placement="top"
                            className="btn  btn-xs mt-1 btn__color__basket"
                            href="#"
                            title="View"
                          >
                            {" "}
                            Tamamlandı
                          </a>
                          <a
                            data-placement="top"
                            className="btn btn__basket__ btn-xs mt-1"
                            href="#"
                            title="Danger"
                          >
                            Sil
                          </a>
                        </div>
                        <div className="col-md-12 mt-1 "> Kullanıcı adı </div>
                        <div className="col-md-12 ">
                          Adres: <b>mah sok. daire. no. şehir/ilçe</b>{" "}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-5">
                    <div className="col-md-1">
                      <img
                        src="https://bootdey.com/img/Content/user_3.jpg"
                        className="media-object img-thumbnail"
                      />
                    </div>
                    <div className="col-md-11">
                      <div className="row border bg">
                        <div className="col-md-12 my-2">
                          <div className="pull-right ">
                            <label className="label__ ">Onaylı</label>
                          </div>
                          <span>
                            <strong>Sipariş edilenler</strong>
                          </span>{" "}
                          <span className="label__">
                            Baby Kolye, Ritüel Kiti
                          </span>
                          <br />
                          Toplam: <b>323.13₺</b> <br />
                          <a
                            data-placement="top"
                            className="btn  btn-xs mt-1 btn__color__basket"
                            href="#"
                            title="View"
                          >
                            {" "}
                            Tamamlandı
                          </a>
                          <a
                            data-placement="top"
                            className="btn btn__basket__ btn-xs mt-1"
                            href="#"
                            title="Danger"
                          >
                            Sil
                          </a>
                        </div>
                        <div className="col-md-12 mt-1 "> Kullanıcı adı </div>
                        <div className="col-md-12 ">
                          Adres: <b>mah sok. daire. no. şehir/ilçe</b>{" "}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-5">
                    <div className="col-md-1">
                      <img
                        src="https://bootdey.com/img/Content/user_3.jpg"
                        className="media-object img-thumbnail"
                      />
                    </div>
                    <div className="col-md-11">
                      <div className="row border bg">
                        <div className="col-md-12 my-2">
                          <div className="pull-right ">
                            <label className="label__ ">İptal</label>
                          </div>
                          <span>
                            <strong>Sipariş edilenler</strong>
                          </span>{" "}
                          <span className="label__">
                            Baby Kolye, Ritüel Kiti
                          </span>
                          <br />
                          Toplam: <b>323.13₺</b> <br />
                          <a
                            data-placement="top"
                            className="btn  btn-xs mt-1 btn__color__basket"
                            href="#"
                            title="View"
                          >
                            {" "}
                            Tamamlandı
                          </a>
                          <a
                            data-placement="top"
                            className="btn btn__basket__ btn-xs mt-1"
                            href="#"
                            title="Danger"
                          >
                            Sil
                          </a>
                        </div>
                        <div className="col-md-12 mt-1 "> Kullanıcı adı </div>
                        <div className="col-md-12 ">
                          Adres: <b>mah sok. daire. no. şehir/ilçe</b>{" "}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row my-5">
                    <div className="col-md-1">
                      <img
                        src="https://bootdey.com/img/Content/user_3.jpg"
                        className="media-object img-thumbnail"
                      />
                    </div>
                    <div className="col-md-11">
                      <div className="row border bg">
                        <div className="col-md-12 my-2">
                          <div className="pull-right ">
                            <label className="label__ ">Onaylı</label>
                          </div>
                          <span>
                            <strong>Sipariş edilenler</strong>
                          </span>{" "}
                          <span className="label__">
                            Baby Kolye, Ritüel Kiti
                          </span>
                          <br />
                          Toplam: <b>323.13₺</b> <br />
                          <a
                            data-placement="top"
                            className="btn  btn-xs mt-1 btn__color__basket"
                            href="#"
                            title="View"
                          >
                            {" "}
                            Tamamlandı
                          </a>
                          <a
                            data-placement="top"
                            className="btn btn__basket__ btn-xs mt-1"
                            href="#"
                            title="Danger"
                          >
                            Sil
                          </a>
                        </div>
                        <div className="col-md-12 mt-1 "> Kullanıcı adı </div>
                        <div className="col-md-12 ">
                          Adres: <b>mah sok. daire. no. şehir/ilçe</b>{" "}
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
    </div>
  );
}

export default Orders;
