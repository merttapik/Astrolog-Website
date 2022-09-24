import React from "react";
import CountUp from "react-countup";
import "../css/css/HomeScreen/Success.css";
import VisibilitySensor from "react-visibility-sensor";

function Succses() {
  return (
    <div className="service  component__space background">
      <div className="container mt-5">
        <div className="row mt-5 mb-5  ">
          <div className="col-md-3 col-sm-12 d-flex justify-content-center  ">
            <h1>
            <CountUp end={650} redraw={true} duration={1}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span className="h1" ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </h1>{" "}
            <h1>+ Seans</h1>
          </div>
          <div className="col-md-3 col-sm-12 d-flex justify-content-center  ">
            <h1>
              <CountUp end={500} redraw={true} duration={1}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span className="h1" ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </h1>{" "}
            <h1> Mutlu Müşteri</h1>
          </div>
          <div className="col-md-3 col-sm-12 d-flex justify-content-center  ">
            <h1>
            <CountUp end={100} redraw={true} duration={1}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span className="h1" ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </h1>{" "}
            <h1>% Destek</h1>
          </div>
          <div className="col-md-3 col-sm-12 d-flex justify-content-center ">
            <h1>
            <CountUp end={100} redraw={true} duration={1}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span className="h1" ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </h1>{" "}
            <h1>% Başarı</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Succses;
