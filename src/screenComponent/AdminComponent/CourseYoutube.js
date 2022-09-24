import React , { Component } from 'react'
import { Link } from "react-router-dom";
import "../../css/css/AdminScreen/Admin.css";
class CourseYoutube extends Component {
    constructor(props) {
      super(props);
      this.state = {
        image: null
      };
  
      this.onImageChange = this.onImageChange.bind(this);
    }
  
    onImageChange = event => {
      if (event.target.files && event.target.files[0]) {
        let img = event.target.files[0];
        this.setState({
          image: URL.createObjectURL(img)
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
                <div class="card-header">Eğitim Ekle</div>
                <div class="card-body">
                    <form>
            
                        <div class="mb-3">
                           <img src={this.state.image} />
                           <label class="small mb-1 mr-3" for="inputFirstName">Yüklenicek Kapak Fotorafını Seç</label>
                               <input type="file" name="myImage" onChange={this.onImageChange} />

                        </div>
              
                        <div class="row gx-3 mb-3">
                   
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputFirstName">Kursun İsmi</label>
                                <input class="form-control" id="inputFirstName" type="text" placeholder="ismi" value="Reiki 1" />
                            </div>
                    
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputLastName">Kursun Açıklaması</label>
                                <input class="form-control" id="inputLastName" type="text" placeholder="aciklama" value="Astrolojiye İlk adim" />
                            </div>
                        </div>
                    
                        <button class="btn btn-primary" type="button"> Ekle</button>
                        
                    </form>
                </div>
            </div>
            <div class="card card__w mb-4 mt-5">
                <div class="card-header">Eğitim Sil</div>
                <div class="card-body">
                    <form>
              
                        <div class="row gx-3 mb-3">
                   
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputFirstName">Kursun İsmi</label>
                                <input class="form-control" id="inputFirstName" type="text" placeholder="ismi" value="Reiki 1" />
                            </div>
                        </div>
                    
                        <button class="btn btn-primary" type="button"> Sil</button>
                        
                    </form>
                </div>
            </div>
            <div class="card card__w mb-4 mt-5">
                <div class="card-header">Youtube Videosu Ekle</div>
                <div class="card-body">
                    <form>
                        <div class="row gx-3 mb-3">
                   
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputFirstName">Video URL 'i</label>
                                <input class="form-control" id="inputFirstName" type="text" placeholder="ismi" value="https://www.youtube.com/watch?v=-8qifzv_F4Q " />
                            </div>
                        </div>
                    
                        <button class="btn btn-primary" type="button"> Ekle</button>
                        
                    </form>
                </div>
            </div>
            <div class="card card__w mb-4 mt-5">
                <div class="card-header">Youtube Videosu Sil</div>
                <div class="card-body">
                    <form>
                        <div class="row gx-3 mb-3">
                   
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputFirstName">Video URL 'i</label>
                                <input class="form-control" id="inputFirstName" type="text" placeholder="ismi" value="https://www.youtube.com/watch?v=-8qifzv_F4Q " />
                            </div>
                        </div>
                    
                        <button class="btn btn-primary" type="button"> Sil</button>
                        
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

export default CourseYoutube;