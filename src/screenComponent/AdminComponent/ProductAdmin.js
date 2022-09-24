import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../css/css/AdminScreen/Admin.css";
import necklace from "../../img/necklace.png"
class ProductAdmin extends Component {
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
                    <div class="card-header">Ürün Ekle</div>
                    <div class="card-body">
                      <form>
                        <div class="mb-3">
                          <img src={this.state.image} />
                          <label class="small mb-1 mr-3" for="inputFirstName">
                            Yüklenicek Kapak Fotoraflarını Seç
                          </label>
                          <input
                            type="file"
                            name="myImage"
                            onChange={this.onImageChange}
                          />
                        </div>
                        <div>
                        <label class="small mb-1" for="inputFirstName">Ürün adını Gir</label>
                                  <input class="form-control" id="inputFirstName" type="text" placeholder="ismi" value="Yosun Tasi Kolye " />
                        </div>
                        <div>
                        <label class="small mb-1" for="inputFirstName">Fiyatı Gir</label>
                                  <input class="form-control" id="inputFirstName" type="text" placeholder="ismi" value="160 " />₺
                        </div>
                        <div>
                        <label class="small mb-1" for="inputFirstName">Stok Sayısı Gir</label>
                                  <input class="form-control" id="inputFirstName" type="text" placeholder="ismi" value="10 " />
                        </div>
                        
                        <div>
                        <label class="small mb-1" for="inputFirstName">Boyutu Gir</label>
                                  <input class="form-control" id="inputFirstName" type="text" placeholder="ismi" value="45 " />cm
                        </div>
                        <div class="row gx-3 mb-3">
                          
  
                          <div class="col-md-12">
                          <h1 className="ml-3 h1__comment__">
                           Açıklama Gir
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
                    <div class="card-header">Ürün Sil</div>
                    <div class="card-body">
                      <form>
                        <div class="row gx-3 mb-3">
                          <div class="col-md-6">
                            <label class="small mb-1" for="inputFirstName">
                              Ürün ID Gir
                            </label>
                            <input
                              class="form-control"
                              id="inputFirstName"
                              type="text"
                              placeholder="ismi"
                              value="#"
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
                  <div class="card card__w mb-4 mt-5">
                    <div class="card-header">Ürün Güncelle</div>
                    <div class="card-body">
                    <div>
                        <label class="small mb-1" for="inputFirstName">Ürün ID Ara</label>
                                  <input class="form-control" id="inputFirstName" type="text" placeholder="ismi" value="# " />
                        </div>
                      <form>
                        <div class="mb-3">
                          <img src={this.state.image} />
                          <label class="small mb-1 mr-3" for="inputFirstName">
                            Yüklenicek Kapak Fotoraflarını Seç
                          </label>
                          <input
                            type="file"
                            name="myImage"
                            onChange={this.onImageChange}
                          />
                        </div>
                        <div>
                        <label class="small mb-1" for="inputFirstName">Ürün adını Gir</label>
                                  <input class="form-control" id="inputFirstName" type="text" placeholder="ismi" value="Yosun Tasi Kolye " />
                        </div>
                        <div>
                        <label class="small mb-1" for="inputFirstName">Fiyatı Gir</label>
                                  <input class="form-control" id="inputFirstName" type="text" placeholder="ismi" value="160 " />₺
                        </div>
                        <div>
                        <label class="small mb-1" for="inputFirstName">Stok Sayısı Gir</label>
                                  <input class="form-control" id="inputFirstName" type="text" placeholder="ismi" value="10 " />
                        </div>
                        
                        <div>
                        <label class="small mb-1" for="inputFirstName">Boyutu Gir</label>
                                  <input class="form-control" id="inputFirstName" type="text" placeholder="ismi" value="45 " />cm
                        </div>
                        <div class="row gx-3 mb-3">
                          
  
                          <div class="col-md-12">
                          <h1 className="ml-3 h1__comment__">
                           Açıklama Gir
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
                  <div className="panel panel-default panel-order ">
                <div className="panel-heading">
                  <strong>Stoktaki Ürünler</strong>
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
                          <a href="#">Yüksek fiyat</a>
                        </li>
                        <li className="li__admin">
                          <a href="#">Düşük Fiyat</a>
                        </li>
                        <li className="li__admin">
                          <a href="#">Stok adeti</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="panel-body ">
                  <div className="row mt-5 mb-3 ">
                    
                    <div className="col-md-12">
                      <div className="row border bg">
                        <div className="col-md-12 my-2 p-5">
                        <img
                        src={necklace}
                        className="media-object img-thumbnail mb-2"
                      />
                          <div className="pull-right ">
                            <label className="label__ ">Stok : 5</label>
                          </div>
                          <span>
                            <strong>Ürün ID : #34532</strong>
                          </span>{" "}
                          <span className="label__">
                            Baby Kolye
                          </span>
                          <br />
                          Fiyat: <b>323.13₺</b> <br />
                          Boyut: <b>45cm</b> <br />
                          Açıklama : <p className="txta">" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle"</p>
                      </div>
                        </div>
                        
                    </div>
                  </div>

                  <div className="row mt-5 mb-3">
                    
                    <div className="col-md-12">
                      <div className="row border bg">
                        <div className="col-md-12 my-2 p-5">
                        <img
                        src={necklace}
                        className="media-object img-thumbnail mb-2"
                      />
                          <div className="pull-right ">
                            <label className="label__ ">Stok : 5</label>
                          </div>
                          <span>
                            <strong>Ürün ID : #34532</strong>
                          </span>{" "}
                          <span className="label__">
                            Baby Kolye
                          </span>
                          <br />
                          Fiyat: <b>323.13₺</b> <br />
                          Boyut: <b>45cm</b> <br />
                          Açıklama : <p className="txta">" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle"</p>
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
  }

export default ProductAdmin