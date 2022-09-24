import React from "react";
import SmallNav from "../components/SmallNav";
import "../css/css/ProductScreen/Product.css";
import slider1 from "../img/productslider1.png";
import slider2 from "../img/productslider2.png";
import slider3 from "../img/productslider3.png";
import necklace from "../img/necklace.png";
import necklace2 from "../img/necklace2.png";
import bracelet from "../img/bracelet.png";
import bracelet2 from "../img/bracelet2.png";
import lnecklace from "../img/limitednecklace.png";
import lnecklace2 from "../img/limitednecklace2.png";
import rituel from "../img/rituel.png";
import earings from "../img/earings.png";
import baby from "../img/baby.png";
import { Link } from "react-router-dom";

function ProductScreen() {
  return (
    <div className="bgbio">
      <SmallNav />
      <div
        id="carouselExampleIndicators"
        className="carousel slide "
        data-ride="carousel"
        data-interval="false"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block img__size"
              src={slider1}
              alt="First slide"
            />
            <div class="carousel-caption d-none d-md-block text-left">
              <h1 className="h1__slider">Bu yılın yeni taşlerını görün</h1>
              <a class="btn btn__slider btn-lg btn-primary">
                Alışveriş Yap
                <svg
                  className="pr-1  svg__slider "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM406.6 278.6l-103.1 103.1c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L306.8 288H128C110.3 288 96 273.7 96 256s14.31-32 32-32h178.8l-49.38-49.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l103.1 103.1C414.6 241.3 416 251.1 416 256C416 260.9 414.6 270.7 406.6 278.6z" />
                </svg>{" "}
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block img__size"
              src={slider2}
              alt="Second slide"
            />
            <div class="carousel-caption d-none d-md-block text-left">
              <h1 className="h1__slider">
                Doğal taşlı özel üretim küpeleri görün
              </h1>
              <a class="btn btn__slider btn-lg btn-primary">
                Alışveriş Yap
                <svg
                  className="pr-1  svg__slider "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM406.6 278.6l-103.1 103.1c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L306.8 288H128C110.3 288 96 273.7 96 256s14.31-32 32-32h178.8l-49.38-49.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l103.1 103.1C414.6 241.3 416 251.1 416 256C416 260.9 414.6 270.7 406.6 278.6z" />
                </svg>{" "}
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block img__size"
              src={slider3}
              alt="Third slide"
            />
            <div class="carousel-caption d-none d-md-block text-left">
              <h1 className="h1__slider">Limeted editon Kolye serisi </h1>
              <a class="btn btn__slider btn-lg btn-primary">
                Alışveriş Yap
                <svg
                  className="pr-1  svg__slider "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM406.6 278.6l-103.1 103.1c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L306.8 288H128C110.3 288 96 273.7 96 256s14.31-32 32-32h178.8l-49.38-49.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l103.1 103.1C414.6 241.3 416 251.1 416 256C416 260.9 414.6 270.7 406.6 278.6z" />
                </svg>{" "}
              </a>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="row ">
        <div className="col-md-4 col-sm-12 mt-5">
          <a href="#baby">
            <div class="card card__h bg-dark text-white">
              <img class="card-img" src={necklace} alt="Card image" />
              <div class="card-img-overlay">
                <h2 class="card-title h2__product">
                  Altın Kaplama Baby Kolye Serisi
                </h2>
                <p className="card-text p__normal ">
                  Alışveriş Yap
                  <svg
                    className="pr-1  svg__slider "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM406.6 278.6l-103.1 103.1c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L306.8 288H128C110.3 288 96 273.7 96 256s14.31-32 32-32h178.8l-49.38-49.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l103.1 103.1C414.6 241.3 416 251.1 416 256C416 260.9 414.6 270.7 406.6 278.6z" />
                  </svg>{" "}
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-4 col-sm-12 mt-5">
          <a href="#">
            <div class="card card__h bg-dark text-white">
              <img class="card-img" src={necklace} alt="Card image" />
              <div class="card-img-overlay">
                <h2 class="card-title h2__product">
                  Altın Kaplama Özel Seri Kolyeler
                </h2>
                <p className="card-text p__normal ">
                  Alışveriş Yap
                  <svg
                    className="pr-1  svg__slider "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM406.6 278.6l-103.1 103.1c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L306.8 288H128C110.3 288 96 273.7 96 256s14.31-32 32-32h178.8l-49.38-49.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l103.1 103.1C414.6 241.3 416 251.1 416 256C416 260.9 414.6 270.7 406.6 278.6z" />
                  </svg>{" "}
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-4 col-sm-12 mt-5">
          <a href="#">
            <div class="card card__h bg-dark text-white">
              <img class="card-img" src={necklace} alt="Card image" />
              <div class="card-img-overlay">
                <h2 class="card-title h2__product">Ritüel Kitleri</h2>
                <p className="card-text p__normal ">
                  Alışveriş Yap
                  <svg
                    className="pr-1  svg__slider "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM406.6 278.6l-103.1 103.1c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L306.8 288H128C110.3 288 96 273.7 96 256s14.31-32 32-32h178.8l-49.38-49.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l103.1 103.1C414.6 241.3 416 251.1 416 256C416 260.9 414.6 270.7 406.6 278.6z" />
                  </svg>{" "}
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="row mt-5 d-flex justify-conetnt-center">
          <h1 className="mt-5 h1__product">Doğal Taş Kolyeler</h1>
          <p className="p__product">
            Son eklenen doğal taş kolyeleri keşfe çık
          </p>
        </div>
        <div className="container ">
          <div className="row">
            <div className="col-md-3 col-sm-6 mt-5">
              <div className="card my-3 w-100 text-center">
                <img src={necklace2} className="card-img-top"></img>
                <div className="card-body">
                  <h4 className="card-title">Yosun Taşı Kolye</h4>

                  <p className="card-text p__normal p__card">160,00 ₺</p>
                 <Link to="/Urunlerim/id"><a className="btn card-link">Ürünü İncele </a></Link> 
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mt-5">
              <div className="card my-3 w-100 text-center">
                <img src={necklace2} className="card-img-top"></img>
                <div className="card-body">
                  <h4 className="card-title">Yosun Taşı Kolye</h4>

                  <p className="card-text p__normal p__card">160,00 ₺</p>
                  <a className="btn card-link">Ürünü İncele </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mt-5">
              <div className="card my-3 w-100 text-center">
                <img src={necklace2} className="card-img-top"></img>
                <div className="card-body">
                  <h4 className="card-title">Yosun Taşı Kolye</h4>

                  <p className="card-text p__normal p__card">160,00 ₺</p>
                  <a className="btn card-link">Ürünü İncele </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mt-5">
              <div className="card my-3 w-100 text-center">
                <img src={necklace2} className="card-img-top "></img>
                <div className="card-body">
                  <h4 className="card-title">Yosun Taşı Kolye</h4>

                  <p className="card-text p__normal p__card">160,00 ₺</p>
                  <a className="btn card-link">Ürünü İncele </a>
                </div>
              </div>
            </div>
          </div>
          <a className="btn a__product ">Daha Fazlasını Gör</a>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <a href="#">
                <div class="card bg-dark text-white">
                  <img
                    class="card-img img__product"
                    src={lnecklace}
                    alt="Card image"
                  />
                  <div class="card-img-overlay">
                    <div className="card-title-cont">
                      <h5 class="card-title h5__product ">
                        Limeted Edition Kolyeler
                      </h5>
                    </div>
                    <p class="card-text p__product2">
                      Sınırlı sayıda her biri ayrı seri numarasına sahip
                      kolyeler
                    </p>
                    <p class="card-text p__normal">
                      Göz At{" "}
                      <svg
                        className="pr-1  svg__slider2 "
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM406.6 278.6l-103.1 103.1c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L306.8 288H128C110.3 288 96 273.7 96 256s14.31-32 32-32h178.8l-49.38-49.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l103.1 103.1C414.6 241.3 416 251.1 416 256C416 260.9 414.6 270.7 406.6 278.6z" />
                      </svg>{" "}
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-sm-12">
              <a href="#">
                <div class="card bg-dark text-white">
                  <img class="card-img img__product" src={bracelet2} alt="Card image" />
                  <div class="card-img-overlay">
                    <div className="card-title-cont">
                      <h5 class="card-title h5__product ">
                        Doğal Taş Bileklikler
                      </h5>
                    </div>

                    <p class="card-text p__normal mt-5">
                      Göz At{" "}
                      <svg
                        className="pr-1  svg__slider2 "
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM406.6 278.6l-103.1 103.1c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L306.8 288H128C110.3 288 96 273.7 96 256s14.31-32 32-32h178.8l-49.38-49.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l103.1 103.1C414.6 241.3 416 251.1 416 256C416 260.9 414.6 270.7 406.6 278.6z" />
                      </svg>{" "}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="row mt-5 d-flex justify-conetnt-center">
          <h1 className="mt-5 h1__product">Doğal Taş Küpeler</h1>
          <p className="p__product">
            Son eklenen doğal taş küpeleri keşfe çık
          </p>
        </div>
        <div className="container">
          <div className="row">
          <div className="col-md-3 col-sm-6 mt-5">
              <div className="card my-3 w-100 text-center">
                <img src={earings} className="card-img-top"></img>
                <div className="card-body">
                  <h4 className="card-title">Apatit Taşı Küpe</h4>

                  <p className="card-text p__normal p__card">120,00 ₺</p>
                  <a className="btn card-link">Ürünü İncele </a>
                </div>
              </div> 
            </div>
            <div className="col-md-3 col-sm-6 mt-5">
              <div className="card my-3 w-100 text-center">
                <img src={earings} className="card-img-top"></img>
                <div className="card-body">
                  <h4 className="card-title">Apatit Taşı Küpe</h4>

                  <p className="card-text p__normal p__card">120,00 ₺</p>
                  <a className="btn card-link">Ürünü İncele </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mt-5">
              <div className="card my-3 w-100 text-center">
                <img src={earings} className="card-img-top"></img>
                <div className="card-body">
                  <h4 className="card-title">Apatit Taşı Küpe</h4>

                  <p className="card-text p__normal p__card">120,00 ₺</p>
                  <a className="btn card-link">Ürünü İncele </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mt-5">
              <div className="card my-3 w-100 text-center">
                <img src={earings} className="card-img-top"></img>
                <div className="card-body">
                  <h4 className="card-title">Apatit Taşı Küpe</h4>

                  <p className="card-text p__normal p__card">120,00 ₺</p>
                  <a className="btn card-link">Ürünü İncele </a>
                </div>
              </div>
            </div>
          </div>
          <a className="btn a__product ">Daha Fazlasını Gör</a>
        </div>
        <section class="pt-5 pb-5">
          <div class="container">
            <div class="row">
              <div class="col-6">
              <h1 className="mt-5 mb-3 h1__product"> Ritüel Kitleri</h1>
              <p className="p__product3 ">Niyetine göre ritüelini seç</p>
              </div>
              <div class="col-6 text-right mt-5">
                <a
                  class="btn btn__slider mb-3 mr-1"
                  href="#carouselExampleIndicators2"
                  role="button"
                  data-slide="prev"
                >
                  <svg className="svg__slider" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg>
                </a>
                <a
                  class="btn btn__slider mb-3 "
                  href="#carouselExampleIndicators2"
                  role="button"
                  data-slide="next"
                >
                  <svg className="svg__slider" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"/></svg>
                </a>
              </div>
              <div class="col-12">
                <div
                  id="carouselExampleIndicators2"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <div class="row">
                        <div className="col-md-3 col-sm-6 mt-5">
                          <div className="card my-3 w-100 text-center">
                            <img src={rituel} className="card-img-top"></img>
                            <div className="card-body">
                              <h4 className="card-title">
                                Aşk & Sevgi Ritüel Kiti
                              </h4>

                              <p className="card-text p__normal p__card">
                                160,00 ₺
                              </p>
                              <a className="btn card-link">Ürünü İncele </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-6 mt-5">
                          <div className="card my-3 w-100 text-center">
                            <img src={rituel} className="card-img-top"></img>
                            <div className="card-body">
                              <h4 className="card-title">
                                Bolluk Bereket Ritüel Kiti
                              </h4>

                              <p className="card-text p__normal p__card">
                                160,00 ₺
                              </p>
                              <a className="btn card-link">Ürünü İncele </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-6 mt-5">
                          <div className="card my-3 w-100 text-center">
                            <img src={rituel} className="card-img-top"></img>
                            <div className="card-body">
                              <h4 className="card-title">
                                Bağ Koparma Ritüel Kiti
                              </h4>

                              <p className="card-text p__normal p__card">
                                160,00 ₺
                              </p>
                              <a className="btn card-link">Ürünü İncele </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-6 mt-5">
                          <div className="card my-3 w-100 text-center">
                            <img src={rituel} className="card-img-top"></img>
                            <div className="card-body">
                              <h4 className="card-title">
                                Sağlık & Neşe Ritüel Kiti
                              </h4>

                              <p className="card-text p__normal p__card">
                                160,00 ₺
                              </p>
                              <a className="btn card-link">Ürünü İncele </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="row">
                        <div className="col-md-3 col-sm-6 mt-5">
                          <div className="card my-3 w-100 text-center">
                            <img src={rituel} className="card-img-top"></img>
                            <div className="card-body">
                              <h4 className="card-title">
                                Aşk & Sevgi Ritüel Kiti
                              </h4>

                              <p className="card-text p__normal p__card">
                                160,00 ₺
                              </p>
                              <a className="btn card-link">Ürünü İncele </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-6 mt-5">
                          <div className="card my-3 w-100 text-center">
                            <img src={rituel} className="card-img-top"></img>
                            <div className="card-body">
                              <h4 className="card-title">
                                Bolluk Bereket Ritüel Kiti
                              </h4>

                              <p className="card-text p__normal p__card">
                                160,00 ₺
                              </p>
                              <a className="btn card-link">Ürünü İncele </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-6 mt-5">
                          <div className="card my-3 w-100 text-center">
                            <img src={rituel} className="card-img-top"></img>
                            <div className="card-body">
                              <h4 className="card-title">
                                Bağ Koparma Ritüel Kiti
                              </h4>

                              <p className="card-text p__normal p__card">
                                160,00 ₺
                              </p>
                              <a className="btn card-link">Ürünü İncele </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-6 mt-5">
                          <div className="card my-3 w-100 text-center">
                            <img src={rituel} className="card-img-top"></img>
                            <div className="card-body">
                              <h4 className="card-title">
                                Sağlık & Neşe Ritüel Kiti
                              </h4>

                              <p className="card-text p__normal p__card">
                                160,00 ₺
                              </p>
                              <a className="btn card-link">Ürünü İncele </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="row">
                        <div className="col-md-3 col-sm-6 mt-5">
                          <div className="card my-3 w-100 text-center">
                            <img src={rituel} className="card-img-top"></img>
                            <div className="card-body">
                              <h4 className="card-title">
                                Aşk & Sevgi Ritüel Kiti
                              </h4>

                              <p className="card-text p__normal p__card">
                                160,00 ₺
                              </p>
                              <a className="btn card-link">Ürünü İncele </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-6 mt-5">
                          <div className="card my-3 w-100 text-center">
                            <img src={rituel} className="card-img-top"></img>
                            <div className="card-body">
                              <h4 className="card-title">
                                Bolluk Bereket Ritüel Kiti
                              </h4>

                              <p className="card-text p__normal p__card">
                                160,00 ₺
                              </p>
                              <a className="btn card-link">Ürünü İncele </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-6 mt-5">
                          <div className="card my-3 w-100 text-center">
                            <img src={rituel} className="card-img-top"></img>
                            <div className="card-body">
                              <h4 className="card-title">
                                Bağ Koparma Ritüel Kiti
                              </h4>

                              <p className="card-text p__normal p__card">
                                160,00 ₺
                              </p>
                              <a className="btn card-link">Ürünü İncele </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-6 mt-5">
                          <div className="card my-3 w-100 text-center">
                            <img src={rituel} className="card-img-top"></img>
                            <div className="card-body">
                              <h4 className="card-title">
                                Sağlık & Neşe Ritüel Kiti
                              </h4>

                              <p className="card-text p__normal p__card">
                                160,00 ₺
                              </p>
                              <a className="btn card-link">Ürünü İncele </a>
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
        </section>
         <div className="container">
           <div className="row">
           <div className="col-md-6 col-sm-12 d-flex justify-content-center">
           <div className="videoWrapper2 ">
            <h1 className="h1__product__viedo">Ritüel Kitleri Ne İşe Yarar ?</h1> 
            <p className="p__video">Hayatınıza: Aşkı, bolluğu, bereketi, şansı çekin! İstemediğiniz bağlarınızı kopartın! Detaylı bilgi için Ritüel kiti tanıtım videomuzu izleyin.</p>
            </div>
           </div>
           <div className="col-md-6 col-sm-12">
           <div className="videow mb-5">
            <iframe
              className="mt-5 responsive"
              src="https://www.youtube.com/embed/2Kqyzh4wGrM"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
              title="video"
              width={1000}
              height={500}
            />
          </div>
           </div>
           </div>
         </div>
         {/*doğal taş bileklikler */}
         <div className="row mt-5 d-flex justify-conetnt-center">
          <h1 className="mt-5 h1__product">Doğal Taş Bileklikler</h1>
          <p className="p__product">
            Son eklenen doğal taş bileklikleri keşfe çık
          </p>
        </div>
        <div className="container ">
          <div className="row">
            <div className="col-md-3 col-sm-6 mt-5">
              <div className="card my-3 w-100 text-center">
                <img src={bracelet} className="card-img-top"></img>
                <div className="card-body">
                  <h4 className="card-title">Yosun Taşı Bileklik</h4>

                  <p className="card-text p__normal p__card">160,00 ₺</p>
                  <a className="btn card-link">Ürünü İncele </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mt-5">
              <div className="card my-3 w-100 text-center">
                <img src={bracelet} className="card-img-top"></img>
                <div className="card-body">
                  <h4 className="card-title">Yosun Taşı Bileklik</h4>

                  <p className="card-text p__normal p__card">160,00 ₺</p>
                  <a className="btn card-link">Ürünü İncele </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mt-5">
              <div className="card my-3 w-100 text-center">
                <img src={bracelet} className="card-img-top"></img>
                <div className="card-body">
                  <h4 className="card-title">Yosun Taşı Bileklik</h4>

                  <p className="card-text p__normal p__card">160,00 ₺</p>
                  <a className="btn card-link">Ürünü İncele </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mt-5">
              <div className="card my-3 w-100 text-center">
                <img src={bracelet} className="card-img-top"></img>
                <div className="card-body">
                  <h4 className="card-title">Yosun Taşı Bileklik</h4>

                  <p className="card-text p__normal p__card">160,00 ₺</p>
                  <a className="btn card-link">Ürünü İncele </a>
                </div>
              </div>
            </div>
          </div>
          <a className="btn a__product ">Daha Fazlasını Gör</a>
        </div>
        {/*özel seri kolyeler */}
        <div className="row mt-5 d-flex justify-conetnt-center">
          <h1 className="mt-5 h1__product">Özel Seri Kolyeler</h1>
          <p className="p__product">
            Son eklenen özel seri kolyeleri keşfe çık
          </p>
        </div>
        <div className="container ">
          <div className="row">
            <div className="col-md-3 col-sm-6 mt-5">
              <div className="card my-3 w-100 text-center">
                <img src={lnecklace2} className="card-img-top"></img>
                <div className="card-body">
                  <h4 className="card-title">Altın Kaplama Sitrin Kolye</h4>

                  <p className="card-text p__normal p__card">190,00 ₺</p>
                  <a className="btn card-link">Ürünü İncele </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mt-5">
              <div className="card my-3 w-100 text-center">
                <img src={lnecklace2} className="card-img-top"></img>
                <div className="card-body">
                  <h4 className="card-title">Altın Kaplama Sitrin Kolye</h4>

                  <p className="card-text p__normal p__card">190,00 ₺</p>
                  <a className="btn card-link">Ürünü İncele </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mt-5">
              <div className="card my-3 w-100 text-center">
                <img src={lnecklace2} className="card-img-top"></img>
                <div className="card-body">
                  <h4 className="card-title">Altın Kaplama Sitrin Kolye</h4>

                  <p className="card-text p__normal p__card">190,00 ₺</p>
                  <a className="btn card-link">Ürünü İncele </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mt-5">
              <div className="card my-3 w-100 text-center">
                <img src={lnecklace2} className="card-img-top"></img>
                <div className="card-body">
                  <h4 className="card-title">Altın Kaplama Sitrin Kolye</h4>

                  <p className="card-text p__normal p__card">190,00 ₺</p>
                  <a className="btn card-link">Ürünü İncele </a>
                </div>
              </div>
            </div>
          </div>
          <a className="btn a__product ">Daha Fazlasını Gör</a>
        </div>
        {/*baby kolye serisi */}
        <div id="baby" className="row mt-5 d-flex justify-conetnt-center">
          <h1 className="mt-5 h1__product">Baby Kolye Serisi</h1>
          <p className="p__product">
            Son eklenen doğal taş baby tasarım kolyeleri keşfe çık
          </p>
        </div>
        <div className="container mb-5 ">
          <div className="row">
            <div className="col-md-3 col-sm-6 mt-5">
              <div className="card my-3 w-100 text-center">
                <img src={baby} className="card-img-top"></img>
                <div className="card-body">
                  <h4 className="card-title">Altın Kaplama Baby Ametist Kolye</h4>

                  <p className="card-text p__normal p__card">210,00 ₺</p>
                  <a className="btn card-link">Ürünü İncele </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mt-5">
              <div className="card my-3 w-100 text-center">
                <img src={baby} className="card-img-top"></img>
                <div className="card-body">
                  <h4 className="card-title">Altın Kaplama Baby Ametist Kolye</h4>

                  <p className="card-text p__normal p__card">210,00 ₺</p>
                  <a className="btn card-link">Ürünü İncele </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mt-5">
              <div className="card my-3 w-100 text-center">
                <img src={baby} className="card-img-top"></img>
                <div className="card-body">
                  <h4 className="card-title">Altın Kaplama Baby Ametist Kolye</h4>

                  <p className="card-text p__normal p__card">210,00 ₺</p>
                  <a className="btn card-link">Ürünü İncele </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mt-5">
              <div className="card my-3 w-100 text-center">
                <img src={baby} className="card-img-top"></img>
                <div className="card-body">
                  <h4 className="card-title">Altın Kaplama Baby Ametist Kolye</h4>

                  <p className="card-text p__normal p__card">210,00 ₺</p>
                  <a className="btn card-link">Ürünü İncele </a>
                </div>
              </div>
            </div>
          </div>
          <a className="btn a__product ">Daha Fazlasını Gör</a>
        </div>

      </div>
    </div>
  );
}

export default ProductScreen;
