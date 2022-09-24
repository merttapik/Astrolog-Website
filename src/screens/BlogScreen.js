import React from "react";
import "../css/css/BlogScreen/Blog.css";
import SmallNav from "../components/SmallNav";
import blogphoto from "../img/blogphoto.png";
import { Link } from "react-router-dom";
function BlogScreen() {
  return (
    <div className="bgbio">
      <SmallNav />
      <div className="container mt-3 mt-sm-5">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-8">
            <h1 className="h1__blog">Son Blog Yazılarım</h1>

            <article className="mb-3 border__">
              <header className="mb-2">
                <a href="#" className="badge badge-pill badge-cate a__size">
                  Kategori
                </a>
                <h1 className="main-title p-2 h1__blog__category ">
                  Genel
                </h1>
                <div>
                  <div className="small p-2">
                    Yazım Tarihi:
                    <time>13.03.2022</time>
                  </div>
                  <div className="small"></div>
                  <div className="small">
                    <a href="#" className="badge badge-pill badge-tags">
                      #tag
                    </a>
                    <a href="#" className="badge badge-pill badge-tags">
                      #othertag
                    </a>
                    <a href="#" className="badge badge-pill badge-tags">
                      #anothertag
                    </a>
                    <a href="#" className="badge badge-pill badge-tags">
                      #tag
                    </a>
                    <a href="#" className="badge badge-pill badge-tags">
                      #someothertag
                    </a>
                  </div>
                </div>
              </header>
              <figure className="figure p-2">
              <div className="inner">
              <img src={blogphoto} className="figure-img   " />
              </div>
                
                <figcaption className="figure-caption small">
                  <p className="mb-0 p-2 p__blog">
                    <i className="fas fa-utensils" aria-hidden="true"></i>
                    14 Mart Haftası Burç Yorumları
                  </p>
                </figcaption>
              </figure>
              <p className="p__blog__list p-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae doloremque officiis nemo rem, quia reiciendis quasi
                harum qui temporibus! Laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae doloremque officiis nemo rem, quia reiciendis quasi
                harum qui temporibus! Laboriosam...
              </p>
             <Link to="/Blog/id"><a href="" className="btn btn__width main-btn mb-3 ml-2">
                Devamını Oku...
              </a></Link> 
            </article>
            <article className="mb-3 border__">
              <header className="mb-2">
                <a href="#" className="badge badge-pill badge-cate a__size">
                  Kategori
                </a>
                <h1 className="main-title p-2 h1__blog__category ">
                  Genel
                </h1>
                <div>
                  <div className="small p-2">
                    Yazım Tarihi:
                    <time>13.03.2022</time>
                  </div>
                  <div className="small"></div>
                  <div className="small">
                    <a href="#" className="badge badge-pill badge-tags">
                      #tag
                    </a>
                    <a href="#" className="badge badge-pill badge-tags">
                      #othertag
                    </a>
                    <a href="#" className="badge badge-pill badge-tags">
                      #anothertag
                    </a>
                    <a href="#" className="badge badge-pill badge-tags">
                      #tag
                    </a>
                    <a href="#" className="badge badge-pill badge-tags">
                      #someothertag
                    </a>
                  </div>
                </div>
              </header>
              <figure className="figure p-2">
              <div className="inner">
              <img src={blogphoto} className="figure-img   " />
              </div>
                
                <figcaption className="figure-caption small">
                  <p className="mb-0 p-2 p__blog">
                    <i className="fas fa-utensils" aria-hidden="true"></i>
                    14 Mart Haftası Burç Yorumları
                  </p>
                </figcaption>
              </figure>
              <p className="p__blog__list p-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae doloremque officiis nemo rem, quia reiciendis quasi
                harum qui temporibus! Laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae doloremque officiis nemo rem, quia reiciendis quasi
                harum qui temporibus! Laboriosam...
              </p>
              <Link to="/Blog/id"><a href="" className="btn btn__width main-btn mb-3 ml-2">
                Devamını Oku...
              </a></Link>
            </article>
            <article className="mb-3 border__">
              <header className="mb-2">
                <a href="#" className="badge badge-pill badge-cate a__size">
                  Kategori
                </a>
                <h1 className="main-title p-2 h1__blog__category ">
                  Genel
                </h1>
                <div>
                  <div className="small p-2">
                    Yazım Tarihi:
                    <time>13.03.2022</time>
                  </div>
                  <div className="small"></div>
                  <div className="small">
                    <a href="#" className="badge badge-pill badge-tags">
                      #tag
                    </a>
                    <a href="#" className="badge badge-pill badge-tags">
                      #othertag
                    </a>
                    <a href="#" className="badge badge-pill badge-tags">
                      #anothertag
                    </a>
                    <a href="#" className="badge badge-pill badge-tags">
                      #tag
                    </a>
                    <a href="#" className="badge badge-pill badge-tags">
                      #someothertag
                    </a>
                  </div>
                </div>
              </header>
              <figure className="figure p-2">
              <div className="inner">
              <img src={blogphoto} className="figure-img   " />
              </div>
                
                <figcaption className="figure-caption small">
                  <p className="mb-0 p-2 p__blog">
                    <i className="fas fa-utensils" aria-hidden="true"></i>
                    14 Mart Haftası Burç Yorumları
                  </p>
                </figcaption>
              </figure>
              <p className="p__blog__list p-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae doloremque officiis nemo rem, quia reiciendis quasi
                harum qui temporibus! Laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae doloremque officiis nemo rem, quia reiciendis quasi
                harum qui temporibus! Laboriosam...
              </p>
              <a href="" className="btn btn__width main-btn mb-3 ml-2">
                Devamını Oku...
              </a>
            </article>
            <article className="mb-3 border__">
              <header className="mb-2">
                <a href="#" className="badge badge-pill badge-cate a__size">
                  Kategori
                </a>
                <h1 className="main-title p-2 h1__blog__category ">
                  Genel
                </h1>
                <div>
                  <div className="small p-2">
                    Yazım Tarihi:
                    <time>13.03.2022</time>
                  </div>
                  <div className="small"></div>
                  <div className="small">
                    <a href="#" className="badge badge-pill badge-tags">
                      #tag
                    </a>
                    <a href="#" className="badge badge-pill badge-tags">
                      #othertag
                    </a>
                    <a href="#" className="badge badge-pill badge-tags">
                      #anothertag
                    </a>
                    <a href="#" className="badge badge-pill badge-tags">
                      #tag
                    </a>
                    <a href="#" className="badge badge-pill badge-tags">
                      #someothertag
                    </a>
                  </div>
                </div>
              </header>
              <figure className="figure p-2">
              <div className="inner">
              <img src={blogphoto} className="figure-img   " />
              </div>
                
                <figcaption className="figure-caption small">
                  <p className="mb-0 p-2 p__blog">
                    <i className="fas fa-utensils" aria-hidden="true"></i>
                    14 Mart Haftası Burç Yorumları
                  </p>
                </figcaption>
              </figure>
              <p className="p__blog__list p-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae doloremque officiis nemo rem, quia reiciendis quasi
                harum qui temporibus! Laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae doloremque officiis nemo rem, quia reiciendis quasi
                harum qui temporibus! Laboriosam...
              </p>
              <a href="" className="btn btn__width main-btn mb-3 ml-2">
                Devamını Oku...
              </a>
            </article>
            

            

            

            

            <div>
              <nav aria-label="Blog Pages">
                <ul className="pagination justify-content-center">
                  <li className="page-item">
                  <a href="#" className="page-link" aria-label="Next">
                        Önceki
                    </a>
                  </li>
                  <li className="page-item active">
                    <a href="#" className="page-link">
                      1 <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="" className="page-link">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="" className="page-link">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="" className="page-link">
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    {" "}
                    <a href="" className="page-link">
                      5
                    </a>
                  </li>

                  <li className="page-item">
                    <a href="#" className="page-link" aria-label="Next">
                        Sonraki
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <aside>
              
            <div className="card w-100 none__hover">
                <div className="card-body bg-light">
                
                  <form>
                    <div className="input-group mb-2">
                      <input
                        type="text"
                        className="form-control mx-2"
                        name="search"
                        placeholder="Arama Yap"
                        aria-describedby="addon-left"
                        required
                      />
                    </div>
                    <button type="submit" className="btn main-btn w-25" >
                    <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/></svg>
                    </button>
                  </form>
                </div>
              </div>
              <h2 className="mb-3">Son Yazılarım</h2>
              <div className="list-group mb-3">
                <a href="" className="list-group-item list-group-item-action">
                  <div className="badge badge-cate float-right">Genel</div>
                  <h5 className="post-title">14 Mart Haftası Burç Yorumları</h5>
                  <div className="small mb-2 sub-title ">
                   
                
                    Yazım Tarihi:
                    <time>13.03.2022</time>
                  </div>
                
                  <p className="mb-0 p__recent">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae, voluptatem Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae, voluptatem..
                  </p>
                </a> 
              </div>
              <div className="list-group mb-3">
                <a href="" className="list-group-item list-group-item-action">
                  <div className="badge badge-cate float-right">Genel</div>
                  <h5 className="post-title">14 Mart Haftası Burç Yorumları</h5>
                  <div className="small mb-2 sub-title ">
                   
                
                    Yazım Tarihi:
                    <time>13.03.2022</time>
                  </div>
                
                  <p className="mb-0 p__recent">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae, voluptatem Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae, voluptatem..
                  </p>
                </a> 
              </div>
              <div className="list-group mb-3">
                <a href="" className="list-group-item list-group-item-action">
                  <div className="badge badge-cate float-right">Genel</div>
                  <h5 className="post-title">14 Mart Haftası Burç Yorumları</h5>
                  <div className="small mb-2 sub-title ">
                   
                
                    Yazım Tarihi:
                    <time>13.03.2022</time>
                  </div>
                
                  <p className="mb-0 p__recent">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae, voluptatem Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae, voluptatem..
                  </p>
                </a> 
              </div>
              <div className="list-group mb-3">
                <a href="" className="list-group-item list-group-item-action">
                  <div className="badge badge-cate float-right">Genel</div>
                  <h5 className="post-title">14 Mart Haftası Burç Yorumları</h5>
                  <div className="small mb-2 sub-title ">
                   
                
                    Yazım Tarihi:
                    <time>13.03.2022</time>
                  </div>
                
                  <p className="mb-0 p__recent">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae, voluptatem Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae, voluptatem..
                  </p>
                </a> 
              </div>

              <h2 className="mb-3">Kategoriler</h2>
              <div className="list-group mb-3">
                <a
                  href=""
                  className="list-group-item list-group-item-action text-black bg-light"
                >
                  <i className="fas fa-utensils"></i>
                  Genel
                </a>
                <a
                  href=""
                  className="list-group-item list-group-item-action text-black bg-light"
                >
                  <i className="fas fa-apple-alt"></i>
                  Haftalık Burç Yorumalrı 
                </a>
                <a
                  href=""
                  className="list-group-item list-group-item-action text-black bg-light"
                >
                  <i className="fas fa-mug-hot"></i>
                  Aylık Burç Yorumları
                </a>
                <a
                  href=""
                  className="list-group-item list-group-item-action text-black bg-light"
                >
                  <i className="fas fa-cookie"></i>
                  Başak
                </a>
                <a
                  href=""
                  className="list-group-item list-group-item-action text-black bg-light"
                >
                  <i className="fas fa-bread-slice"></i>
                  Terazi
                </a>
                <a
                  href=""
                  className="list-group-item list-group-item-action text-black bg-light"
                >
                  <i className="fas fa-bread-slice"></i>
                  Akrep
                </a>
                <a
                  href=""
                  className="list-group-item list-group-item-action text-black bg-light"
                >
                  <i className="fas fa-bread-slice"></i>
                  Yay
                </a>
                <a
                  href=""
                  className="list-group-item list-group-item-action text-black bg-light"
                >
                  <i className="fas fa-bread-slice"></i>
                  Oğlak
                </a>
                <a
                  href=""
                  className="list-group-item list-group-item-action text-black bg-light"
                >
                  <i className="fas fa-bread-slice"></i>
                  Kova
                </a>
                <a
                  href=""
                  className="list-group-item list-group-item-action text-black bg-light"
                >
                  <i className="fas fa-bread-slice"></i>
                  Balık
                </a>
                <a
                  href=""
                  className="list-group-item list-group-item-action text-black bg-light"
                >
                  <i className="fas fa-bread-slice"></i>
                  Koç
                </a>
                <a
                  href=""
                  className="list-group-item list-group-item-action text-black bg-light"
                >
                  <i className="fas fa-bread-slice"></i>
                  Boğa
                </a>
                <a
                  href=""
                  className="list-group-item list-group-item-action text-black bg-light"
                >
                  <i className="fas fa-bread-slice"></i>
                  İkizler
                </a>
                <a
                  href=""
                  className="list-group-item list-group-item-action text-black bg-light"
                >
                  <i className="fas fa-bread-slice"></i>
                  Yengeç
                </a>
                <a
                  href=""
                  className="list-group-item list-group-item-action text-black bg-light"
                >
                  <i className="fas fa-bread-slice"></i>
                  Aslan
                </a>

              </div>

              

              <div className="card mb-3 w-100">
                <div className="card-body">
                  <h5 className="card-title pl-4">Blog hakkında</h5>
                  <p className="card-text main-title p__recent__">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis beatae minima quasi, quidem nobis, placeat
                    molestiae ullam rem quia perferendis expedita inventore,
                    error animi ut.
                    <a href="">Read more..</a>
                  </p>
                </div>
              </div>

             
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogScreen;
