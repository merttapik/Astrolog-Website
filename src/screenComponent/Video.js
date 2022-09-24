import React from "react";
import "../css/css/HomeScreen/Video.css";
function Video() {
  const year = new Date().getFullYear();
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="videoWrapper mt-5 p-5">
          <h1 className="heading">
            {" "}
            {year} YILINDA BURCUNUZU NELER BEKLİYOR ?
          </h1>
          <div className="videow">
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
  );
}

export default Video;
