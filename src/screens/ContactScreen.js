import React from "react";
import Map from "../components/Map";
import {Marker } from 'react-google-maps';
import SmallNav from "../components/SmallNav";

function ContactScreen() {
  return (
    <div>
      <SmallNav />
      <div className="bglog">
        <div className="row row__height d-flex  ">
          <div className="col-md-6 d-flex justify-content-center mt-5 ">
            
            <span>
              <ul className="ml-5 ">
                <li className="mb-5 p-3 ">
                <h1 className="h1__big ">Bana Ulaşın</h1>
                </li>
                <li className="li__hover p-3">
                  <svg
                    className="svg__normal mb-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z" />
                  </svg>
                  <h4>Adresimiz: </h4>
                  <p className="p__normal">
                    Gaybi Efendi Mahallesi Bekir Avlupınar{" "}
                  </p>
                  <p className="p__normal">caddesi Kütahya/Merkez</p>
                </li>
                <li className="mt-5 p-3 li__hover">
                  <svg className="mb-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z" />
                  </svg>
                  <h4>Sabit Telefon Numaramız: </h4>
                  <p className="p__normal">
                   +90 212 973 23 00
                  </p>
                </li>
                <li className="mt-5 p-3 li__hover">
                <svg className="mb-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M304 0h-224c-35.35 0-64 28.65-64 64v384c0 35.35 28.65 64 64 64h224c35.35 0 64-28.65 64-64V64C368 28.65 339.3 0 304 0zM192 480c-17.75 0-32-14.25-32-32s14.25-32 32-32s32 14.25 32 32S209.8 480 192 480zM304 64v320h-224V64H304z"/></svg>
                  <h4>Cep Telefonu Numaramız: </h4>
                  <p className="p__normal">
                   +90 532 973 23 41
                  </p>
                </li>
                 <li className="mt-5 p-3 li__hover">
                 <svg className="mb-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M191.9 448.6c-9.766 0-19.48-2.969-27.78-8.891L32 340.2V480c0 17.62 14.38 32 32 32h256c17.62 0 32-14.38 32-32v-139.8L220.2 439.5C211.7 445.6 201.8 448.6 191.9 448.6zM192 192c0-35.25 28.75-64 64-64h224V32c0-17.62-14.38-32-32-32H128C110.4 0 96 14.38 96 32v192h96V192zM320 256H64C46.38 256 32 270.4 32 288v12.18l151 113.8c5.25 3.719 12.7 3.734 18.27-.25L352 300.2V288C352 270.4 337.6 256 320 256zM576 160H256C238.4 160 224 174.4 224 192v32h96c33.25 0 60.63 25.38 63.75 57.88L384 416h192c17.62 0 32-14.38 32-32V192C608 174.4 593.6 160 576 160zM544 288h-64V224h64V288z"/></svg>
                 <h4>E-Posta Adresizmiz : </h4>
                  <p className="p__normal">
                   info@basakaktas.com
                  </p>
                 </li>
              </ul>
            </span>
          </div>
          <div className="col-md-6 d-flex  mt-5 ">
                <Map> <Marker position={{ lat: 38.423733, lng: 27.142826 }} /></Map>
                <hr className="hr__normal mt-4 mb-4"></hr>
                <img className=""></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactScreen;
