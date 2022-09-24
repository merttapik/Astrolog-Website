import React from "react";
import { Link } from "react-router-dom";
import "../../css/css/UserScreen/User.css";
function CommentUser() {
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
                <Link to="/Profil/id/Randevularim">
                  <a className="s__p" href="#">
                    <i className="fa fa-calendar"></i> Randevularım
                  </a>
                </Link>
              </li>
              <li className="my-2">
                <Link to="/Profil/id/Yorumum">
                  <a className="s__p" href="#">
                    <i className="fa fa-comment"></i> Yorum Yap
                  </a>
                </Link>
              </li>
            </ul>

            <hr />
          </div>
          <div className="col-md-9 ">
            <div className="row mt-5">
              <h1 className="ml-3 h1__comment__">
                Yorumunu Yap Ana Sayfada Gözüksün
              </h1>
            </div>
            <textarea className="mt-3 ml-3 txta" rows="10" cols="80">
              " Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galle"
            </textarea>
            <button className="btn btn__c ml-3">Gönder</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentUser;
