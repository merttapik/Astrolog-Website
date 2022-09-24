import React from "react";
import "../css/css/HomeScreen/Comment.css";
import wprofile from "../img/woman.png";

function Comment() {
  return (
    <div className="about component__space height" id="About">
      <div className="container-xl ml-5">
        <div className="row">
          <div className="col-md-6 col-sm-12 course__box mw-100% mh-100% border d-flex justify-content-end he__">
           
              <h1 className="comment  ">Seans Almış Kullanıcı Yorumları</h1>
           
          </div>
          <div className="col-md-6 col-sm-12 course__box2 mw-100% mh-100% ">
           <div className="row">
            <div className="mt-5 col-12 mt-5  ">
              <div className="col-md-6 mb-4">
                <img className="borrad" src={wprofile}></img>
              </div>
              <div className="col-6">
                <p>
                  " Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley".
                </p>
              </div>
            </div>
            <div className="mt-5 col-12 mt-5 ">
              <div className="col-6 mb-4">
                <img className="borrad" src={wprofile}></img>
              </div>
              <div className="col-6">
                <p>
                  " Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley".
                </p>
              </div>
            </div>
            <div className="mt-5 col-12 mt-5 ">
              <div className="col-6 mb-4">
                <img className="borrad" src={wprofile}></img>
              </div>
              <div className="col-6">
                <p>
                  " Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley".
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
