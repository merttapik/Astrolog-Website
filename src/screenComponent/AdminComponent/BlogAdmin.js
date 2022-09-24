import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../css/css/AdminScreen/Admin.css";

class BlogAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
    };

    this.onImageChange = this.onImageChange.bind(this);
  }

  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(img),
      });
    }
  };

  render() {
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
              <div className="row ">
                <div class="card card__w mb-4 mt-5">
                  <div class="card-header">Blog Ekle</div>
                  <div class="card-body">
                    <form>
                      <div class="mb-3">
                        <img src={this.state.image} />
                        <label class="small mb-1 mr-3" for="inputFirstName">
                          Yüklenicek Kapak Fotorafını Seç
                        </label>
                        <input
                          type="file"
                          name="myImage"
                          onChange={this.onImageChange}
                        />
                      </div>
                      <div>
                      <label class="small mb-1" for="inputFirstName">Başlığı Gir</label>
                                <input class="form-control" id="inputFirstName" type="text" placeholder="ismi" value="Baslık " />
                      </div>
                      <div>
                      <label class="small mb-1" for="inputFirstName">Tag Gir</label>
                                <input class="form-control" id="inputFirstName" type="text" placeholder="ismi" value="#aytutulması " />
                      </div>
                      <div class="row gx-3 mb-3">
                        <div class="col-md-12">
                          <label class="small mb-1" for="inputFirstName">
                            Kategori İsmi
                          </label>

                          <div class="input-group margin__ ">
                            <div class="input-group-prepend">
                              <button
                                class="btn btn-outline-secondary dropdown-toggle"
                                type="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Kategori
                              </button>
                              <div class="dropdown-menu mb-5">
                                <a class="dropdown-item " href="#">
                                  Genel
                                </a>
                                <a class="dropdown-item" href="#">
                                  Haftalık Burç Yorumuları
                                </a>
                                <a class="dropdown-item" href="#">
                                  Aylık Burç Yorumları
                                </a>
                                <a class="dropdown-item" href="#">
                                  Başak
                                </a>
                                <a class="dropdown-item" href="#">
                                  Terazi
                                </a>
                                <a class="dropdown-item" href="#">
                                  Akrep
                                </a>
                                <a class="dropdown-item" href="#">
                                  Yay
                                </a>
                                <a class="dropdown-item" href="#">
                                  Oğlak
                                </a>
                                <a class="dropdown-item" href="#">
                                  Kova
                                </a>
                                <a class="dropdown-item" href="#">
                                  Balık
                                </a>
                                <a class="dropdown-item" href="#">
                                  Koç
                                </a>
                                <a class="dropdown-item" href="#">
                                  Boğa
                                </a>
                                <a class="dropdown-item" href="#">
                                  İkizler
                                </a>
                                <a class="dropdown-item" href="#">
                                  Yengeç
                                </a>
                                <a class="dropdown-item" href="#">
                                  Aslan
                                </a>
                              </div>
                            </div>
                            <input
                              type="text"
                              class="form-control"
                              aria-label="Text input with dropdown button"
                            />
                          </div>
                        </div>

                        <div class="col-md-12">
                        <h1 className="ml-3 h1__comment__">
                         İçeriği Gir
              </h1>
                          <textarea className="mt-3 ml-3 txta" rows="10" cols="80">
              " Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galle"
            </textarea>
                        </div>
                      </div>

                      <button class="btn btn-primary" type="button">
                        {" "}
                        Ekle
                      </button>
                    </form>
                  </div>
                </div>
                <div class="card card__w mb-4 mt-5">
                  <div class="card-header">Blog Sil</div>
                  <div class="card-body">
                    <form>
                      <div class="row gx-3 mb-3">
                        <div class="col-md-6">
                          <label class="small mb-1" for="inputFirstName">
                            Blog Başlığı
                          </label>
                          <input
                            class="form-control"
                            id="inputFirstName"
                            type="text"
                            placeholder="ismi"
                            value="Ay Tutulmasinin Burclara Etkisi"
                          />
                        </div>
                        <div class="col-md-6">
                          <label class="small mb-1" for="inputFirstName">
                            Yayın  Tarihi
                          </label>
                          <input
                            class="form-control"
                            id="inputFirstName"
                            type="text"
                            placeholder="ismi"
                            value="13.06.2022"
                          />
                        </div>
                      </div>

                      <button class="btn btn-primary" type="button">
                        {" "}
                        Sil
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogAdmin;
