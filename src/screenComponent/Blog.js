import React from "react";
import { Link } from "react-router-dom";
import "../css/css/HomeScreen/Blog.css";
import blogphoto from "../img/blogphoto.png";

function Blog() {
  return (
    <div className="service component__space bg2">
    <div className="d-flex justify-content-center"><h1 className="blogh1">Blog Yazılarım</h1></div>
      <div className="container-fluid d-flex justify-content-center mb-5">
       
        <div className="row  ">
        
          <div className=" cardpositon col-lg-4 col-md-6 col-sm-12    mt-5">
            <div className="card text-center ">
              <div className="overflow">
                <img src={blogphoto} className="card-img-top" />
                <div className="card-body text-dark">
                  <h4 className="card-title"></h4>
                  <p className="card-text text-secondary p__">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley
                  </p>
                 <Link to="/Blog/id"><a href="#" className="btn ">Devamını Oku</a></Link> 
                </div>
              </div>
            </div>
          </div>
          <div className=" cardpositon col-lg-4 col-md-6 col-sm-12  mt-5 ">
          <div className="card text-center">
              <div className="overflow">
                <img src={blogphoto} className="card-img-top" />
                <div className="card-body text-dark">
                  <h4 className="card-title"></h4>
                  <p className="card-text text-secondary p__">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley
                  </p>
                  <a href="#" className="btn ">Devamını Oku</a>
                </div>
              </div>
            </div>
          </div>
          <div className=" cardpositon col-lg-4 col-md-6 col-sm-12  mt-5">
          <div className="card text-center">
              <div className="overflow">
                <img src={blogphoto} className="card-img-top" />
                <div className="card-body text-dark">
                  <h4 className="card-title"></h4>
                  <p className="card-text text-secondary p__">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley
                  </p>
                  <a href="#" className="btn ">
                      Devamını Oku
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
