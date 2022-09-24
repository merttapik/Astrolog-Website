import React from "react";
import "../css/css/UserScreen/User.css";
import { Link } from "react-router-dom";
import profilebase from "../img/profilebase.png"
function UserProfileScreen() {
  return (
    <div className="bgbio full card__h">
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
          <img className="img__base" src={profilebase}></img>
        </div>
          </div>
        </div>
      
    </div>
  );
}

export default UserProfileScreen;
