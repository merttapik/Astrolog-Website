import React from "react";
import { Link } from "react-router-dom";
 
function Appointment() {
    
  return (
    <div>
      <div className="row ">
        <h1 className="h1__services">Randevu al</h1>
        <div className="row  justify-content-center ">
          <div className="col-md-5">
            <div className="boxshadow p-5 mt-5 mb-5">
              <label className="mr-3" for="services">
                Hizmet seç:
              </label>

              <select name="service">
                <option value="Birthmap">Doğum Haritası</option>
                <option value="saab">Tarot Seansı</option>
                <option value="mercedes">İlişki Terapisi</option>
                <option value="audi">A BARS Eğitmenliği</option>
                <option value="mercedes">Astroloji Dersleri</option>
              </select>
              <input
                type="date"
                name="bday"
                id="startdateId"
                required
                pattern="\d{4}-\d{2}-\d{2}"
                className="form-control"
               
              ></input>
                <small className="mr-4">
                Çalışma saatleri 09.00-18.00 arasındadır{" "}
              </small>
              <input
                type="time"
                id="appt"
                defaultValue="09:00"
                
                name="appt"
                min="09:00"
                max="18:00"
                required
              ></input>

             

             <Link to="/Profil/id/Randevularim"><button className="btn btn-primary btn_appoitment mt-3">
                Onayla & Ödeme Yap
              </button></Link> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
