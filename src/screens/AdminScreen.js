import React from "react";
import { Link } from "react-router-dom";
import "../css/css/AdminScreen/Admin.css";
window["test"]();
function AdminScreen() {
  return (
    <div className="bgbio full card__h">
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
            <div className="container mt-5">
              
              <hr />
             
              <div className="row ">
                <div className="panel panel-primary filterable">
                  <div className="panel-heading">
                    <h3 className="panel-title">Kullanıcılar</h3>
                    <div className="pull-right">
                      <button className="btn btn-default btn-xs btn-filter mb-3">
                        <span className="glyphicon glyphicon-filter "></span> Filtrele
                      </button>
                    </div>
                  </div>
                  <table className="table border shadow bg__admin">
                    <thead>
                      <tr className="filters">
                        <th>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="#id"
                            disabled
                          />
                        </th>
                        <th>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Adı"
                            disabled
                          />
                        </th>
                        <th>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Soyadı"
                            disabled
                          />
                        </th>
                        <th>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Kullanıcı Adı"
                            disabled
                          />
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminScreen;
