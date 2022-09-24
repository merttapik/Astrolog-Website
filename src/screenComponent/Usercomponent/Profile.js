import React from 'react'
import { Link } from 'react-router-dom';
import "../../css/css/UserScreen/User.css";

function Profile() {
  return (
    <div className="bgbio  card__h">
      <div className="container bootstrap snippets bootdey ">
        {/*<!-- upper section --> */}
        <div className="row mt-5 ">
          <div className="col-md-3 mt-5 border border-dark">
            {/*<!-- left -->*/}
            
            <Link to="/Profil/id"><strong className="s__p">
              <i className="fa fa-star"></i> Kullanıcı  Adı
              </strong></Link> 
           
            <hr />

            <ul className="  ">
              <li className="my-2">
               <Link to="/Profil/id/ProfilDuzenle"><a className="s__p" href="#">
                  <i className="fa fa-user"></i> Profil
                </a></Link> 
              </li>
              <li className="my-2">
              <Link to="/Profil/id/Sepetim"><a className="s__p" href="#">
                <i className="fa fa-cart-plus"></i> Sepetim
                </a></Link>
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
          </div>
          <div className="col-md-9 ">
          <div className="row ">
          <div class="card card__w mb-4 mt-5">
                <div class="card-header">Profil Detayları</div>
                <div class="card-body">
                    <form>
            
                        <div class="mb-3">
                            <label class="small mb-1" for="inputUsername">Kullanıcı Adın sitede nasıl gözüksün</label>
                            <input class="form-control" id="inputUsername" type="text" placeholder="Enter your username" value="kullanıcı adı" />
                        </div>
              
                        <div class="row gx-3 mb-3">
                   
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputFirstName">İsim</label>
                                <input class="form-control" id="inputFirstName" type="text" placeholder="ismin" value="Zeynep" />
                            </div>
                    
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputLastName">Soyad</label>
                                <input class="form-control" id="inputLastName" type="text" placeholder="soyismin" value="Tapik" />
                            </div>
                        </div>
            
                        <div class="row gx-3 mb-3">
               
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputOrgName">E-mail </label>
                                <input class="form-control" id="inputOrgName" type="text" placeholder="Enter your organization name" value="kullanıcı@örnek.com" />
                            </div>
                      
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputLocation">Şehir</label>
                                <input class="form-control" id="inputLocation" type="text" placeholder="Enter your location" value="İzmir/Türkiye" />
                            </div>
                        </div>
               
                        <div class="mb-3">
                            <label class="small mb-1" for="inputEmailAddress">Adres</label>
                            <input class="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" value="mh. sok. daire. kat." />
                        </div>
                   
                        <div class="row gx-3 mb-3">
                            
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputPhone">Telefon Numaran</label>
                                <input class="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number" value="538729926" />
                            </div>
                        
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputBirthday">Doğum günün</label>
                                <input class="form-control" id="inputBirthday" type="text" name="birthday" placeholder="Enter your birthday" value="06/10/1988" />
                            </div>
                        </div>
                    
                        <button class="btn btn-primary" type="button"> Kaydet</button>
                    </form>
                </div>
            </div>
            <div class="card mb-4 card__w">
                    <div class="card-header">Şifre Değiştir</div>
                    <div class="card-body">
                        <form>
                           
                            <div class="mb-3">
                                <label class="small mb-1" for="currentPassword">Şuanki Şifre</label>
                                <input class="form-control" id="currentPassword" type="password" placeholder="Şuanki Şifreni Gir" />
                            </div>
           
                            <div class="mb-3">
                                <label class="small mb-1" for="newPassword">Yeni Şifre</label>
                                <input class="form-control" id="newPassword" type="password" placeholder="Yeni Şifreni Gir" />
                            </div>
                
                            <div class="mb-3">
                                <label class="small mb-1" for="confirmPassword">Yeni Şifereni Onayla</label>
                                <input class="form-control" id="confirmPassword" type="password" placeholder="Yeni Şifereni Onayla" />
                            </div>
                            <button class="btn btn-primary" type="button">Kaydet</button>
                        </form>
                    </div>
                </div>
                </div>
        </div>
          </div>
        </div>
      
    </div>
  )
}

export default Profile